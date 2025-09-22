import { useState } from 'react'
import PrepositionenList from '../../../components/PrepositionenList/PrepositionenList'
import { usePräpositionenQuery } from "../../../hooks/usePräpositionenQuery"
import {
    Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    Flex,
    IconButton,
    Icon,
    Box,
    VStack,
    HStack,
    useColorModeValue,
    Text,
    Badge,
    Card
} from '@chakra-ui/react'
// import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import { FaLanguage, FaBookOpen, FaList, FaTh } from 'react-icons/fa'
import {
    PREPOSITIONEN_ROUTE
} from '../../../utils/consts'


const PrepositionenUebersichtPage = () => {
    const { data, isLoading, isSuccess } = usePräpositionenQuery()
    const [viewport, setViewport] = useState('grid')

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
                    <Text color={textColor}>Lade Präpositionen...</Text>
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
                                <BreadcrumbLink href={PREPOSITIONEN_ROUTE}>Prepositionen</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Präpositionen Übersicht</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

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
                            <Icon as={FaLanguage} w={16} h={16} color="green.500" />
                        </Box>

                        <Heading as='h1' size='2xl' color={headingColor} fontWeight="700">
                            Präpositionen in der deutschen Sprache
                        </Heading>

                        <Text fontSize="lg" color={textColor} maxW="600px">
                            Entdecken Sie die wichtigsten Präpositionen und ihre Verwendung in verschiedenen Kontexten.
                        </Text>

                        {isSuccess && (
                            <Badge colorScheme="green" fontSize="sm" px={4} py={2} borderRadius="full">
                                {data.length} Präpositionen verfügbar
                            </Badge>
                        )}
                    </VStack>

                    {/* Переключатель вида */}
                    <Box w="100%" overflow="hidden">
                        <Card bg={cardBg} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor={borderColor} w="100%" overflow="hidden">
                            <Box p={6} w="100%" overflow="hidden">
                                <Flex justify="space-between" align="center" w="100%">
                                    <HStack spacing={3}>
                                        <Icon as={FaBookOpen} w={5} h={5} color="green.500" />
                                        <Text fontWeight="600" color={headingColor}>
                                            Ansicht wählen
                                        </Text>
                                        <Badge colorScheme="green" variant="subtle" px={3} py={1} borderRadius="md">
                                            {data?.length || 0} Präpositionen
                                        </Badge>
                                    </HStack>

                                    <HStack spacing={2}>
                                        <IconButton
                                            variant={viewport === 'grid' ? 'solid' : 'outline'}
                                            colorScheme={viewport === 'grid' ? 'green' : 'gray'}
                                            aria-label='Show as grid'
                                            onClick={() => setViewport('grid')}
                                            size="sm"
                                            icon={<Icon as={FaTh} />}
                                        />
                                        <IconButton
                                            variant={viewport === 'list' ? 'solid' : 'outline'}
                                            colorScheme={viewport === 'list' ? 'green' : 'gray'}
                                            aria-label='Show as list'
                                            onClick={() => setViewport('list')}
                                            size="sm"
                                            icon={<Icon as={FaList} />}
                                        />
                                    </HStack>
                                </Flex>
                            </Box>
                        </Card>
                    </Box>

                    {/* Список предлогов */}
                    <Box w="100%">
                        {isSuccess ? (
                            <PrepositionenList data={data} viewport={viewport} />
                        ) : (
                            <Box display="flex" justifyContent="center" py={8}>
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="green.500"
                                    size="xl"
                                />
                            </Box>
                        )}
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default PrepositionenUebersichtPage