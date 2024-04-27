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
            <Flex w="100%" justifyContent="center"> 
                <Box padding='8' w="100%">
                    {state.map(item => (
                        <Fragment key={item.untertitle} >
                            <Heading as='h4' size='md' mt={6} mb={3} textAlign={'center'}>
                                {item.untertitle}
                            </Heading>
                            <UnorderedList w="100%" textAlign={'center'}>
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

