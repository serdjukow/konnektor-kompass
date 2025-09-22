import React from "react";
import {
    Container, Text, Heading, SimpleGrid, Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    Icon,
    useColorModeValue,
    VStack,
    HStack,
    Badge
} from '@chakra-ui/react'
import {
    FaBookOpen,
    FaLanguage,
    FaGraduationCap,
    FaRocket,
    FaTrophy,
    FaLightbulb,
    FaPlay,
    FaArrowRight
} from 'react-icons/fa'
import {
    KONNEKTOREN_TEST_ROUTE,
    KONNEKTOREN_UEBERSICHT_ROUTE,
    PREPOSITIONEN_UEBERSICHT_ROUTE,
    NOMEN_MIT_PREPOSITIONEN_ROUTE,
    VERBEN_MIT_PREPOSITIONEN_ROUTE,
    ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE,
    WORDS_ROUTE,
} from '../../utils/consts'


const GetStartedPageContent = [
    {
        title: "Konnektoren",
        text: "Konnektoren in Deutsch verbinden Teile eines Satzes oder Sätze miteinander, um die Verbindung und Logik im Text zu verbessern.",
        buttonText: "Lernen",
        buttonLink: KONNEKTOREN_UEBERSICHT_ROUTE,
        icon: FaLanguage,
        color: "blue",
        gradient: "linear(to-r, blue.400, blue.600)"
    },
    {
        title: "Präpositionen",
        text: "Präpositionen in Deutsch zeigen Beziehungen zwischen Wörtern im Satz, z.B. Ort, Zeit oder Richtung.",
        buttonText: "Lernen",
        buttonLink: PREPOSITIONEN_UEBERSICHT_ROUTE,
        icon: FaBookOpen,
        color: "green",
        gradient: "linear(to-r, green.400, green.600)"
    },
    {
        title: "Nomen mit Präpositionen",
        text: "Nomen mit Präpositionen in Deutsch sind Substantive, die oft mit bestimmten Präpositionen kombiniert werden, um Bedeutungen oder Verhältnisse im Satz zu verdeutlichen.",
        buttonText: "Lernen",
        buttonLink: NOMEN_MIT_PREPOSITIONEN_ROUTE,
        icon: FaGraduationCap,
        color: "purple",
        gradient: "linear(to-r, purple.400, purple.600)"
    },
    {
        title: "Verben mit Präpositionen",
        text: "Verben mit Präpositionen in Deutsch bilden feste Verbindungen mit bestimmten Präpositionen, um spezifische Bedeutungen oder Aktionen im Satz auszudrücken.",
        buttonText: "Lernen",
        buttonLink: VERBEN_MIT_PREPOSITIONEN_ROUTE,
        icon: FaLightbulb,
        color: "yellow",
        gradient: "linear(to-r, yellow.400, yellow.600)"
    },
    {
        title: "Adjektive mit Präpositionen",
        text: "Adjektive mit Präpositionen in Deutsch beschreiben Nomen und werden oft mit bestimmten Präpositionen kombiniert, um genaue Verhältnisse oder Eigenschaften im Satz zu verdeutlichen.",
        buttonText: "Lernen",
        buttonLink: ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE,
        icon: FaTrophy,
        color: "orange",
        gradient: "linear(to-r, orange.400, orange.600)"
    },
    {
        title: "Wortschatz",
        text: "Wortschatz in Deutsch umfasst einen breiten und spezialisierten Wortschatz für Alltag und Beruf.",
        buttonText: "Lernen",
        buttonLink: WORDS_ROUTE,
        icon: FaBookOpen,
        color: "teal",
        gradient: "linear(to-r, teal.400, teal.600)"
    },
    {
        title: "Konnektoren Test",
        text: "Machen Sie den Test zu Konnektoren in Deutsch und wählen Sie die richtige Verwendung aus mehreren Antwortmöglichkeiten aus.",
        buttonText: "Test starten",
        buttonLink: KONNEKTOREN_TEST_ROUTE,
        icon: FaRocket,
        color: "red",
        gradient: "linear(to-r, red.400, red.600)",
        isSpecial: true
    }
]

const GetStartedCard = ({ heading, description, icon, href, buttonText, color, gradient, isSpecial }) => {
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    return (
        <Box
            maxW={{ base: 'full', md: '350px' }}
            w={'full'}
            bg={cardBg}
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            position="relative"
        >
            {/* Цветная полоса сверху */}
            <Box
                h="4px"
                bgGradient={gradient}
                w="100%"
            />

            <VStack align="stretch" spacing={6} p={6} h="100%">
                {/* Иконка и заголовок */}
                <HStack spacing={4} align="start">
                    <Box
                        p={4}
                        bgGradient={gradient}
                        borderRadius="xl"
                        boxShadow="lg"
                        flexShrink={0}
                    >
                        <Icon as={icon} w={8} h={8} color="white" />
                    </Box>
                    <VStack align="start" spacing={2} flex={1}>
                        <Heading
                            size="lg"
                            color={headingColor}
                            fontWeight="700"
                        >
                            {heading}
                        </Heading>
                        {isSpecial && (
                            <Badge
                                colorScheme={color}
                                variant="subtle"
                                borderRadius="full"
                                px={3}
                                py={1}
                            >
                                <Icon as={FaPlay} mr={1} />
                                Empfohlen
                            </Badge>
                        )}
                    </VStack>
                </HStack>

                {/* Описание */}
                <Text
                    fontSize="md"
                    color={textColor}
                    lineHeight="1.6"
                    flex={1}
                >
                    {description}
                </Text>

                {/* Кнопка */}
                <Button
                    as="a"
                    href={href}
                    colorScheme={color}
                    bgGradient={gradient}
                    _hover={{
                        bgGradient: gradient,
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                    }}
                    rightIcon={<Icon as={FaArrowRight} />}
                    size="lg"
                    fontWeight="600"
                    borderRadius="xl"
                    transition="all 0.3s"
                >
                    {buttonText}
                </Button>
            </VStack>
        </Box>
    )
}

const GetStarted = () => {
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')

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
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Get Started</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                    {/* Заголовок */}
                    <VStack spacing={4} textAlign="center">
                        <Heading
                            as='h1'
                            size='2xl'
                            color={headingColor}
                            fontWeight="700"
                            textShadow="0 2px 4px rgba(0,0,0,0.1)"
                        >
                            Wählen Sie Ihr Lerngebiet
                        </Heading>
                        <Text
                            fontSize="lg"
                            color={textColor}
                            maxW="600px"
                            lineHeight="1.6"
                        >
                            Entdecken Sie verschiedene Bereiche der deutschen Sprache und wählen Sie aus,
                            was Sie lernen möchten. Jeder Bereich bietet interaktive Übungen und Tests.
                        </Text>
                    </VStack>

                    {/* Карточки */}
                    <Box w="100%" mt={8}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2, lg: 3 }}
                            spacing={8}
                            justifyItems="center"
                        >
                            {GetStartedPageContent.map((item, index) => (
                                <GetStartedCard
                                    key={index}
                                    heading={item.title}
                                    icon={item.icon}
                                    description={item.text}
                                    href={item.buttonLink}
                                    buttonText={item.buttonText}
                                    color={item.color}
                                    gradient={item.gradient}
                                    isSpecial={item.isSpecial}
                                />
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* Дополнительная информация */}
                    <Box
                        w="100%"
                        maxW="800px"
                        mt={12}
                        p={8}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderRadius="2xl"
                        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                        border="1px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                    >
                        <VStack spacing={4} textAlign="center">
                            <Icon as={FaLightbulb} w={12} h={12} color="yellow.500" />
                            <Heading size="lg" color={headingColor}>
                                Tipp für den Einstieg
                            </Heading>
                            <Text color={textColor} lineHeight="1.6">
                                Beginnen Sie mit dem <strong>Konnektoren Test</strong>, um Ihr aktuelles Niveau zu testen.
                                Anschließend können Sie gezielt die Bereiche lernen, in denen Sie sich verbessern möchten.
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default GetStarted