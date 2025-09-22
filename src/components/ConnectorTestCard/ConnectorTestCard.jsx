import { useState, useContext, useEffect, useCallback, useMemo, memo } from "react";
import {
    Text,
    Heading,
    Button,
    Grid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Box,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Fade,
    ScaleFade
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

const buttonLabels = {
    "nebensatz": "Nebensatz",
    "hauptsatz-position-0": "Hauptsatz Position 0",
    "hauptsatz-position-1": "Hauptsatz Position 1",
    "infinitivgruppe": "Infinitivgruppe",
    "besonderer-position": "Besondere Position"
}

const buttonColorScheme = {
    "nebensatz": '#3b82f6', // Более светлый синий
    "hauptsatz-position-0": '#f59e0b', // Более светлый оранжевый
    "hauptsatz-position-1": '#10b981', // Более светлый зеленый
    "infinitivgruppe": '#8b5cf6', // Более светлый фиолетовый
    "besonderer-position": '#6b7280', // Более светлый серый
}

// Мемоизированный компонент кнопки ответа
const AnswerButton = memo(({
    option,
    index,
    isSelected,
    isCorrectAnswer,
    showCorrect,
    showIncorrect,
    isFocused,
    isAnswerLocked,
    onAnswer
}) => {
    return (
        <Button
            size="lg"
            fontSize="md"
            fontWeight="600"
            onClick={() => onAnswer(option)}
            disabled={isAnswerLocked}
            bg={buttonColorScheme[option]}
            color="white"
            _hover={{
                opacity: isAnswerLocked ? 1 : 0.9,
                transform: isAnswerLocked ? 'none' : 'translateY(-3px)',
                boxShadow: isAnswerLocked ? 'md' : 'xl'
            }}
            _active={{
                transform: 'translateY(-1px)',
                boxShadow: 'lg'
            }}
            _focus={{
                outline: '3px solid',
                outlineColor: 'purple.300',
                outlineOffset: '2px'
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            borderRadius="xl"
            minH="70px"
            opacity={
                showCorrect || showIncorrect ? 1 : 0.7
            }
            border={
                showCorrect
                    ? "3px solid"
                    : showIncorrect
                        ? "3px solid"
                        : isFocused
                            ? "2px solid"
                            : "2px solid transparent"
            }
            borderColor={
                showCorrect
                    ? "green.400"
                    : showIncorrect
                        ? "red.400"
                        : isFocused
                            ? "purple.300"
                            : "transparent"
            }
            boxShadow={
                showCorrect
                    ? "0 0 25px rgba(16, 185, 129, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)"
                    : showIncorrect
                        ? "0 0 25px rgba(239, 68, 68, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)"
                        : isFocused
                            ? "0 0 0 3px rgba(147, 51, 234, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1)"
                            : "0 4px 12px rgba(0, 0, 0, 0.1)"
            }
            aria-label={`Antwort ${index + 1}: ${buttonLabels[option]}`}
            aria-describedby={`answer-${index}-description`}
            role="button"
            tabIndex={isFocused ? 0 : -1}
        >
            <VStack spacing={1}>
                <Text fontSize="xs" opacity={0.8}>
                    {index + 1}
                </Text>
                <Text>
                    {buttonLabels[option]}
                </Text>
            </VStack>
        </Button>
    )
})

const ConnectorTestCard = ({ data = [], setEndQuestion }) => {
    const { setConnectorAnswers } = useContext(DataContext);
    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showCard, setShowCard] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [isCorrect, setIsCorrect] = useState(null)
    const [isAnswerLocked, setIsAnswerLocked] = useState(false)
    const [focusedButtonIndex, setFocusedButtonIndex] = useState(0)

    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const textColor = useColorModeValue('gray.800', 'white')
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.300')

    // Клавиатурная навигация
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isAnswerLocked) return

            switch (event.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault()
                    setFocusedButtonIndex(prev =>
                        prev < buttonsSet.length - 1 ? prev + 1 : 0
                    )
                    break
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault()
                    setFocusedButtonIndex(prev =>
                        prev > 0 ? prev - 1 : buttonsSet.length - 1
                    )
                    break
                case 'Enter':
                case ' ':
                    event.preventDefault()
                    handleAnswer(buttonsSet[focusedButtonIndex])
                    break
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                    event.preventDefault()
                    const index = parseInt(event.key) - 1
                    if (index < buttonsSet.length) {
                        handleAnswer(buttonsSet[index])
                    }
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [focusedButtonIndex, isAnswerLocked, currentQuestion])

    // Сброс фокуса при смене вопроса
    useEffect(() => {
        setFocusedButtonIndex(0)
    }, [currentQuestion])

    // Проверка корректности ответа (мемоизированная)
    const checkAnswer = useCallback((selectedAnswer, correctAnswer) => {
        return selectedAnswer === correctAnswer
    }, [])

    // Обработчик ответа (мемоизированный)
    const handleAnswer = useCallback((answer) => {
        if (isAnswerLocked) return

        setIsAnswerLocked(true)
        setSelectedAnswer(answer)

        const currentItem = data[currentQuestion]
        const correct = checkAnswer(answer, currentItem.type)
        setIsCorrect(correct)
        setShowFeedback(true)

        const newAnswer = {
            ...currentItem,
            "read": true,
            "answer": answer,
            "isCorrect": correct
        }

        const updatedAnswers = [...answers, newAnswer]
        setAnswers(updatedAnswers)
        setConnectorAnswers(updatedAnswers)
        sessionStorage.setItem('answers', JSON.stringify(updatedAnswers))

        // Переход к следующему вопросу через 2 секунды
        setTimeout(() => {
            if (currentQuestion < data.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
                setSelectedAnswer(null)
                setShowFeedback(false)
                setIsCorrect(null)
                setIsAnswerLocked(false)
            } else {
                setShowCard(false)
                setEndQuestion(true)
            }
        }, 2000)
    }, [isAnswerLocked, data, currentQuestion, checkAnswer, answers, setConnectorAnswers, setEndQuestion])

    // Мемоизированная статистика
    const stats = useMemo(() => {
        const correctCount = answers.filter(a => a.isCorrect).length
        const incorrectCount = answers.filter(a => !a.isCorrect).length
        const progress = Math.round(((currentQuestion + 1) / data.length) * 100)

        return { correctCount, incorrectCount, progress }
    }, [answers, currentQuestion, data.length])

    if (!showCard || !data.length) {
        return (
            <Box textAlign="center" py={8}>
                <Text fontSize="lg" color={secondaryTextColor}>
                    Test abgeschlossen!
                </Text>
            </Box>
        )
    }

    const currentItem = data[currentQuestion]
    if (!currentItem) return null

    return (
        <VStack spacing={6} w="100%" maxW="900px" mx="auto">
            {/* Прогресс бар */}
            <Box w="100%">
                <Progress
                    bgcolor="#6a1b9a"
                    completed={data.length}
                    currentValue={currentQuestion + 1}
                />
            </Box>

            {/* Основная карточка */}
            <ScaleFade in={true} key={currentQuestion}>
                <Card
                    w="100%"
                    bg={cardBg}
                    border="1px solid"
                    borderColor={borderColor}
                    boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    borderRadius="2xl"
                    overflow="hidden"
                    position="relative"
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)',
                        borderRadius: '2xl 2xl 0 0'
                    }}
                >
                    <CardHeader textAlign="center" pb={4}>
                        <VStack spacing={3}>
                            <Badge
                                colorScheme="purple"
                                fontSize="sm"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                Frage {currentQuestion + 1} von {data.length}
                            </Badge>
                            <Heading
                                as="h3"
                                size="lg"
                                color={textColor}
                                lineHeight="1.4"
                                maxW="600px"
                                id="question-title"
                            >
                                {currentItem.title}
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={secondaryTextColor}
                                textAlign="center"
                                maxW="500px"
                            >
                                Verwenden Sie die Pfeiltasten zur Navigation, Enter oder Leertaste zum Auswählen,
                                oder drücken Sie die Zahlen 1-5 für direkte Auswahl.
                            </Text>
                        </VStack>
                    </CardHeader>

                    <CardBody pt={0}>
                        <VStack spacing={6}>
                            {/* Кнопки ответов */}
                            <Grid
                                w="100%"
                                templateColumns={{
                                    base: '1fr',
                                    md: 'repeat(2, 1fr)',
                                    lg: 'repeat(3, 1fr)'
                                }}
                                gap={4}
                            >
                                {buttonsSet.map((option, index) => {
                                    const isSelected = selectedAnswer === option
                                    const isCorrectAnswer = option === currentItem.sentence_type
                                    const showCorrect = showFeedback && isCorrectAnswer
                                    const showIncorrect = showFeedback && isSelected && !isCorrectAnswer
                                    const isFocused = focusedButtonIndex === index

                                    return (
                                        <AnswerButton
                                            key={`${currentQuestion}-${index}`}
                                            option={option}
                                            index={index}
                                            isSelected={isSelected}
                                            isCorrectAnswer={isCorrectAnswer}
                                            showCorrect={showCorrect}
                                            showIncorrect={showIncorrect}
                                            isFocused={isFocused}
                                            isAnswerLocked={isAnswerLocked}
                                            onAnswer={handleAnswer}
                                        />
                                    )
                                })}
                            </Grid>

                            {/* Обратная связь */}
                            <Fade in={showFeedback}>
                                <Alert
                                    status={isCorrect ? "success" : "error"}
                                    borderRadius="lg"
                                    maxW="500px"
                                    role="alert"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    <AlertIcon />
                                    <Box>
                                        <AlertTitle>
                                            {isCorrect ? "Richtig!" : "Falsch!"}
                                        </AlertTitle>
                                        <AlertDescription>
                                            {isCorrect
                                                ? "Ausgezeichnet! Das ist die richtige Antwort."
                                                : `Die richtige Antwort ist: ${buttonLabels[currentItem.type] || currentItem.type || 'Unbekannt'}`
                                            }
                                        </AlertDescription>
                                    </Box>
                                </Alert>
                            </Fade>
                        </VStack>
                    </CardBody>

                    <CardFooter justify="center" pt={0}>
                        <HStack
                            spacing={4}
                            fontSize="sm"
                            color={secondaryTextColor}
                            role="status"
                            aria-live="polite"
                            aria-label="Test-Fortschritt"
                        >
                            <Text>
                                Fortschritt: {stats.progress}%
                            </Text>
                            <Text>•</Text>
                            <Text>
                                Richtig: {stats.correctCount}
                            </Text>
                            <Text>•</Text>
                            <Text>
                                Falsch: {stats.incorrectCount}
                            </Text>
                        </HStack>
                    </CardFooter>
                </Card>
            </ScaleFade>
        </VStack>
    )
}
export default ConnectorTestCard


