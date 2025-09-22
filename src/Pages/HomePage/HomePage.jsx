import IMAGE from '../../assets/images/start-page-4.svg'

import {
    Container,
    Heading,
    Text,
    Button,
    Image,
    Box,
    VStack,
    HStack,
    useColorModeValue,
    Icon,
    Badge,
    Divider
} from '@chakra-ui/react'
import {
    FaGraduationCap,
    FaBookOpen,
    FaTrophy,
    FaRocket,
    FaStar
} from 'react-icons/fa'


const HomePage = () => {
    // Цвета для темной/светлой темы
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    const features = [
        { icon: FaGraduationCap, text: "Interaktive Tests", color: "blue" },
        { icon: FaBookOpen, text: "Umfangreicher Wortschatz", color: "green" },
        { icon: FaTrophy, text: "Fortschrittsverfolgung", color: "yellow" },
        { icon: FaRocket, text: "Schnelles Lernen", color: "purple" }
    ]

    return (
        <Box
            position="relative"
            overflow="hidden"
        >
            {/* Декоративные элементы */}
            <Box
                position="absolute"
                top="-50px"
                right="-50px"
                w="200px"
                h="200px"
                bg="purple.200"
                borderRadius="full"
                opacity={0.1}
                _dark={{ bg: "purple.600" }}
            />
            <Box
                position="absolute"
                bottom="-100px"
                left="-100px"
                w="300px"
                h="300px"
                bg="blue.200"
                borderRadius="full"
                opacity={0.1}
                _dark={{ bg: "blue.600" }}
            />

            <Container maxW={'6xl'} position="relative" zIndex={1}>
                <VStack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 12 }}
                    py={{ base: 16, md: 24 }}
                >
                    {/* Приветствие */}
                    <VStack spacing={4}>
                        <Badge
                            colorScheme="purple"
                            fontSize="sm"
                            px={4}
                            py={2}
                            borderRadius="full"
                            variant="subtle"
                        >
                            <Icon as={FaStar} mr={2} />
                            Herzlich willkommen!
                        </Badge>

                        <Heading
                            fontWeight={700}
                            fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
                            lineHeight={'110%'}
                            color={headingColor}
                            textShadow="0 4px 8px rgba(0,0,0,0.1)"
                        >
                            Konnektor{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, purple.400, blue.400, green.400)"
                                bgClip="text"
                            >
                                Kompass
                            </Text>
                        </Heading>

                        <Text
                            maxW={'4xl'}
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color={textColor}
                            lineHeight="1.6"
                        >
                            Entdecken Sie die Welt der deutschen Sprache mit unserem interaktiven Lernsystem.
                            Lernen Sie Konnektoren, Präpositionen, Verben und mehr auf spielerische Weise!
                        </Text>
                    </VStack>

                    {/* Кнопки действий */}
                    <HStack spacing={6} flexWrap="wrap" justify="center">
                        <Button
                            as="a"
                            href={'/get-started'}
                            size="lg"
                            colorScheme="purple"
                            bgGradient="linear(to-r, purple.500, blue.500)"
                            _hover={{
                                bgGradient: "linear(to-r, purple.600, blue.600)",
                                transform: "translateY(-2px)",
                                boxShadow: "xl"
                            }}
                            leftIcon={<Icon as={FaRocket} />}
                            px={8}
                            py={6}
                            fontSize="lg"
                            fontWeight="600"
                            borderRadius="xl"
                            transition="all 0.3s"
                        >
                            Jetzt starten
                        </Button>
                        <Button
                            as="a"
                            href={'/faq'}
                            size="lg"
                            variant="outline"
                            colorScheme="purple"
                            _hover={{
                                bg: "purple.50",
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            leftIcon={<Icon as={FaBookOpen} />}
                            px={8}
                            py={6}
                            fontSize="lg"
                            fontWeight="600"
                            borderRadius="xl"
                            transition="all 0.3s"
                        >
                            Mehr erfahren
                        </Button>
                    </HStack>

                    {/* Особенности */}
                    <Box w="100%" maxW="4xl">
                        <Divider my={8} />
                        <VStack spacing={6}>
                            <Text fontSize="lg" fontWeight="600" color={textColor}>
                                Warum Konnektor Kompass?
                            </Text>
                            <HStack spacing={8} flexWrap="wrap" justify="center">
                                {features.map((feature, index) => (
                                    <VStack key={index} spacing={2}>
                                        <Box
                                            p={4}
                                            bg={cardBg}
                                            borderRadius="xl"
                                            boxShadow="lg"
                                            border="1px solid"
                                            borderColor={borderColor}
                                        >
                                            <Icon
                                                as={feature.icon}
                                                w={8}
                                                h={8}
                                                color={`${feature.color}.500`}
                                            />
                                        </Box>
                                        <Text fontSize="sm" fontWeight="500" color={textColor}>
                                            {feature.text}
                                        </Text>
                                    </VStack>
                                ))}
                            </HStack>
                        </VStack>
                    </Box>

                    {/* Изображение */}
                    <Box
                        mt={8}
                        p={6}
                        bg={cardBg}
                        borderRadius="2xl"
                        boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                        border="1px solid"
                        borderColor={borderColor}
                    >
                        <Image
                            height={{ base: '200px', sm: '300px', lg: '400px' }}
                            objectFit={'contain'}
                            src={IMAGE}
                            alt="Konnektor Kompass Illustration"
                            borderRadius="xl"
                        />
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default HomePage