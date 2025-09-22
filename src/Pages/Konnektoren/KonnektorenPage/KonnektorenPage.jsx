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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    VStack,
    useColorModeValue,
    Badge,
    Icon
} from '@chakra-ui/react'
import { FaLink, FaPlay, FaBookOpen } from 'react-icons/fa'
import {
    KONNEKTOREN_TEST_ROUTE,
    KONNEKTOREN_UEBERSICHT_ROUTE
} from '../../../utils/consts'

const KonnektorenPageContent = [
    {
        title: "Konnektoren Übersicht",
        text: "Konnektoren in der deutschen Sprache sind Wörter oder Wortgruppen, die dazu dienen, Teile eines Satzes oder mehrere Sätze miteinander zu verbinden. Sie helfen, den Text flüssig und logisch zu gestalten und Beziehungen zwischen Informationen herzustellen.",
        buttonText: "Übersicht anzeigen",
        buttonLink: KONNEKTOREN_UEBERSICHT_ROUTE,
        icon: FaBookOpen,
        color: "blue",
        gradient: "linear(to-r, blue.400, blue.600)"
    },
    {
        title: "Konnektoren Test",
        text: "Machen Sie den Test zu Konnektoren in Deutsch und wählen Sie die richtige Verwendung aus mehreren Antwortmöglichkeiten aus. Testen Sie Ihr Wissen und verbessern Sie Ihre Fähigkeiten.",
        buttonText: "Test starten",
        buttonLink: KONNEKTOREN_TEST_ROUTE,
        icon: FaPlay,
        color: "green",
        gradient: "linear(to-r, green.400, green.600)"
    },
]

const KonnektorenPage = () => {
    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

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
                                <BreadcrumbLink href="#">Konnektoren</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                    {/* Header */}
                    <Box textAlign="center">
                        <VStack spacing={4}>
                            <Badge
                                colorScheme="purple"
                                variant="subtle"
                                px={4}
                                py={2}
                                borderRadius="full"
                                fontSize="sm"
                                leftIcon={<Icon as={FaLink} />}
                            >
                                Satzverbindungen
                            </Badge>
                            <Heading
                                as="h1"
                                size="2xl"
                                color={headingColor}
                                bgGradient="linear(to-r, purple.600, blue.600, green.600)"
                                bgClip="text"
                                fontWeight="bold"
                            >
                                Konnektoren in der deutschen Sprache
                            </Heading>
                            <Text
                                fontSize="lg"
                                color={textColor}
                                maxW="600px"
                                textAlign="center"
                            >
                                Lernen Sie, wie Sie Sätze und Gedanken logisch miteinander verbinden
                            </Text>
                        </VStack>
                    </Box>

                    {/* Content Cards */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {KonnektorenPageContent.map((item, index) => (
                            <Card
                                key={index}
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="xl"
                                border="1px"
                                borderColor={borderColor}
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: "2xl"
                                }}
                                transition="all 0.3s"
                            >
                                <CardHeader pb={4}>
                                    <VStack spacing={4}>
                                        <Box
                                            p={4}
                                            borderRadius="full"
                                            bgGradient={item.gradient}
                                            color="white"
                                        >
                                            <Icon as={item.icon} boxSize={8} />
                                        </Box>
                                        <Heading
                                            as="h3"
                                            size="lg"
                                            color={headingColor}
                                            textAlign="center"
                                        >
                                            {item.title}
                                        </Heading>
                                    </VStack>
                                </CardHeader>
                                <CardBody>
                                    <Text fontSize="md" color={textColor} lineHeight="1.6">
                                        {item.text}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link to={item.buttonLink} style={{ width: '100%' }}>
                                        <Button
                                            colorScheme={item.color}
                                            size="lg"
                                            w="100%"
                                            bgGradient={item.gradient}
                                            _hover={{
                                                transform: "translateY(-2px)",
                                                boxShadow: "lg"
                                            }}
                                            transition="all 0.2s"
                                            leftIcon={<Icon as={item.icon} />}
                                        >
                                            {item.buttonText}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    )
}

export default KonnektorenPage