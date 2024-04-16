import { useState } from 'react'
import VerbenPrepositionenList from '../../../components/VerbenPrepositionenList/VerbenPrepositionenList'
import { useVerbenPrepositionenQuery } from "../../../hooks/usePräpositionenQuery"
import {
    Spinner, Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    IconButton,
    Icon
} from "@chakra-ui/react"
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import {
    PREPOSITIONEN_ROUTE
} from '../../../utils/consts'

const VerbenPrepositionen = () => {
    const { data, isLoading, isSuccess } = useVerbenPrepositionenQuery()
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
                        <BreadcrumbLink href='#'>Verben mit Präpositionen</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6}>
                <Heading as='h2' size='xl' mt={4} mb={4}>
                    Verben mit Präpositionen
                </Heading>
                <Flex w="100%" gap="2" justifyContent='flex-end' alignItems='center' mt={2} mb={4}>
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Show as grid'
                        onClick={() => setViewport('grid')}
                    >
                        <Icon as={TfiLayoutGrid2} />
                    </IconButton>
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Show as list'
                        onClick={() => setViewport('list')}
                    >
                        <Icon as={TfiViewListAlt} />
                    </IconButton>
                </Flex>
                {isSuccess ? <VerbenPrepositionenList data={data} viewport={viewport} /> : <Spinner
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

export default VerbenPrepositionen