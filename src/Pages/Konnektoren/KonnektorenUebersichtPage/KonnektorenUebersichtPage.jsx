import React, { useState } from "react";
import ConnectorList from '../../../components/ConnectorList/ConnectorList'
import { useConnectorenQuery } from "../../../hooks/useConnectorenQuery"
import {
    Container,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    IconButton,
    Icon,
    Box,
    VStack,
    HStack,
    useColorModeValue,
    Badge,
    Card,
    CardBody,
    Spinner,
    Text
} from '@chakra-ui/react'
import { FaLink, FaList, FaTh } from 'react-icons/fa'
import {
    KONNEKTOREN_ROUTE
} from '../../../utils/consts'

const KonnektorenUebersichtPage = () => {
    const { data, isLoading, isSuccess } = useConnectorenQuery()
    const [viewport, setViewport] = useState('grid')

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
                    <Text color={textColor}>Lade Konnektoren...</Text>
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
                            <BreadcrumbItem>
                                <BreadcrumbLink href={KONNEKTOREN_ROUTE}>Konnektoren</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="#">Konnektoren Übersicht</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                    {/* Header */}
                    <Box textAlign="center">
                        <VStack spacing={6}>
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
                                    Konnektoren Übersicht
                                </Heading>
                                <Text
                                    fontSize="lg"
                                    color={textColor}
                                    maxW="600px"
                                    textAlign="center"
                                >
                                    Entdecken Sie alle verfügbaren Konnektoren und lernen Sie, wie Sie sie in Ihren Texten verwenden können
                                </Text>
                            </VStack>

                            {/* View Controls in Header */}
                            <Card bg={cardBg} borderRadius="xl" boxShadow="lg" border="1px" borderColor={borderColor} maxW="600px" w="100%" mx="auto">
                                <CardBody p={4}>
                                    <HStack spacing={4} align="center" justify="space-between" flexWrap="wrap">
                                        <HStack spacing={3} flexWrap="wrap">
                                            <Text color={textColor} fontWeight="medium" fontSize="sm" whiteSpace="nowrap">
                                                Ansicht wählen:
                                            </Text>
                                            <Badge colorScheme="blue" variant="subtle" px={3} py={1} borderRadius="md" whiteSpace="nowrap">
                                                {data?.length || 0} Konnektoren
                                            </Badge>
                                        </HStack>
                                        <HStack spacing={2} flexShrink={0}>
                                            <IconButton
                                                variant={viewport === 'grid' ? 'solid' : 'outline'}
                                                colorScheme={viewport === 'grid' ? 'purple' : 'gray'}
                                                aria-label="Rasteransicht"
                                                onClick={() => setViewport('grid')}
                                                icon={<Icon as={FaTh} />}
                                                size="sm"
                                                _hover={{
                                                    transform: "translateY(-1px)",
                                                    boxShadow: "md"
                                                }}
                                                transition="all 0.2s"
                                            />
                                            <IconButton
                                                variant={viewport === 'list' ? 'solid' : 'outline'}
                                                colorScheme={viewport === 'list' ? 'purple' : 'gray'}
                                                aria-label="Listenansicht"
                                                onClick={() => setViewport('list')}
                                                icon={<Icon as={FaList} />}
                                                size="sm"
                                                _hover={{
                                                    transform: "translateY(-1px)",
                                                    boxShadow: "md"
                                                }}
                                                transition="all 0.2s"
                                            />
                                        </HStack>
                                    </HStack>
                                </CardBody>
                            </Card>
                        </VStack>
                    </Box>

                    {/* Content */}
                    {isSuccess ? (
                        <ConnectorList data={data} viewport={viewport} />
                    ) : (
                        <Box textAlign="center" py={20}>
                            <VStack spacing={4}>
                                <Spinner size="xl" color="purple.500" />
                                <Text color={textColor}>Lade Konnektoren...</Text>
                            </VStack>
                        </Box>
                    )}
                </VStack>
            </Container>
        </Box>
    )
}

export default KonnektorenUebersichtPage