import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'
import LogoDark from '../../assets/images/logo-dark.png'
import { HOME_ROUTE } from '../../utils/consts'
import './header.scss'
import Sidebar from '../../components/Sidebar/Sidebar';

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'

const Header = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
                top="0"
                position="fixed"
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to={HOME_ROUTE} className="logo">
                        <img src={colorMode === "light" ? LogoDark : Logo} alt="Konnektor Kompas Logo" />
                    </Link>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button
                                onClick={toggleColorMode}
                                _focus={{ outline: "none" }}
                                fontSize={20}
                            >
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Sidebar />

                            {/* <Menu>    
                                <MenuButton
                                    as={Button}
                                    leftIcon={<HamburgerIcon />}
                                    colorScheme={useColorModeValue('gray.100', 'gray.900')}
                                    variant='outline'
                                    _hover={{ color: "gray.500" }}
                                >
                                    Menu
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu> */}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
export default Header