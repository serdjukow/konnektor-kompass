import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";
import ButtonStartTest from '../../../components/ButtonStartTest/ButtunStartTest.jsx'
import { KONNEKTOREN_TEST_ROUTE } from '../../../utils/consts'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Image,
    SimpleGrid,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid,
    Box
} from '@chakra-ui/react'





const ResultPage = ({ currentConnectors }) => {
    const { width, height } = useWindowSize()
    const [allQuestions, setAllQuestions] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongtAnswers, setWrongAnswers] = useState(0)

    // useEffect(() => {
    //     setAllQuestions(currentConnectors.length || 0)
    //     setCorrectAnswers(currentConnectors.filter(item => item.sentence_type === item.answer).length)
    //     setWrongAnswers(currentConnectors.filter(item => item.sentence_type !== item.answer).length)
    // }, [])

    const history = useNavigate()

    const onClick = () => {
        history(KONNEKTOREN_TEST_ROUTE)
    }

    // if (!currentConnectors.length) {
    //     history(KONNEKTOREN_TEST_ROUTE)
    // }

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
        }        
    ];

    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        const storedAnswers = localStorage.getItem('userAnswers');
        if (storedAnswers) {
            setUserAnswers(JSON.parse(storedAnswers));
        }
    }, []);

    const Results = ({ answers }) => {
        return (
            <>
                <Flex w={'100%'} id="result">
                    <Stack w={'100%'} >
                        <Flex className="result__panel" justifyContent={'center'} gap={'8'}>
                            <Flex flexDirection={'column'} alignItems={'center'} className="item-all">
                                <span className="panel-item__comment">Gesamt</span>
                                <span className="panel-item__value">{allQuestions}</span>
                            </Flex>
                            <Flex flexDirection={'column'} alignItems={'center'} className="item-right">
                                <span className="panel-item__comment">Richtig</span>
                                <span className="panel-item__value">{correctAnswers}</span>
                            </Flex>
                            <Flex flexDirection={'column'} alignItems={'center'} className="item-wrong">
                                <span className="panel-item__comment">Falsch</span>
                                <span className="panel-item__value">{wrongtAnswers}</span>
                            </Flex>
                        </Flex>
                        <Grid templateColumns='35px repeat(3, 1fr)' mb={'5'}>
                            <Box display={'contents'}>
                                <Text as="span" className="result-table__cell cell-header">Nr.</Text>
                                <Text as="span" className="result-table__cell cell-header">Konnektor</Text>
                                <Text as="span" className="result-table__cell cell-header">Antwort</Text>
                                <Text as="span" className="result-table__cell cell-header">Richtige Antwort</Text>
                            </Box>
                            {Object.keys(answers).map((questionIndex, id) => (
                                <Box display={'contents'} key={questionIndex}>
                                    <Text as="span" className="result-table__cell cell-header">{id + 1}</Text>
                                    <Text as="span" className="result-table__cell">{questions[questionIndex].question}</Text>
                                    <Text as="span" className={`result-table__cell cell-answer`}>{answers[questionIndex]}</Text>
                                    <Text as="span" className="result-table__cell cell-answer">{questions[questionIndex].correctAnswer}</Text>
                                </Box>
                            ))}
                        </Grid>
                        <Flex justifyContent={'center'}>
                            <Button colorScheme='orange' onClick={onClick}>Neuer Test</Button>
                        </Flex>
                    </Stack>
                    {/* <Confetti
                        width={width}
                        height={height}
                    /> */}
                </Flex>

            </>
        );
    };

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
                <Results answers={userAnswers} />
            </Container >
        </>
    )

    return (
        <section id="result" className="result">
            <h2 className="result__title">Deine Ergebnisse</h2>
            <div className="result__container">
                <div className="result__panel">
                    <div className="result__panel-item panel-item item-all">
                        <span className="panel-item__comment">Gesamt</span>
                        <span className="panel-item__value">{allQuestions}</span>
                    </div>
                    <div className="result__panel-item panel-item item-right">
                        <span className="panel-item__comment">Richtig</span>
                        <span className="panel-item__value">{correctAnswers}</span>
                    </div>
                    <div className="result__panel-item panel-item item-wrong">
                        <span className="panel-item__comment">Falsch</span>
                        <span className="panel-item__value">{wrongtAnswers}</span>
                    </div>
                </div>
                <div className="result__table result-table">
                    <div className="result-table__row">
                        <div className="result-table__cell cell-header">Nr.</div>
                        <div className="result-table__cell cell-header">Konnektor</div>
                        <div className="result-table__cell cell-header">Antwort</div>
                        <div className="result-table__cell cell-header">Richtige Antwort</div>
                    </div>
                    {/* {currentConnectors.map((item, id) => (
                        <div key={item.id} className="result-table__row">
                            <div className="result-table__cell cell-header">{id + 1}</div>
                            <div className="result-table__cell">{item.connector}</div>
                            <div className={`result-table__cell cell-answer ${item.answer !== item.sentence_type ? 'wrong' : 'right'}`}>{item.answer.replace(/-/g, ' ')}</div>
                            <div className="result-table__cell cell-answer">{`${item.sentence_type.replace(/-/g, ' ')} (${item.connector_type})`}</div>
                        </div>
                    ))} */}
                </div>
                <div className="result__buttons">
                    <ButtonStartTest onClick={onClick}>Neuer Test</ButtonStartTest>
                </div>
            </div>
            <Confetti
                width={width}
                height={height}
            />
        </section>
    )
}

export default ResultPage