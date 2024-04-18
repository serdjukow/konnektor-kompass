import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'
import LogoDark from '../../assets/images/logo-dark.png'
import {
    HOME_ROUTE,
    KONNEKTOREN_ROUTE,
    KONNEKTOREN_TEST_ROUTE,
    KONNEKTOREN_UEBERSICHT_ROUTE,
    PREPOSITIONEN_ROUTE,
    PREPOSITIONEN_UEBERSICHT_ROUTE,
    NOMEN_MIT_PREPOSITIONEN_ROUTE,
    VERBEN_MIT_PREPOSITIONEN_ROUTE,
    ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE,
    WORDS_ROUTE,
    FAQ_ROUTE
} from '../../utils/consts'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    useColorMode
} from "@chakra-ui/react";


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const Footer = () => {
    const { colorMode } = useColorMode()

    return (
        <>
            <Box
                as="footer"
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <Link to={HOME_ROUTE} className="logo">
                                    <img src={colorMode === "light" ? LogoDark : Logo} alt="Konnektor Kompass" />
                                </Link>
                            </Box>
                            <Text fontSize={'sm'}>© 2024 Konnektor Kompass</Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Konnektoren</ListHeader>
                            <Box as="a" href={KONNEKTOREN_ROUTE} _hover={{ color: 'orange.400' }}>
                                Konnektoren
                            </Box>
                            <Box as="a" href={KONNEKTOREN_UEBERSICHT_ROUTE} _hover={{ color: 'orange.400' }}>
                                Konnektoren Übersicht
                            </Box>
                            <Box as="a" href={KONNEKTOREN_TEST_ROUTE} _hover={{ color: 'orange.400' }}>
                                Konnektoren Test
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Präpositionen</ListHeader>
                            <Box as="a" href={PREPOSITIONEN_ROUTE} _hover={{ color: 'orange.400' }}>
                                Präpositionen
                            </Box>
                            <Box as="a" href={PREPOSITIONEN_UEBERSICHT_ROUTE} _hover={{ color: 'orange.400' }}>
                                Präpositionen Übersicht
                            </Box>
                            <Box as="a" href={NOMEN_MIT_PREPOSITIONEN_ROUTE} _hover={{ color: 'orange.400' }}>
                                Nomen mit Präposition
                            </Box>
                            <Box as="a" href={VERBEN_MIT_PREPOSITIONEN_ROUTE} _hover={{ color: 'orange.400' }}>
                                Verben mit Präposition
                            </Box>
                            <Box as="a" href={ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE} _hover={{ color: 'orange.400' }}>
                                Adjektive mit Präposition
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Wortschatz</ListHeader>
                            <Box as="a" href={WORDS_ROUTE} _hover={{ color: 'orange.400' }}>
                                Wortschatz
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Service Pages</ListHeader>
                            <Box as="a" href={FAQ_ROUTE} _hover={{ color: 'orange.400' }}>
                                FAQ
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}
export default Footer