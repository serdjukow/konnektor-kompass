import {
    Flex,
    IconButton,
    Icon
} from '@chakra-ui/react'
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";


const ChangeViewport = () => {
    return (
        <Flex w="100%" gap="2" justifyContent='flex-end' alignItems='center' mt={2} mb={4}>
            <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Show as list'
            >
                <Icon as={TfiLayoutGrid2} />
            </IconButton >
            <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Show as list'
            >
                <Icon as={TfiViewListAlt} />
            </IconButton>
        </Flex>
    )
}

export default ChangeViewport