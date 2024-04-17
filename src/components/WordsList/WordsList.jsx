import { Fragment } from "react";
import {
    ListItem,
    UnorderedList,
    Container,
    Box,
    Heading,
    Text
} from '@chakra-ui/react'

const WordsList = ({ state = {}, view = 'ru' }) => {    

    if (!!Object.keys(state).length) {
        return (
            <Container maxW='2xl' bg='#fff' centerContent> 
                <Box padding='4' color='black' w='100%'>
                    {state.map(item => (
                        <Fragment key={item.untertitle}>
                            <Heading as='h4' size='md' mt={4} mb={1}>
                                {item.untertitle}
                            </Heading>
                            <UnorderedList w="100%">
                                {item.words.map((el, id) => (                                  
                                    <ListItem key={id}>
                                        <Text fontSize='xl'>
                                            {el.german} - {view === 'ru' ? el.russian : el.english}
                                        </Text>
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </Fragment>
                    ))}
                </Box>
            </Container>
        )
    }
}
export default WordsList

