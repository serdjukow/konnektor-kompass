import React from "react";
import { Link } from 'react-router-dom'
import {
    Container,
    Text,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Button,
    Highlight,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    Box,
    VStack,
    HStack,
    useColorModeValue,
    Badge,
    Icon
} from '@chakra-ui/react'
import { FaBookOpen, FaLanguage, FaGraduationCap } from 'react-icons/fa'
import {
    WORDS_ROUTE
} from '../../../utils/consts'
import { useWordsQuery } from "../../../hooks/useWordsQuery.js"
import { colortSheme } from '../../../utils/theme.js'


const WordsPage = () => {
    const { data, isLoading, isSuccess } = useWordsQuery()

    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    if (isLoading) {
        return (
            <Box display="flex" alignItems="center" justifyContent="center" minH="50vh">
                <VStack spacing={4}>
                    <Spinner size="xl" color="purple.500" />
                    <Text color={textColor}>Lade Wortschatz...</Text>
                </VStack>
            </Box>
        )
    }

    return (
        <Box>
            {/* Декоративные элементы */}
            <Box
                position="absolute"
                top="10%"
                left="10%"
                w="200px"
                h="200px"
                borderRadius="full"
                bg="purple.200"
                opacity={0.1}
                _dark={{ bg: "purple.800" }}
            />
            <Box
                position="absolute"
                bottom="20%"
                right="15%"
                w="150px"
                h="150px"
                borderRadius="full"
                bg="blue.200"
                opacity={0.1}
                _dark={{ bg: "blue.800" }}
            />

            <Container maxW="1400px" py={8}>
                <VStack spacing={8} align="stretch">
                    {/* Breadcrumb */}
                    <Box>
                        <Breadcrumb fontWeight="medium" fontSize="md">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="#">Wörter</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                    {/* Header */}
                    <Box textAlign="center">
                        <VStack spacing={4}>
                            <Badge
                                colorScheme="green"
                                variant="subtle"
                                px={4}
                                py={2}
                                borderRadius="full"
                                fontSize="sm"
                                leftIcon={<Icon as={FaBookOpen} />}
                            >
                                Wortschatz
                            </Badge>
                            <Heading
                                as="h1"
                                size="2xl"
                                color={headingColor}
                                bgGradient="linear(to-r, purple.600, blue.600, green.600)"
                                bgClip="text"
                                fontWeight="bold"
                            >
                                Wortschatz
                            </Heading>
                            <Text
                                fontSize="lg"
                                color={textColor}
                                maxW="600px"
                                textAlign="center"
                            >
                                Erweitern Sie Ihren deutschen Wortschatz mit thematisch organisierten Vokabeln
                            </Text>
                        </VStack>
                    </Box>

                    {/* Main Content */}
                    <Card bg={cardBg} borderRadius="xl" boxShadow="xl" border="1px" borderColor={borderColor}>
                        <CardHeader pb={4}>
                            <VStack spacing={4}>
                                <Badge
                                    colorScheme="teal"
                                    variant="subtle"
                                    px={4}
                                    py={2}
                                    borderRadius="full"
                                    fontSize="md"
                                    leftIcon={<Icon as={FaGraduationCap} />}
                                >
                                    Alltag und Beruf - C1
                                </Badge>
                                <Text
                                    fontSize="lg"
                                    color={textColor}
                                    textAlign="center"
                                    fontWeight="medium"
                                >
                                    Fortgeschrittenes Vokabular für professionelle und alltägliche Kommunikation
                                </Text>
                            </VStack>
                        </CardHeader>
                        <CardBody>
                            <VStack spacing={4} align="stretch">
                                <Text fontSize="md" color={textColor} lineHeight="1.6">
                                    Wortschatz in Alltag und Beruf auf dem C1-Niveau in der deutschen Sprache umfasst einen umfangreichen und differenzierten Wortschatz, der sowohl
                                    für den täglichen Gebrauch als auch für berufliche Kontexte relevant ist. Auf diesem Niveau werden spezialisierte und abstrakte Begriffe sowie
                                    idiomatische Ausdrücke und Fachjargon erwartet.
                                </Text>
                                <Text fontSize="md" color={textColor} lineHeight="1.6">
                                    Im Alltag könnte das Vokabular Themen wie aktuelle Ereignisse, komplexe Diskussionen, Literatur und Kunst, sowie tiefgehende persönliche Meinungen
                                    und Gefühle abdecken. Im beruflichen Kontext werden Begriffe aus verschiedenen Fachbereichen, Management, Kommunikation und Verhandlungen erwartet.
                                </Text>
                                <Text fontSize="md" color={textColor} lineHeight="1.6">
                                    Der Wortschatz auf C1-Niveau ermöglicht es den Lernenden, sich klar, detailliert und fließend auszudrücken, sowohl mündlich als auch schriftlich,
                                    und komplexe Texte zu verstehen und zu interpretieren. Es ist ein wichtiger Schritt hin zu einer nahezu muttersprachlichen Kompetenz.
                                </Text>
                            </VStack>
                        </CardBody>
                        <CardFooter>
                            <VStack spacing={4} w="100%">
                                <Text color={textColor} fontWeight="medium" fontSize="lg">
                                    Wählen Sie ein Thema:
                                </Text>
                                <HStack spacing={3} flexWrap="wrap" justify="center" w="100%">
                                    {isSuccess ? data.map((item, id) => (
                                        <Link key={id} to={`${WORDS_ROUTE}/${item.title}`}>
                                            <Button
                                                colorScheme={colortSheme[id]}
                                                variant="outline"
                                                size="lg"
                                                leftIcon={<Icon as={FaLanguage} />}
                                                _hover={{
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "lg"
                                                }}
                                                transition="all 0.2s"
                                            >
                                                {item.title}
                                            </Button>
                                        </Link>
                                    )) : (
                                        <VStack spacing={2}>
                                            <Spinner size="lg" color="purple.500" />
                                            <Text color={textColor}>Lade Themen...</Text>
                                        </VStack>
                                    )}
                                </HStack>
                            </VStack>
                        </CardFooter>
                    </Card>
                </VStack>
            </Container>
        </Box>
    )
}

export default WordsPage