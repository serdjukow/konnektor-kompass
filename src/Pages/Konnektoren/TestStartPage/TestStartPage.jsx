import React, { useState, useContext, useEffect, useRef } from "react";
import DataContext from "../../../context/DataContext.jsx";
import ConnectorTestCard from "../../../components/ConnectorTestCard/ConnectorTestCard.jsx";
import Progress from '../../../components/Progress/Progress.jsx'
import 'react-circular-progressbar/dist/styles.css';
import ResultPage from '../../Konnektoren/ResultPage/ResultPage.jsx'
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
    Box,
    createMultiStyleConfigHelpers
} from '@chakra-ui/react'

const TestStartPage = () => {
    const { currentConnectors, setCurrentConnectors } = useContext(DataContext);
    const [unreadConnectors, setUnreadConnectors] = useState(currentConnectors);
    const [readConnector, setReadConnector] = useState([]);
    const [randomConnector, setRandomConnector] = useState({});
    const buttonRef = useRef(null);
    const [isRight, setIsRight] = useState(null)
    const [buttonLock, setButtonLock] = useState(false)

    useEffect(() => {
        setRandomConnector(unreadConnectors[0])
    }, [])

    const handleConnectorClick = (index, feld) => {
        const newConnectors = currentConnectors.map(item => {
            if (item.id === index) {
                const newItem = {
                    ...item,
                    "read": true,
                    "answer": feld
                }
                setReadConnector([...readConnector, newItem])
                return newItem
            }
            return item
        })
        setCurrentConnectors(newConnectors)
        unreadConnectors?.splice(0, 1)
    };

    const checkAnswer = (item) => {
        setButtonLock(true)
        if (item === randomConnector.sentence_type) {
            setIsRight('right')
        } else if (item !== randomConnector.sentence_type) {
            setIsRight('wrong')
        }
    }


    const testCardButtonClick = (e) => {
        if (e.target.classList.contains('connector-test-card__button')) {
            handleConnectorClick(e.currentTarget.id, e.target.id);
            checkAnswer(e.target.id)

            setTimeout(() => {
                setIsRight(null)
                setButtonLock(false)
                setRandomConnector(unreadConnectors[0])
            }, 500)
        }
    }


    return (
        <>
            {currentConnectors.length && randomConnector ? (
                <>
                    <Container maxW='1280px' mb={2} mt={6}>
                        <Breadcrumb fontWeight='medium' fontSize='md'>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/konnektoren-test'>Konnektoren Test</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Start Test</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Container>
                    <Container maxW='1280px' centerContent mb={6} mt={6} justifyContent="flex-start">
                        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={'10'}>
                            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                                Konnektoren Test
                            </Heading>
                        </Stack>
                        <Flex w={'100%'} className="connector-test" flexDirection={'column'}>
                            <Progress bgcolor="#6a1b9a" completed={currentConnectors.length} currentValue={readConnector.length} />
                            <Stack w={'100%'} className={`connector-test__body ${isRight}`} >
                                <ConnectorTestCard connector={randomConnector} testCardButtonClick={testCardButtonClick} buttonRef={buttonRef} buttonLock={buttonLock} />
                            </Stack>
                        </Flex>
                    </Container>
                </>

            ) : (
                'Not found' //<ResultPage currentConnectors={currentConnectors} />
            )}

        </>

    )
}

export default TestStartPage



