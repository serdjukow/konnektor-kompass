
import { useNavigate } from 'react-router-dom'
import IMAGE from '../assets/images/renovation.jpeg'

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


const Rnovation = () => {
    const history = useNavigate()
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
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        In Entwicklung – Bald zurück!
                    </Heading>
                    <Text maxW={'3xl'}>
                        Ooops! Diese Page ist gerade im Entwicklungsmodus und macht eine kurze Pause. Sie bereitet sich darauf vor, Ihnen bald mit vollem Glanz zu erscheinen. Bleiben Sie dran – wir sind bald zurück!
                    </Text>
                    <Flex w={'full'} justifyContent="center">
                        <Image
                            height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 5, sm: 8 }}
                            objectFit={'cover'}
                            src={IMAGE}
                            alt="Home Page"
                        />
                    </Flex>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            onClick={() => history(-1)}
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}>
                            Go back
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default Rnovation