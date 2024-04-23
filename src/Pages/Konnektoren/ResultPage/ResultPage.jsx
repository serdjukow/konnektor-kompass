import { useEffect, useState, useContext } from "react";
import DataContext from "./../../../context/DataContext";
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";
import { KONNEKTOREN_TEST_ROUTE } from '../../../utils/consts'
import TestPage from './../../Konnektoren/TestPage/TestPage.jsx'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid,
    Box,
    CircularProgress,
    CircularProgressLabel
} from '@chakra-ui/react'


const ResultPage = ({ currentConnectors }) => {
    const { setAnswerState } = useContext(DataContext);
    const { width, height } = useWindowSize()
    const [allQuestions, setAllQuestions] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongtAnswers, setWrongAnswers] = useState(0)
    const [isNewTest, setIsNewTest] = useState(false)
    function calculatePercentage(number, percentage) {
        return (percentage * number) / 100 * 100;
    }

    useEffect(() => {
        setAllQuestions(currentConnectors.length || 0)
        setCorrectAnswers(currentConnectors.filter(item => item.type === item.answer).length)
        setWrongAnswers(currentConnectors.filter(item => item.type !== item.answer).length)
        sessionStorage.setItem("oldQuestions", JSON.stringify(currentConnectors))
    }, [])

    const Results = ({ answers }) => {
        return (
            <Grid templateColumns='40px repeat(3, auto)' mb={'5'}>
                <Box display={'contents'}>
                    <Text as="span" className="result-table__cell cell-header">Nr.</Text>
                    <Text as="span" className="result-table__cell cell-header">Konnektor</Text>
                    <Text as="span" className="result-table__cell cell-header">Antwort</Text>
                    <Text as="span" className="result-table__cell cell-header">Richtige Antwort</Text>
                </Box>
                {!!Object.keys(answers).length && answers.map((item, id) => (
                    <Box display={'contents'} key={id}>
                        <Text as="span" className="result-table__cell">{id + 1}</Text>
                        <Text as="span" className="result-table__cell">{item.title}</Text>
                        <Text
                            as="span"
                            textDecor={`${item.answer !== item.type ? 'line-through' : 'none'}`}
                            className={`result-table__cell cell-answer`}
                            color={`${item.answer !== item.type ? 'red' : 'green'}`}
                        >
                            {item.answer.replace(/-/g, ' ')}</Text>
                        <Text as="span" className="result-table__cell cell-answer">{`${item.type.replace(/-/g, ' ')} (${item.connector_type})`}</Text>
                    </Box>
                ))}
            </Grid>
        )
    }

    if (isNewTest) return <TestPage />

    return (
        <>
            <Container maxW='1280px' mb={2} mt={6}>
                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={KONNEKTOREN_TEST_ROUTE}>Start test</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Result</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                <Heading as='h2' size='xl' mt={4} mb={4} >
                    Deine Ergebnisse
                </Heading>
                <Stack w={'100%'} >
                    <Grid maxW={'400px'} m={'0 auto'} justifyContent={'center'} templateColumns='repeat(auto-fit, minmax(70px, 1fr))' gap={'8'} mb={'3'}>
                        <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} className="item-all">
                            <Box as='span' color={'#0c72d2'} mb={'3'}>Gesamt</Box>
                            <CircularProgress value={calculatePercentage(allQuestions, allQuestions)} color='#0c72d2' size='80px'>
                                <CircularProgressLabel>
                                    <Box as='span' color={'#0c72d2'} fontSize={'28'} lineHeight={'28'}>{allQuestions}</Box>
                                </CircularProgressLabel>
                            </CircularProgress>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'center'} className="item-right">
                            <Box as='span' color={'#2dd60c'} mb={'3'}>Richtig</Box>
                            <CircularProgress value={calculatePercentage(allQuestions, correctAnswers)} color='#2dd60c' size='80px'>
                                <CircularProgressLabel>
                                    <Box as='span' color={'#2dd60c'} fontSize={'28'} lineHeight={'28'}>{correctAnswers}</Box>
                                </CircularProgressLabel>
                            </CircularProgress>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'center'} className="item-wrong">
                            <Box as='span' color={'#d70909'} mb={'3'}>Falsch</Box>
                            <CircularProgress value={calculatePercentage(allQuestions, wrongtAnswers)} color='#d70909' size='80px'>
                                <CircularProgressLabel>
                                    <Box as='span' color={'#d70909'} fontSize={'28'} lineHeight={'28'}>{wrongtAnswers}</Box>
                                </CircularProgressLabel>
                            </CircularProgress>
                        </Flex>
                    </Grid>
                    <Results answers={currentConnectors} />
                    <Flex justifyContent={'center'} gap={'2'}>
                        <Button colorScheme='orange' onClick={() => {
                            setAnswerState()
                            setIsNewTest(true)
                        }}>Neuer Test</Button>
                        <Button colorScheme='orange' onClick={() => {
                            setAnswerState('old')
                            setIsNewTest(true)
                        }}>Tests wiederholen</Button>
                    </Flex>
                </Stack>
            </Container >
            <Confetti
                width={width}
                height={height}
            />
        </>
    )
}

export default ResultPage