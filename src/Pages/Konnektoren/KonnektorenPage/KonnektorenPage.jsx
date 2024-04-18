import React from "react";
import { Link } from 'react-router-dom'
import {
    Container, Text, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Highlight, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
import {
    KONNEKTOREN_TEST_ROUTE,
    KONNEKTOREN_UEBERSICHT_ROUTE
} from '../../../utils/consts'

const KonnektorenPageContent = [
    {
        title: "Konnektoren Übersicht",
        text: "Konnektoren in der deutschen Sprache sind Wörter oder Wortgruppen, die dazu dienen, Teile eines Satzes oder mehrere Sätze miteinander zu verbinden. Sie helfen, den Text flüssig und logisch zu gestalten und Beziehungen zwischen Informationen herzustellen. Konnektoren können sowohl Konjunktionen (Bindewörter) als auch Adverbien sein. Beispiele für Konnektoren sind: \"weil\" (weil), \"aber\" (aber), \"deshalb\" (deshalb), \"zum Beispiel\" (zum Beispiel), \"trotzdem\" (trotzdem) usw.",
        buttonText: "Mehr zum Thema",
        buttonLink: KONNEKTOREN_UEBERSICHT_ROUTE
    },
    {
        title: "Konnektoren Test",
        text: "Machen Sie den Test zu Konnektoren in Deutsch und wählen Sie die richtige Verwendung aus mehreren Antwortmöglichkeiten aus.",
        buttonText: "Mehr zum Thema",
        buttonLink: KONNEKTOREN_TEST_ROUTE
    },
]

const KonnektorenPage = () => {
    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Konnektoren</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    Konnektoren in der deutschen Sprache
                </Heading>
                <SimpleGrid w='100%' spacing={4} templateColumns='repeat(auto-fit, minmax(400px, 1fr))'>
                    {KonnektorenPageContent.map((item, index) => (
                        <Card>
                            <CardHeader pb={1}>
                                <Heading lineHeight='tall' as='h3' size='md' textAlign="center">
                                    <Highlight
                                        query={['Konnektoren']}
                                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                                    >
                                        {item.title}
                                    </Highlight>
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text fontSize='md'>
                                    {item.text}
                                </Text>
                            </CardBody>
                            <CardFooter w='100%' align='center' justifyContent='center'>
                                <Link to={item.buttonLink}>
                                    <Button colorScheme='orange' size='md'>
                                        {item.buttonText}
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container >
        </>
    )
}

export default KonnektorenPage