import { useEffect, useState, useContext } from "react";
import DataContext from "./../../../context/DataContext";
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";
import { KONNEKTOREN_TEST_ROUTE } from '../../../utils/consts'
import TestPage from './../../Konnektoren/TestPage/TestPage.jsx'
import {
    Container,
    Heading,
    Text,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid,
    Box,
    CircularProgress,
    CircularProgressLabel,
    VStack,
    HStack,
    useColorModeValue,
    Badge,
    Icon,
    Card,
    CardBody,
    CardHeader
} from '@chakra-ui/react'
import {
    FaTrophy,
    FaCheckCircle,
    FaTimesCircle,
    FaRedo,
    FaPlay,
    FaStar,
    FaMedal
} from 'react-icons/fa'


const ResultPage = ({ currentConnectors }) => {
    const { setAnswerState } = useContext(DataContext);
    const { width, height } = useWindowSize()
    const [allQuestions, setAllQuestions] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongtAnswers, setWrongAnswers] = useState(0)
    const [isNewTest, setIsNewTest] = useState(false)

    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    function calculatePercentage(number, percentage) {
        return (percentage * number) / 100 * 100;
    }

    useEffect(() => {
        setAllQuestions(currentConnectors.length || 0)
        setCorrectAnswers(currentConnectors.filter(item => item.type === item.answer).length)
        setWrongAnswers(currentConnectors.filter(item => item.type !== item.answer).length)
        sessionStorage.setItem("oldQuestions", JSON.stringify(currentConnectors))
    }, [currentConnectors])

    const Results = ({ answers }) => {
        const cardBg = useColorModeValue('white', 'gray.800')
        const borderColor = useColorModeValue('gray.200', 'gray.600')
        const textColor = useColorModeValue('gray.600', 'gray.300')
        const headingColor = useColorModeValue('gray.800', 'white')

        return (
            <VStack spacing={4} w="100%">
                <Heading size="lg" color={headingColor} mb={4}>
                    Detaillierte Ergebnisse
                </Heading>
                {!!Object.keys(answers).length && answers.map((item, id) => (
                    <Card
                        key={id}
                        w="100%"
                        bg={cardBg}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="xl"
                        boxShadow="sm"
                    >
                        <CardBody p={6}>
                            <HStack spacing={4} align="start">
                                <Badge
                                    colorScheme="purple"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    fontSize="sm"
                                >
                                    {id + 1}
                                </Badge>

                                <VStack align="start" spacing={2} flex={1}>
                                    <Text fontWeight="600" color={headingColor} fontSize="lg">
                                        {item.title}
                                    </Text>

                                    <HStack spacing={4} flexWrap="wrap">
                                        <VStack align="start" spacing={1}>
                                            <Text fontSize="sm" color={textColor} fontWeight="500">
                                                Ihre Antwort:
                                            </Text>
                                            <HStack>
                                                <Icon
                                                    as={item.answer === item.type ? FaCheckCircle : FaTimesCircle}
                                                    color={item.answer === item.type ? "green.500" : "red.500"}
                                                    w={4}
                                                    h={4}
                                                />
                                                <Text
                                                    fontSize="sm"
                                                    color={item.answer === item.type ? "green.500" : "red.500"}
                                                    fontWeight="600"
                                                    textDecor={item.answer !== item.type ? 'line-through' : 'none'}
                                                >
                                                    {item.answer.replace(/-/g, ' ')}
                                                </Text>
                                            </HStack>
                                        </VStack>

                                        <VStack align="start" spacing={1}>
                                            <Text fontSize="sm" color={textColor} fontWeight="500">
                                                Richtige Antwort:
                                            </Text>
                                            <Text fontSize="sm" color="green.500" fontWeight="600">
                                                {item.type.replace(/-/g, ' ')} ({item.connector_type})
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </CardBody>
                    </Card>
                ))}
            </VStack>
        )
    }

    if (isNewTest) return <TestPage />

    // Определяем уровень успеха
    const successRate = (correctAnswers / allQuestions) * 100
    const getSuccessLevel = () => {
        if (successRate >= 90) return { level: "Ausgezeichnet", color: "green", icon: FaMedal }
        if (successRate >= 70) return { level: "Gut", color: "blue", icon: FaTrophy }
        if (successRate >= 50) return { level: "Befriedigend", color: "yellow", icon: FaStar }
        return { level: "Verbesserung nötig", color: "red", icon: FaRedo }
    }

    const successInfo = getSuccessLevel()

    return (
        <Box>
            <Container maxW='1400px' py={8}>
                <VStack spacing={8} w="100%">
                    {/* Breadcrumb */}
                    <Box w="100%">
                        <Breadcrumb fontWeight='medium' fontSize='md'>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={KONNEKTOREN_TEST_ROUTE}>Start test</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Result</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <VStack spacing={8} w="100%">
                        {/* Заголовок с результатом */}
                        <VStack spacing={4} textAlign="center">
                            <Badge
                                colorScheme={successInfo.color}
                                fontSize="lg"
                                px={6}
                                py={3}
                                borderRadius="full"
                                variant="subtle"
                            >
                                <Icon as={successInfo.icon} mr={2} />
                                {successInfo.level}
                            </Badge>

                            <Heading as='h1' size='2xl' color={headingColor} fontWeight="700">
                                Ihre Testergebnisse
                            </Heading>

                            <Text fontSize="lg" color={textColor} maxW="600px">
                                Sie haben {correctAnswers} von {allQuestions} Fragen richtig beantwortet.
                                Das entspricht {Math.round(successRate)}% korrekten Antworten.
                            </Text>
                        </VStack>

                        {/* Статистика */}
                        <Card w="100%" maxW="800px" bg={cardBg} borderRadius="2xl" boxShadow="xl" border="1px solid" borderColor={borderColor}>
                            <CardHeader textAlign="center" pb={4}>
                                <Heading size="lg" color={headingColor}>
                                    Statistiken
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
                                    <VStack spacing={4}>
                                        <Icon as={FaStar} w={8} h={8} color="blue.500" />
                                        <Text fontSize="sm" color={textColor} fontWeight="500">Gesamt</Text>
                                        <CircularProgress
                                            value={100}
                                            color="blue.500"
                                            size="100px"
                                            thickness="8px"
                                        >
                                            <CircularProgressLabel>
                                                <Text fontSize="2xl" fontWeight="700" color="blue.500">
                                                    {allQuestions}
                                                </Text>
                                            </CircularProgressLabel>
                                        </CircularProgress>
                                    </VStack>

                                    <VStack spacing={4}>
                                        <Icon as={FaCheckCircle} w={8} h={8} color="green.500" />
                                        <Text fontSize="sm" color={textColor} fontWeight="500">Richtig</Text>
                                        <CircularProgress
                                            value={calculatePercentage(allQuestions, correctAnswers)}
                                            color="green.500"
                                            size="100px"
                                            thickness="8px"
                                        >
                                            <CircularProgressLabel>
                                                <Text fontSize="2xl" fontWeight="700" color="green.500">
                                                    {correctAnswers}
                                                </Text>
                                            </CircularProgressLabel>
                                        </CircularProgress>
                                    </VStack>

                                    <VStack spacing={4}>
                                        <Icon as={FaTimesCircle} w={8} h={8} color="red.500" />
                                        <Text fontSize="sm" color={textColor} fontWeight="500">Falsch</Text>
                                        <CircularProgress
                                            value={calculatePercentage(allQuestions, wrongtAnswers)}
                                            color="red.500"
                                            size="100px"
                                            thickness="8px"
                                        >
                                            <CircularProgressLabel>
                                                <Text fontSize="2xl" fontWeight="700" color="red.500">
                                                    {wrongtAnswers}
                                                </Text>
                                            </CircularProgressLabel>
                                        </CircularProgress>
                                    </VStack>
                                </Grid>
                            </CardBody>
                        </Card>

                        {/* Детальные результаты */}
                        <Box w="100%" maxW="1000px">
                            <Results answers={currentConnectors} />
                        </Box>

                        {/* Кнопки действий */}
                        <Card w="100%" maxW="600px" bg={cardBg} borderRadius="2xl" boxShadow="xl" border="1px solid" borderColor={borderColor}>
                            <CardBody p={8}>
                                <VStack spacing={6}>
                                    <Heading size="md" color={headingColor} textAlign="center">
                                        Was möchten Sie als nächstes tun?
                                    </Heading>

                                    <HStack spacing={4} flexWrap="wrap" justify="center">
                                        <Button
                                            size="lg"
                                            colorScheme="purple"
                                            bgGradient="linear(to-r, purple.500, blue.500)"
                                            _hover={{
                                                bgGradient: "linear(to-r, purple.600, blue.600)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "xl"
                                            }}
                                            leftIcon={<Icon as={FaPlay} />}
                                            onClick={() => {
                                                setAnswerState()
                                                setIsNewTest(true)
                                            }}
                                            px={8}
                                            py={6}
                                            borderRadius="xl"
                                            fontWeight="600"
                                        >
                                            Neuer Test
                                        </Button>

                                        <Button
                                            size="lg"
                                            variant="outline"
                                            colorScheme="purple"
                                            _hover={{
                                                bg: "purple.50",
                                                transform: "translateY(-2px)",
                                                boxShadow: "lg"
                                            }}
                                            leftIcon={<Icon as={FaRedo} />}
                                            onClick={() => {
                                                setAnswerState('old')
                                                setIsNewTest(true)
                                            }}
                                            px={8}
                                            py={6}
                                            borderRadius="xl"
                                            fontWeight="600"
                                        >
                                            Tests wiederholen
                                        </Button>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                    </VStack>
                </VStack>
            </Container>

            <Confetti
                width={width}
                height={height}
            />
        </Box>
    )
}

export default ResultPage