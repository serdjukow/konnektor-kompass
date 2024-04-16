import { Flex } from "@chakra-ui/react";

const Footer = (props) => {
    return (
        <Flex
            as="footer"
            justify="center"
            padding={3}
            bg="teal.500"
            color="#fff"
            {...props}
        >   <p>© 2024 Konnektor Kompas</p>        
        </Flex>
    )
}
export default Footer