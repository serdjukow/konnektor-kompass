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
    Icon
} from '@chakra-ui/react'
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import {
    PREPOSITIONEN_ROUTE
} from '../../../utils/consts'


const PrepositionenUebersichtPage = () => {
    const { data, isLoading, isSuccess } = usePräpositionenQuery()
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
            <Container maxW='1280px' mb={2} mt={6}>
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
            </Container>

            <Container maxW='1280px' centerContent mb={6}>
                <Heading as='h2' size='xl' mt={4} mb={6} textAlign="center" color="gray.700">
                    Präpositionen in der deutschen Sprache
                </Heading>
                <Flex w="100%" gap="2" justifyContent='flex-end' alignItems='center' mt={2} mb={6}>
                    <IconButton
                        variant={viewport === 'grid' ? 'solid' : 'outline'}
                        colorScheme={viewport === 'grid' ? 'blue' : 'gray'}
                        aria-label='Show as grid'
                        onClick={() => setViewport('grid')}
                        size="md"
                    >
                        <Icon as={TfiLayoutGrid2} />
                    </IconButton>
                    <IconButton
                        variant={viewport === 'list' ? 'solid' : 'outline'}
                        colorScheme={viewport === 'list' ? 'blue' : 'gray'}
                        aria-label='Show as list'
                        onClick={() => setViewport('list')}
                        size="md"
                    >
                        <Icon as={TfiViewListAlt} />
                    </IconButton>
                </Flex>
                {isSuccess ? <PrepositionenList data={data} viewport={viewport} /> : <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />}
            </Container >
        </>
    )
}

export default PrepositionenUebersichtPage