import React, { useState } from "react";
import ConnectorList from '../../../components/ConnectorList/ConnectorList'
import Loader from '../../../Layouts/Loader/Loader'
import { useConnectorenQuery } from "../../../hooks/useConnectorenQuery"
import {
    Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    IconButton,
    Icon
} from '@chakra-ui/react'
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import {
    KONNEKTOREN_ROUTE
} from '../../../utils/consts'

const KonnektorenUebersichtPage = () => {
    const { data, isLoading, isSuccess } = useConnectorenQuery()
    const [viewport, setViewport] = useState('grid')

    isLoading && < Loader />
    
    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={KONNEKTOREN_ROUTE}>Konnektoren</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Konnektoren Übersicht</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>

            <Container maxW='1280px' centerContent mb={6}>
                <Heading as='h2' size='xl' mt={4} mb={4}>
                    Wörter, die man als Satzverbindung verwenden kann
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
                {isSuccess ? <ConnectorList data={data} viewport={viewport} /> : <Loader />}
            </Container >
        </>
    )
}

export default KonnektorenUebersichtPage