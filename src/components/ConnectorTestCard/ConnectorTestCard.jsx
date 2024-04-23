import { useState, useContext } from "react";
import {
    Text,
    Heading,
    Button,
    Grid,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from '@chakra-ui/react'
import './connector-test-card.scss'
import Progress from '../../components/Progress/Progress.jsx'
import DataContext from "../../context/DataContext";

const buttonsSet = [
    "nebensatz",
    "hauptsatz-position-0",
    "hauptsatz-position-1",
    "infinitivgruppe",
    "besonderer-position"
]

const buttonColorScheme = {
    "nebensatz": '#0c72d2',
    "hauptsatz-position-0": '#dea90d',
    "hauptsatz-position-1": '#0abe3a',
    "infinitivgruppe": '#bb0abe',
    "besonderer-position": '#848484',
}

const ConnectorTestCard = ({ data = {}, setEndQuestion }) => {
    const { setConnectorAnswers } = useContext(DataContext);
    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showCard, setShowCard] = useState(true)
    
    const handleAnswer = (answer) => {
        data.map((item, index) => {
            if (currentQuestion === index) {
                const newItem = {
                    ...item,
                    "read": true,
                    "answer": answer
                }
                setAnswers([...answers, newItem])
                setConnectorAnswers([...answers, newItem])
                sessionStorage.setItem('answers', JSON.stringify([...answers, newItem]))
            }
        })


        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setShowCard(false)
            setEndQuestion(true)
        }
    }

    if (showCard) {
        return (
            <>
                <Progress bgcolor="#6a1b9a" completed={data?.length} currentValue={currentQuestion} />
                <Card w={'100%'} maxW={'800px'}>
                    <CardHeader>
                        <Heading lineHeight='tall' as='h3' size='lg' textAlign="center" mb={'3'}>
                            {data[currentQuestion]?.title}
                        </Heading>
                    </CardHeader>
                    <CardBody>
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
                                    _hover={{ opacity: "0.8" }}
                                    textTransform={'capitalize'}                                    
                                >
                                    {option.replace(/-/g, ' ')}
                                </Button>
                            ))}
                        </Grid>
                    </CardBody>
                    <CardFooter>
                        <Text fontSize={{ base: 'sm', sm: 'lg' }}>
                            Geantwortet: {currentQuestion} Insgesamt: {data.length}
                        </Text>
                    </CardFooter>
                </Card>
            </>
        )

    } else return 'End test'
}
export default ConnectorTestCard


