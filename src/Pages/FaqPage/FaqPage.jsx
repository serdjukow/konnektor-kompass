import React from "react";
import {
    Container, Text, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Highlight, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Link,
    AccordionIcon
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const FaqPage = () => {


    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>FAQ</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    FAQ
                </Heading>
                <Accordion width="100%" maxW="4xl" >
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">Haben Sie Fragen?</Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text>
                                Haben Sie Fragen, Anregungen oder Probleme? Zögern Sie nicht, uns zu kontaktieren!
                                Sie können uns eine E-Mail senden an: {" "}
                                <Link color="teal.500" href="mailto:support@serdjukow.eu">
                                    support@serdjukow.eu
                                </Link>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">Hauptziel des Projekts</Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text>
                                Hauptziel des Projekts ist es, ein nützliches und zugängliches Lernwerkzeug für alle zu schaffen, die ihre Deutschkenntnisse vertiefen möchten.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <Text fontSize="md">Persönlichen Daten</Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text>
                                Unser Projekt ist nicht kommerziell und sammelt keine persönlichen Daten der Benutzer.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container >
        </>
    )
}

export default FaqPage