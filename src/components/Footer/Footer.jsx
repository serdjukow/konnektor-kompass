import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'
import LogoDark from '../../assets/images/logo-dark.png'
import { v4 as uuidv4 } from "uuid";
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
    FAQ_ROUTE,
    menuList
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
        <Box
            as="footer"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: 'repeat(6, auto)' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box maxW={'200px'}>
                            <Link to={HOME_ROUTE} className="logo">
                                <img src={colorMode === "light" ? LogoDark : Logo} alt="Konnektor Kompass" />
                            </Link>
                        </Box>
                        <Text fontSize={'sm'}>© 2024 Konnektor Kompass</Text>
                    </Stack>
                    {menuList.map(item => (
                        <Stack key={uuidv4()} align={'flex-start'}>
                            {/* <ListHeader>{item.itemName}</ListHeader> */}
                            <Box as="a" href={item.itemLink} _hover={{ color: 'orange.400' }}>
                                {item.itemName}
                            </Box>
                            {item.subItems && item.subItems.map((subItem) => (
                                <Box key={uuidv4()} as="a" href={subItem.itemLink} _hover={{ color: 'orange.400' }}>
                                    {subItem.itemName}
                                </Box>
                            ))}
                            
                        </Stack>
                    ))}               
                </SimpleGrid>
            </Container>
        </Box>
    )
}
export default Footer