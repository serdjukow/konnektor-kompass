import React from "react";
import { Link } from 'react-router-dom'
import {
    Container, Text, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Highlight, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
import {
    PREPOSITIONEN_UEBERSICHT_ROUTE,
    NOMEN_MIT_PREPOSITIONEN_ROUTE,
    VERBEN_MIT_PREPOSITIONEN_ROUTE,
    ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE
} from '../../../utils/consts'


const PrepositionenPage = () => {
    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Prepositionen</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    Verben, Adjektive und Substantive mit Präposition
                </Heading>
                <SimpleGrid
                    w='100%'
                    spacing={4}                    
                    templateColumns={{ base: 'repeat(auto-fit, minmax(300px, 1fr))', sm: 'repeat(auto-fit, minmax(400px, 1fr))' }}
                >
                    <Card>
                        <CardHeader pb={1}>
                            <Heading lineHeight='tall' as='h3' size='md' textAlign="center">
                                <Highlight
                                    query={['Präpositionen']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                                >
                                    Präpositionen Übersicht
                                </Highlight>
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='md'>Präpositionen in der deutschen Sprache sind Wörter, die Beziehungen zwischen anderen Wörtern
                                im Satz anzeigen. Sie geben Informationen über Ort, Richtung, Zeit und andere Verhältnisse. Beispiele für häufig
                                verwendete Präpositionen sind: "in" (in), "an" (an), "vor" (vor), "nach" (nach) usw.
                            </Text>
                        </CardBody>
                        <CardFooter w='100%' align='center' justifyContent='center'>
                            <Link to={PREPOSITIONEN_UEBERSICHT_ROUTE}>
                                <Button colorScheme='orange' size='md'>
                                    Mehr zum Thema
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader pb={1}>
                            <Heading lineHeight='tall' as='h3' size='md' textAlign="center">
                                <Highlight
                                    query={['Nomen']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                                >
                                    Nomen mit Präposition
                                </Highlight>
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='md'>
                                Nomen mit Präposition in der deutschen Sprache bezeichnen Substantive, die oft in Kombination mit bestimmten Präpositionen
                                verwendet werden, um bestimmte Bedeutungen oder Verhältnisse im Satz auszudrücken. Diese Kombinationen können den Fall des Nomens
                                beeinflussen und sind wichtig für die korrekte Bildung von Sätzen. Beispiele sind: "mit" (mit) + Dativ, "auf" (auf) + Akkusativ,
                                "zu" (zu) + Dativ usw.
                            </Text>
                        </CardBody>
                        <CardFooter w='100%' align='center' justifyContent='center'>
                            <Link to={NOMEN_MIT_PREPOSITIONEN_ROUTE}>
                                <Button colorScheme='orange' size='md'>
                                    Mehr zum Thema
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader pb={1}>
                            <Heading lineHeight='tall' as='h3' size='md' textAlign="center">
                                <Highlight
                                    query={['Verben']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                                >
                                    Verben mit Präposition
                                </Highlight>
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='md'>
                                Verben mit Präpositionen in der deutschen Sprache sind Verben, die eine feste Verbindung mit einer bestimmten Präposition
                                eingehen, um eine spezifische Bedeutung oder Aktion im Satz auszudrücken. Diese Verben erfordern oft einen bestimmten Kasus (Fall)
                                und sind entscheidend für die Satzstruktur und Bedeutung. Beispiele für Verben mit Präpositionen sind: "sich freuen auf"
                                (sich auf etwas freuen), "sprechen über" (über etwas sprechen), "denken an" (an etwas denken) usw.
                            </Text>
                        </CardBody>
                        <CardFooter w='100%' align='center' justifyContent='center'>
                            <Link to={VERBEN_MIT_PREPOSITIONEN_ROUTE}>
                                <Button colorScheme='orange' size='md'>
                                    Mehr zum Thema
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader pb={1}>
                            <Heading lineHeight='tall' as='h3' size='md' textAlign="center">
                                <Highlight
                                    query={['Adjektive']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                                >
                                    Adjektive mit Präposition
                                </Highlight>
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='md'>
                                Adjektive mit Präpositionen in der deutschen Sprache sind Adjektive, die häufig in
                                Verbindung mit bestimmten Präpositionen verwendet werden, um besondere Bedeutungen oder Verhältnisse im Satz auszudrücken.
                                Diese Kombinationen können den Kasus (Fall) des Adjektivs beeinflussen und sind wichtig für die genaue Beschreibung von
                                Nomen oder anderen Adjektiven. Beispiele für Adjektive mit Präpositionen sind: "stolz auf" (stolz auf jemanden/etwas),
                                "zufrieden mit" (zufrieden mit etwas), "ähnlich wie" (ähnlich wie etwas) usw.
                            </Text>
                        </CardBody>
                        <CardFooter w='100%' align='center' justifyContent='center'>
                            <Link to={ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE}>
                                <Button colorScheme='orange' size='md'>
                                    Mehr zum Thema
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Container >
        </>
    )
}

export default PrepositionenPage