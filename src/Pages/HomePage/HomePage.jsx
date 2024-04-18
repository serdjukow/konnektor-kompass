import { Link } from 'react-router-dom'
import konnektoren_uebersicht from '../../assets/images/konnektoren.png'
import konnektoren_test from '../../assets/images/konnektor-test.png'
import test_result from '../../assets/images/test_result.png'
import anzahl from '../../assets/images/anzahl.png'
import IMAGE from '../../assets/images/start-page-4.svg'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Image,
} from '@chakra-ui/react'


const HomePage = () => {
    return (
        <>
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}>
                    <Text maxW={'3xl'} fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}>
                        Herzlich willkommen auf unserer Website!
                    </Text>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Projekt{' '}
                        <Text as={'span'} color={'orange.400'}>
                            Konnektor Kompass
                        </Text>
                    </Heading>

                    <Text maxW={'3xl'}>
                        Projekt "Konnektor Kompass" bietet eine interaktive Möglichkeit,
                        die deutschen Wörter, Konnektoren, Verben, Adjektive und Substantive zu lernen und zu trainieren.
                    </Text>                   
                    <Text maxW={'3xl'}>
                        Viel Spaß beim Lernen!
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            as="a"
                            href={'/konnektoren'}
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}>
                            Get started
                        </Button>
                        <Button
                            as="a"
                            href={'/faq'}
                            rounded={'full'}
                            px={6}

                        >
                            Learn more
                        </Button>
                    </Stack>
                    <Flex w={'full'} justifyContent="center">
                        {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
                        <Image
                            height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }}
                            objectFit={'cover'}
                            src={IMAGE}
                            alt="Home Page"
                        />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default HomePage