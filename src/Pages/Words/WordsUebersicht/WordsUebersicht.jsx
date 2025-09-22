import { useState } from 'react'
import WordsList from "../../../components/WordsList/WordsList"
import { useWordsQuery } from "../../../hooks/useWordsQuery.js"
import { useParams } from 'react-router-dom'
import {
    Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    Flex,
    Button, ButtonGroup, Stack, useColorModeValue, useColorMode, IconButton,
    Box,
    VStack,
    HStack,
    Text,
    Badge,
    Card,
    CardBody,
    Icon
} from '@chakra-ui/react'
import { FaBookOpen, FaGlobe, FaLanguage } from 'react-icons/fa'
import {
    WORDS_ROUTE
} from '../../../utils/consts'


const WordsUebersicht = () => {
    const { data, isLoading, isSuccess } = useWordsQuery()
    const [view, setView] = useState("ru")
    const { theme } = useParams()

    const { title, unterthemen } = isSuccess && data.find(item => item.title === theme)

    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    if (isLoading)
        return (
            <Box display="flex" alignItems="center" justifyContent="center" minH="50vh">
                <VStack spacing={4}>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="purple.500"
                        size="xl"
                    />
                    <Text color={textColor}>Lade Wörter...</Text>
                </VStack>
            </Box>
        )

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
                                <BreadcrumbLink href={WORDS_ROUTE}>Wörter</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <VStack spacing={8} w="100%">
                        {/* Заголовок */}
                        <VStack spacing={4} textAlign="center">
                            <Box
                                p={6}
                                bg={cardBg}
                                borderRadius="2xl"
                                boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                border="1px solid"
                                borderColor={borderColor}
                            >
                                <Icon as={FaBookOpen} w={16} h={16} color="teal.500" />
                            </Box>

                            <Heading as='h1' size='2xl' color={headingColor} fontWeight="700">
                                {title}
                            </Heading>

                            <Text fontSize="lg" color={textColor} maxW="600px">
                                Erweitern Sie Ihren Wortschatz mit thematisch organisierten Wörtern und Ausdrücken.
                            </Text>

                            {isSuccess && unterthemen && (
                                <Badge colorScheme="teal" fontSize="sm" px={4} py={2} borderRadius="full">
                                    {unterthemen.length} Themen verfügbar
                                </Badge>
                            )}
                        </VStack>

                        {/* Переключатель языка */}
                        <Box w="100%">
                            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor={borderColor}>
                                <CardBody p={6}>
                                    <HStack justify="space-between" align="center">
                                        <HStack spacing={3}>
                                            <Icon as={FaGlobe} w={5} h={5} color="teal.500" />
                                            <Text fontWeight="600" color={headingColor}>
                                                Übersetzungssprache
                                            </Text>
                                        </HStack>

                                        <ButtonGroup size="md" isAttached variant="outline">
                                            <Button
                                                leftIcon={<Icon as={FaLanguage} />}
                                                colorScheme={view === "ru" ? "teal" : "gray"}
                                                variant={view === "ru" ? "solid" : "outline"}
                                                onClick={() => setView("ru")}
                                            >
                                                Русский
                                            </Button>
                                            <Button
                                                leftIcon={<Icon as={FaGlobe} />}
                                                colorScheme={view === "en" ? "teal" : "gray"}
                                                variant={view === "en" ? "solid" : "outline"}
                                                onClick={() => setView("en")}
                                            >
                                                English
                                            </Button>
                                        </ButtonGroup>
                                    </HStack>
                                </CardBody>
                            </Card>
                        </Box>

                        {/* Список слов */}
                        <Box w="100%">
                            {isSuccess ? (
                                <WordsList state={unterthemen} view={view} />
                            ) : (
                                <Box display="flex" justifyContent="center" py={8}>
                                    <Spinner
                                        thickness="4px"
                                        speed="0.65s"
                                        emptyColor="gray.200"
                                        color="teal.500"
                                        size="xl"
                                    />
                                </Box>
                            )}
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}

export default WordsUebersicht

