import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import DataContext from "../../../context/DataContext";
import { useConnectorenForQuestions } from "../../../hooks/useConnectorenQuery"
import {
    Container,
    Text,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack,
    Flex,
    Select,
    createMultiStyleConfigHelpers,
} from '@chakra-ui/react'
import { RESULT_ROUTE } from '../../../utils/consts'
import { selectAnatomy } from '@chakra-ui/anatomy'
import ResultPage from '../../Konnektoren/ResultPage/ResultPage.jsx'
import ConnectorTestCard from "./../../../components/ConnectorTestCard/ConnectorTestCard.jsx";

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
    const { connectorAnswers, answerState, setAnswerState } = useContext(DataContext);
    const [numberOfQuestions, setNumberOfQuestions] = useState(JSON.parse(sessionStorage.getItem("activeItem")) || 'all')
    const { data, isLoading, isSuccess } = useConnectorenForQuestions([numberOfQuestions, answerState])
    const history = useNavigate()
    const [optionsValue, setOptionsValue] = useState(sessionStorage.getItem("activeItem") ? JSON.parse(sessionStorage.getItem("activeItem")) : 'all')
    const [endQuestion, setEndQuestion] = useState(false)

    const options = [
        {
            label: "10 Fragen",
            value: "10",
        },
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
            value: "all"
        }
    ]

    useEffect(() => {
        setAnswerState()
        setNumberOfQuestions(optionsValue)
    }, [optionsValue])

    const handleChangeSelect = (e) => {
        let value = e.target.value
        setOptionsValue(e.target.value)
        sessionStorage.setItem("activeItem", JSON.stringify(value))
    }

    if (isSuccess) {
        if (endQuestion) {
            return <ResultPage currentConnectors={connectorAnswers} />
        }
        else {
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
                        </Flex>
                        <ConnectorTestCard data={data} setEndQuestion={setEndQuestion} />
                    </Container >
                </>
            )
        }
    }
}

export default TestPage