import { useState } from 'react'
import WordsList from "../../../components/WordsList/WordsList"
import { useWordsQuery } from "../../../hooks/useWordsQuery.js"
import { useParams } from 'react-router-dom'
import {
    Container, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    Flex,
    Button, ButtonGroup, Stack, useColorModeValue, useColorMode, IconButton
} from '@chakra-ui/react'
import {
    WORDS_ROUTE
} from '../../../utils/consts'


const WordsUebersicht = () => {
    const { data, isLoading, isSuccess } = useWordsQuery()
    const [view, setView] = useState("ru")
    const { theme } = useParams()
    
    const { title, unterthemen } = isSuccess && data.find(item => item.title === theme)
    
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
                        <BreadcrumbLink href={WORDS_ROUTE}>Wörter</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>

            <Container maxW='1280px' centerContent mb={6}>
                <Heading as='h2' size='xl' mt={4} mb={4}>
                    {title}
                </Heading>
                <Flex w="100%" gap="2" justifyContent='flex-end' alignItems='center' mt={2} mb={4}>
                    <Stack>
                        <ButtonGroup>
                            <Button
                                variant={view === "ru" ? "solid" : "outline"}
                                onClick={() => setView("ru")}
                                colorScheme='gray'
                            >
                                RU
                            </Button>
                            <Button
                                variant={view === "en" ? "solid" : "outline"}
                                onClick={() => setView("en")}
                                colorScheme='gray'
                            >
                                EN
                            </Button>                           
                        </ButtonGroup>
                    </Stack>
                </Flex>
                {isSuccess ? <WordsList state={unterthemen} view={view}/> : <Spinner
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

export default WordsUebersicht

