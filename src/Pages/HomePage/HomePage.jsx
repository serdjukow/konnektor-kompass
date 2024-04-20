import IMAGE from '../../assets/images/start-page-4.svg'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
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
                    py={{ base: 20, md: 28 }}
                    gap="8"
                    
                    >
                    <Text maxW={'3xl'} fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}>
                        Herzlich willkommen auf unserer Website!
                    </Text>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Konnektor{' '}
                        <Text as={'span'} color={'orange.400'}>
                            Kompass
                        </Text>
                    </Heading>

                    <Text maxW={'3xl'}>
                        Projekt "Konnektor Kompass" bietet eine interaktive Möglichkeit,
                        die deutschen Wörter, Konnektoren, Verben, Adjektive und Substantive zu lernen und zu trainieren. <br />
                        Viel Spaß beim Lernen!
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            as="a"
                            href={'/get-started'}
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
                        <Image
                            height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 5, sm: 8 }}
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