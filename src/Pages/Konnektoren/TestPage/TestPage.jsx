import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ConnectorsContext from '../../../context/DataContext'
import {
    Container,
    Text,
    Heading,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack,
    Flex,
    Select,
    createMultiStyleConfigHelpers,
    Grid,
    Box

} from '@chakra-ui/react'
import { RESULT_ROUTE } from '../../../utils/consts'
import { selectAnatomy } from '@chakra-ui/anatomy'
import ResultPage from '../../Konnektoren/ResultPage/ResultPage.jsx'
import ConnectorTestCard from "./../../../components/ConnectorTestCard/ConnectorTestCard.jsx";
 
import Renovation from './../../../components/Rnovation.jsx'
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(selectAnatomy.keys)
const brandPrimary = definePartsStyle({
    field: {
        background: "purple.100",
        border: "1px dashed",
        borderColor: "purple.200",
        borderRadius: "full"
    },
    icon: {
        color: "purple.400"
    }
})

const selectTheme = defineMultiStyleConfig({
    variants: { brandPrimary },
})



const TestPage = () => {
    const { connectors, updateCurrentConnectors } = useContext(ConnectorsContext);
    const history = useNavigate()
    const [optionsValue, setOptionsValue] = useState(JSON.parse(sessionStorage.getItem("activeItem"))?.value || connectors.length)
    const [buttonsSet, setButtonsSet] = useState(Array.from(new Set(connectors.map(item => item.connector_type))) || [])

    const [options,] = useState([
        {
            label: "20 Fragen",
            value: "20",
        },
        {
            label: "30 Fragen",
            value: "30",
        },
        {
            label: "40 Fragen",
            value: "40",
        },
        {
            label: "50 Fragen",
            value: "50",
        },
        {
            label: "Alle Fragen",
            value: +connectors.length
        },
    ])

    const handleChangeSelect = (e) => {
        let value = e.target.value
        setOptionsValue(e.target.value)
        sessionStorage.setItem("activeItem", JSON.stringify({
            label: "Alle Fragen",
            value: value,
        }));
        updateCurrentConnectors(value)
    }

    const questions = [
        {
            question: 'Вопрос 1: Что такое React?',
            options: ['Фреймворк', 'Библиотека', 'Язык программирования'],
            correctAnswer: 'Библиотека'
        },
        {
            question: 'Вопрос 2: Как создать новый React проект?',
            options: ['create-react-app', 'npm init react-app', 'react-create-app'],
            correctAnswer: 'create-react-app'
        },
        // добавьте больше вопросов по аналогии
    ];




    const Questionnaire = () => {
        const [answers, setAnswers] = useState({})
        const [currentQuestion, setCurrentQuestion] = useState(0)
        console.log(answers)
        const handleAnswer = (answer) => {
            const updatedAnswers = {
                ...answers,
                [currentQuestion]: answer
            }

            setAnswers(updatedAnswers);

            if (currentQuestion < connectors.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                const storedAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {}
                const allAnswers = { ...storedAnswers, ...updatedAnswers };
                localStorage.setItem('userAnswers', JSON.stringify(allAnswers))
                history(RESULT_ROUTE)
            }
        }

        const buttonColorScheme = {
            "subjunktionen": '#0c72d2',
            "konjunktionen": '#dea90d',
            "konjunktionaladverbien": '#0abe3a',
            "infinitivgruppe": '#bb0abe',
            "besonderer-position": '#848484',

        }

        return (
            <Box w={'100%'}>
                <Heading lineHeight='tall' as='h3' size='lg' textAlign="center" mb={'3'}>
                    {connectors[currentQuestion].sentence_type}
                </Heading>
                <Grid
                    w={'100%'}
                    templateColumns='repeat(auto-fit, minmax(200px, 1fr))'
                    gap={3}
                >
                    {buttonsSet.map((option, index) => (
                        <Button
                            fontSize={"lg"}
                            fontWeight={'600'}
                            as={'button'}
                            key={index}
                            onClick={() => handleAnswer(option)}
                            bgColor={buttonColorScheme[option]}
                            _hover={{ bgColor: "blackAlpha" }}
                        >

                            {option}
                        </Button>
                    ))}
                </Grid>
            </Box>
        )
    }

    return <Renovation/>

    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Start Test</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Stack spacing={4} as={Container} maxW={'3xl'} mb={6} textAlign={'center'}>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        Start Test
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }}>
                        Um den Test an Ihre Bedürfnisse anzupassen, können Sie die Anzahl der Fragen auswählen, die im Test angezeigt werden sollen.
                    </Text>
                </Stack>
                <Flex w={'100%'} gap="2" justifyContent='space-around' alignItems='center' mt={4} mb={4}>
                    <Select
                        onChange={(e) => handleChangeSelect(e)}
                        variant={selectTheme}
                        w={'200px'}
                        value={optionsValue}
                        mb={6}
                    >
                        {
                            options.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))
                        }
                    </Select>
                    <Button
                        onClick={() => history(RESULT_ROUTE)}
                        colorScheme='gray'
                        variant='outline'
                    >Start Test</Button>
                </Flex>
                <Questionnaire />
            </Container >
        </>
    )
}

export default TestPage