import React from "react";
import { Link } from 'react-router-dom'
import {
    Container, Text, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Highlight, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner
} from '@chakra-ui/react'
import {
    WORDS_ROUTE
} from '../../../utils/consts'
import { useWordsQuery } from "../../../hooks/useWordsQuery.js"
import { colortSheme } from '../../../utils/theme.js'


const WordsPage = () => {
    const { data, isLoading, isSuccess } = useWordsQuery()

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
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Wörter</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    Wortschatz
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
                                    Alltag und Beruf - C1
                                </Highlight>
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize='md' mb="2">
                                Wortschatz in Alltag und Beruf auf dem C1-Niveau in der deutschen Sprache umfasst einen umfangreichen und differenzierten Wortschatz, der sowohl
                                für den täglichen Gebrauch als auch für berufliche Kontexte relevant ist. Auf diesem Niveau werden spezialisierte und abstrakte Begriffe sowie
                                idiomatische Ausdrücke und Fachjargon erwartet.
                            </Text>
                            <Text fontSize='md' mb="2">
                                Im Alltag könnte das Vokabular Themen wie aktuelle Ereignisse, komplexe Diskussionen, Literatur und Kunst, sowie tiefgehende persönliche Meinungen
                                und Gefühle abdecken. Im beruflichen Kontext werden Begriffe aus verschiedenen Fachbereichen, Management, Kommunikation und Verhandlungen erwartet.
                            </Text>
                            <Text fontSize='md'>
                                Der Wortschatz auf C1-Niveau ermöglicht es den Lernenden, sich klar, detailliert und fließend auszudrücken, sowohl mündlich als auch schriftlich,
                                und komplexe Texte zu verstehen und zu interpretieren. Es ist ein wichtiger Schritt hin zu einer nahezu muttersprachlichen Kompetenz.
                            </Text>
                        </CardBody>
                        <CardFooter w='100%' flexWrap="wrap" align='center' justifyContent='center' gap="2">
                            {isSuccess ? data.map((item, id) => (
                                <Link key={id} to={`${WORDS_ROUTE}/${item.title}`}>
                                    <Button colorScheme={colortSheme[id]} variant='outline'>
                                        {item.title}
                                    </Button>
                                </Link>
                            )) : <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />}

                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Container >
        </>
    )
}

export default WordsPage