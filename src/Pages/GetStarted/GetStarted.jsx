import React from "react";
import {
    Container, Text, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
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
        buttonText: "Mehr zum Thema",
        buttonLink: KONNEKTOREN_UEBERSICHT_ROUTE
    },
    {
        title: "Präpositionen",
        text: "Präpositionen in Deutsch zeigen Beziehungen zwischen Wörtern im Satz, z.B. Ort, Zeit oder Richtung.",
        buttonText: "Mehr zum Thema",
        buttonLink: PREPOSITIONEN_UEBERSICHT_ROUTE
    },
    {
        title: "Nomen mit Präpositionen",
        text: "Nomen mit Präpositionen in Deutsch sind Substantive, die oft mit bestimmten Präpositionen kombiniert werden, um Bedeutungen oder Verhältnisse im Satz zu verdeutlichen.",
        buttonText: "Mehr zum Thema",
        buttonLink: NOMEN_MIT_PREPOSITIONEN_ROUTE
    },
    {
        title: "Verben mit Präpositionen",
        text: "Verben mit Präpositionen in Deutsch bilden feste Verbindungen mit bestimmten Präpositionen, um spezifische Bedeutungen oder Aktionen im Satz auszudrücken.",
        buttonText: "Mehr zum Thema",
        buttonLink: VERBEN_MIT_PREPOSITIONEN_ROUTE
    },
    {
        title: "Adjektive mit Präpositionen",
        text: "Adjektive mit Präpositionen in Deutsch beschreiben Nomen und werden oft mit bestimmten Präpositionen kombiniert, um genaue Verhältnisse oder Eigenschaften im Satz zu verdeutlichen.",
        buttonText: "Mehr zum Thema",
        buttonLink: ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE
    },
    {
        title: "Wortschatz",
        text: "Wortschatz in Deutsch umfasst einen breiten und spezialisierten Wortschatz für Alltag und Beruf.",
        buttonText: "Mehr zum Thema",
        buttonLink: WORDS_ROUTE
    },
    {
        title: "Konnektoren Test",
        text: "Machen Sie den Test zu Konnektoren in Deutsch und wählen Sie die richtige Verwendung aus mehreren Antwortmöglichkeiten aus.",
        buttonText: "Mehr zum Thema",
        buttonLink: KONNEKTOREN_TEST_ROUTE
    }
]

const GetStarted = () => {
    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Get Started</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    Get Started
                </Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(310px, 1fr))'>
                    {GetStartedPageContent.map((item, index) => (
                        <Card key={index} >
                            <CardHeader>
                                <Heading size='md' textAlign="center">{item.title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{item.text}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    as="a"
                                    href={item.buttonLink}
                                    colorScheme={'orange'}
                                    m="0 auto"
                                >{item.buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container >
        </>
    )
}

export default GetStarted