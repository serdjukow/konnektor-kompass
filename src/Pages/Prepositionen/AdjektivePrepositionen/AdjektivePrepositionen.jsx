import { useState } from 'react'
import AdjektivePrepositionenList from '../../../components/AdjektivePrepositionenList/AdjektivePrepositionenList'
import { useAdjektivePrepositionenQuery } from "../../../hooks/usePräpositionenQuery"
import {
    Spinner, Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    IconButton,
    Icon,
    VStack,
    Box
} from "@chakra-ui/react"
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import {
    PREPOSITIONEN_ROUTE
} from '../../../utils/consts'

const AdjektivePrepositionen = () => {
    const { data, isLoading, isSuccess } = useAdjektivePrepositionenQuery()
    const [viewport, setViewport] = useState('grid')

    if (isLoading)
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        )

    return (
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
                                <BreadcrumbLink href={PREPOSITIONEN_ROUTE}>Prepositionen</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Adjektive mit Präpositionen</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <Heading as='h2' size='xl' mt={4} mb={4}>
                        Adjektive mit Präpositionen
                    </Heading>
                    <Flex w="100%" gap="2" justifyContent='flex-end' alignItems='center' mt={2} mb={4}>
                        <IconButton
                            variant='outline'
                            colorScheme='gray'
                            aria-label='Show as grid'
                            onClick={() => setViewport('grid')}
                        >
                            <Icon as={TfiLayoutGrid2} />
                        </IconButton>
                        <IconButton
                            variant='outline'
                            colorScheme='gray'
                            aria-label='Show as list'
                            onClick={() => setViewport('list')}
                        >
                            <Icon as={TfiViewListAlt} />
                        </IconButton>
                    </Flex>
                    {isSuccess ? <AdjektivePrepositionenList data={data} viewport={viewport} /> : <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />}
                </VStack>
            </Container >
        </>
    )
}

export default AdjektivePrepositionen