import React, { useState, useContext, useEffect, useRef } from "react";
import DataContext from "../../../context/DataContext.jsx";
import ConnectorTestCard from "../../../components/ConnectorTestCard/ConnectorTestCard.jsx";
import Progress from '../../../components/Progress/Progress.jsx'
import 'react-circular-progressbar/dist/styles.css';
import ResultPage from '../../Konnektoren/ResultPage/ResultPage.jsx'
import {
    Container,
    Text,
    Heading,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack,
    Flex,
    Box,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
    useDisclosure,
    Collapse,
    // createMultiStyleConfigHelpers
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, QuestionIcon, StarIcon } from '@chakra-ui/icons'

// Кастомный красивый селект компонент
const CustomSelect = ({ options, value, onChange, placeholder = "Выберите опцию" }) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const selectedOption = options.find(opt => opt.value === value)
    const selectRef = useRef(null)

    // Цвета для темной/светлой темы
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('purple.200', 'purple.600')
    const hoverBg = useColorModeValue('purple.50', 'purple.900')
    const activeBg = useColorModeValue('purple.100', 'purple.800')
    const textColor = useColorModeValue('gray.900', 'white')
    const selectedBg = useColorModeValue('purple.100', 'purple.700')
    const selectedTextColor = useColorModeValue('purple.900', 'purple.100')
    const hoverBorderColor = useColorModeValue('purple.300', 'purple.500')
    const focusBorderColor = useColorModeValue('purple.500', 'purple.400')
    const focusShadow = useColorModeValue('0 0 0 3px rgba(147, 51, 234, 0.1)', '0 0 0 3px rgba(147, 51, 234, 0.3)')
    const iconColor = useColorModeValue('purple.700', 'purple.300')
    const selectedIconColor = useColorModeValue('purple.900', 'purple.100')

    // Закрытие при клике вне селекта
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose])

    const handleSelect = (optionValue) => {
        onChange({ target: { value: optionValue } })
        onClose()
    }

    return (
        <Box ref={selectRef} position="relative" w="100%">
            <Button
                onClick={onToggle}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                variant="outline"
                w="100%"
                justifyContent="space-between"
                h="60px"
                fontSize="md"
                fontWeight="500"
                borderRadius="xl"
                border="2px solid"
                borderColor={borderColor}
                bg={bgColor}
                color={textColor}
                _hover={{
                    borderColor: hoverBorderColor,
                    bg: hoverBg
                }}
                _active={{
                    bg: activeBg
                }}
                _focus={{
                    borderColor: focusBorderColor,
                    boxShadow: focusShadow
                }}
                transition="all 0.2s"
                px={4}
            >
                <HStack spacing={3}>
                    <Box color={iconColor} fontSize="lg">
                        {selectedOption ? selectedOption.icon : <QuestionIcon />}
                    </Box>
                    <VStack spacing={0} align="start">
                        <Text fontSize="md" fontWeight="600" color={textColor}>
                            {selectedOption ? selectedOption.label : placeholder}
                        </Text>
                        {selectedOption && (
                            <Text fontSize="xs" opacity={0.8} color={textColor}>
                                {selectedOption.description}
                            </Text>
                        )}
                    </VStack>
                </HStack>
            </Button>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    right="0"
                    zIndex={10}
                    mt={2}
                    bg={bgColor}
                    borderRadius="xl"
                    border="2px solid"
                    borderColor={borderColor}
                    boxShadow="xl"
                    overflow="hidden"
                >
                    {options.map((option, index) => (
                        <Button
                            key={option.value}
                            variant="ghost"
                            w="100%"
                            h="60px"
                            justifyContent="flex-start"
                            fontSize="md"
                            fontWeight="500"
                            borderRadius="0"
                            bg={value === option.value ? selectedBg : "transparent"}
                            color={value === option.value ? selectedTextColor : textColor}
                            _hover={{
                                bg: value === option.value ? activeBg : hoverBg,
                                color: selectedTextColor
                            }}
                            _active={{
                                bg: activeBg
                            }}
                            onClick={() => handleSelect(option.value)}
                            borderBottom={index < options.length - 1 ? "1px solid" : "none"}
                            borderBottomColor={borderColor}
                            transition="all 0.2s"
                            px={4}
                        >
                            <HStack spacing={3} w="100%" justify="flex-start">
                                <Box
                                    color={value === option.value ? selectedIconColor : iconColor}
                                    fontSize="lg"
                                >
                                    {option.icon}
                                </Box>
                                <VStack spacing={0} align="start" flex={1}>
                                    <Text
                                        fontSize="md"
                                        fontWeight="600"
                                        color={value === option.value ? selectedTextColor : textColor}
                                    >
                                        {option.label}
                                    </Text>
                                    <Text
                                        fontSize="xs"
                                        opacity={0.8}
                                        color={value === option.value ? selectedTextColor : textColor}
                                    >
                                        {option.description}
                                    </Text>
                                </VStack>
                            </HStack>
                        </Button>
                    ))}
                </Box>
            </Collapse>
        </Box>
    )
}

const TestStartPage = () => {
    const { currentConnectors, setCurrentConnectors } = useContext(DataContext);
    const [unreadConnectors] = useState(currentConnectors);
    const [readConnector, setReadConnector] = useState([]);
    const [randomConnector, setRandomConnector] = useState({});
    const buttonRef = useRef(null);
    const [isRight, setIsRight] = useState(null)
    const [buttonLock, setButtonLock] = useState(false)
    const [numberOfQuestions, setNumberOfQuestions] = useState('all')

    // Цвета для темной/светлой темы
    // const bgColor = useColorModeValue('gray.50', 'gray.900')
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const textColor = useColorModeValue('gray.800', 'white')
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.300')

    const options = [
        {
            label: "10 Fragen",
            value: "10",
            icon: <QuestionIcon />,
            description: "Schneller Test"
        },
        {
            label: "20 Fragen",
            value: "20",
            icon: <QuestionIcon />,
            description: "Kurzer Test"
        },
        {
            label: "30 Fragen",
            value: "30",
            icon: <QuestionIcon />,
            description: "Mittlerer Test"
        },
        {
            label: "40 Fragen",
            value: "40",
            icon: <QuestionIcon />,
            description: "Längerer Test"
        },
        {
            label: "50 Fragen",
            value: "50",
            icon: <QuestionIcon />,
            description: "Umfangreicher Test"
        },
        {
            label: "Alle Fragen",
            value: "all",
            icon: <StarIcon />,
            description: "Vollständiger Test"
        }
    ]

    const handleChangeSelect = (e) => {
        const value = e.target.value
        setNumberOfQuestions(value)
        // Здесь можно добавить логику для фильтрации вопросов
    }

    useEffect(() => {
        setRandomConnector(unreadConnectors[0])
    }, [unreadConnectors])

    const handleConnectorClick = (index, feld) => {
        const newConnectors = currentConnectors.map(item => {
            if (item.id === index) {
                const newItem = {
                    ...item,
                    "read": true,
                    "answer": feld
                }
                setReadConnector([...readConnector, newItem])
                return newItem
            }
            return item
        })
        setCurrentConnectors(newConnectors)
        unreadConnectors?.splice(0, 1)
    };

    const checkAnswer = (item) => {
        setButtonLock(true)
        if (item === randomConnector.sentence_type) {
            setIsRight('right')
        } else if (item !== randomConnector.sentence_type) {
            setIsRight('wrong')
        }
    }


    const testCardButtonClick = (e) => {
        if (e.target.classList.contains('connector-test-card__button')) {
            handleConnectorClick(e.currentTarget.id, e.target.id);
            checkAnswer(e.target.id)

            setTimeout(() => {
                setIsRight(null)
                setButtonLock(false)
                setRandomConnector(unreadConnectors[0])
            }, 500)
        }
    }


    return (
        <>
            {currentConnectors.length && randomConnector ? (
                <>
                    <Container maxW='1280px' py={8}>
                        <VStack spacing={8} w="100%">
                            {/* Breadcrumb */}
                            <Box w="100%">
                                <Breadcrumb fontWeight='medium' fontSize='md'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='/konnektoren-test'>Konnektoren Test</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink href='#'>Start Test</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Box>
                            <VStack spacing={8} w="100%">
                                {/* Заголовок и описание */}
                                <VStack spacing={4} textAlign="center" maxW="4xl">
                                    <Heading
                                        fontSize={{ base: '2xl', sm: '4xl' }}
                                        fontWeight="bold"
                                        color={textColor}
                                    >
                                        Konnektoren Test
                                    </Heading>
                                    <Text
                                        fontSize={{ base: 'md', sm: 'lg' }}
                                        color={secondaryTextColor}
                                        maxW="600px"
                                        lineHeight="1.6"
                                    >
                                        Um den Test an Ihre Bedürfnisse anzupassen, können Sie die Anzahl der Fragen auswählen, die im Test angezeigt werden sollen.
                                    </Text>
                                </VStack>

                                {/* Настройки теста */}
                                <Box
                                    w="100%"
                                    maxW="600px"
                                    bg={cardBg}
                                    p={6}
                                    borderRadius="xl"
                                    border="1px solid"
                                    borderColor={borderColor}
                                    boxShadow="lg"
                                >
                                    <VStack spacing={4}>
                                        <VStack spacing={4} w="100%" align="stretch">
                                            <VStack align="start" spacing={2}>
                                                <Text fontWeight="600" color={textColor} fontSize="lg">
                                                    Anzahl der Fragen
                                                </Text>
                                                <Text fontSize="sm" color={secondaryTextColor}>
                                                    Wählen Sie, wie viele Fragen Sie beantworten möchten
                                                </Text>
                                            </VStack>
                                            <CustomSelect
                                                options={options}
                                                value={numberOfQuestions}
                                                onChange={handleChangeSelect}
                                                placeholder="Anzahl der Fragen wählen"
                                            />
                                        </VStack>

                                        <HStack spacing={4} w="100%" justify="center">
                                            <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="full">
                                                Verfügbare Fragen: {currentConnectors.length}
                                            </Badge>
                                            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                                                Geschätzte Zeit: {Math.ceil(currentConnectors.length * 0.5)} Min
                                            </Badge>
                                        </HStack>
                                    </VStack>
                                </Box>

                                {/* Тест */}
                                <Flex w={'100%'} className="connector-test" flexDirection={'column'}>
                                    <Progress bgcolor="#6a1b9a" completed={currentConnectors.length} currentValue={readConnector.length} />
                                    <Stack w={'100%'} className={`connector-test__body ${isRight}`} >
                                        <ConnectorTestCard connector={randomConnector} testCardButtonClick={testCardButtonClick} buttonRef={buttonRef} buttonLock={buttonLock} />
                                    </Stack>
                                </Flex>
                            </VStack>
                        </VStack>
                    </Container>
                </>

            ) : (
                <ResultPage currentConnectors={currentConnectors} />
            )}

        </>

    )
}

export default TestStartPage



