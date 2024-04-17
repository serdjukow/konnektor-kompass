import { Fragment } from "react";
import {
    ListItem,
    UnorderedList,
    Flex,
    Box,
    Heading,
    Text
} from '@chakra-ui/react'

const WordsList = ({ state = {}, view = 'ru' }) => {    

    if (!!Object.keys(state).length) {
        return (
            <Flex w="100%"  bg='#fff' justifyContent="center"> 
                <Box padding='8' color='black' w="100%">
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
            </Flex>
        )
    }
}
export default WordsList

