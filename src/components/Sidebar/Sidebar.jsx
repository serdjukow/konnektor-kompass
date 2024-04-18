import React, { useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import {
    Flex,
    Text,
    VStack,
    Divider,
    HStack,
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    Icon,
    useColorModeValue,
    useColorMode
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import Logo from '../../assets/images/logo-2.png'
import LogoDark from '../../assets/images/logo-dark.png'
import { menuList, HOME_ROUTE } from '../../utils/consts'
import { v4 as uuidv4 } from "uuid";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { TfiDirection } from "react-icons/tfi";

function HamurgerMenu() {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()

    return (
        <Flex
            pos='relative'
        >
            <Button
                //variant='outline'
                color={useColorModeValue('gray.900', 'gray.100')}
                _focus={{ outline: "none" }}
                fontSize={20}
                onClick={onOpen}
            >
                <Icon as={GiHamburgerMenu} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    minW="200px"
                    maxW={{ base: "full", sm: "300px" }}
                    h="100vh"
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    flexDir="column"
                >
                    <DrawerHeader>
                        <VStack m="0 auto 10px auto" cursor="pointer">
                            <HStack justifyContent="space-between" alignItems="center" w="100%">
                                <Link to={HOME_ROUTE} className="logo">
                                    <img src={colorMode === "light" ? LogoDark : Logo } alt="Konnektor Kompas Logo" />
                                </Link>
                                <Button
                                    _focus={{ outline: "none" }}
                                    bg="transparent"
                                    _focusWithin={{
                                        bg: "none",
                                    }}
                                    _hover={{ color: "#265958" }}
                                    fontSize={34}
                                    onClick={onClose}
                                >
                                    <Icon as={CgClose} />
                                </Button>
                            </HStack>
                            <Divider orientation="horizontal" />
                        </VStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack
                            mt={2}
                            spacing={12}
                            alignItems="flex-start"
                            w="100%"
                            justifyContent="flex-start"

                        >
                            <nav key={uuidv4()} >
                                <ul>
                                    {menuList.map((item) => {
                                        return (
                                            <li key={uuidv4()} >
                                                <NavLink to={item.itemLink}
                                                    className='header-nav-link'
                                                >
                                                    <HStack
                                                        spacing={3}
                                                        w="100%"
                                                        justifyContent="flex-start"
                                                        _hover={{
                                                            color: 'cyan.400',
                                                        }}
                                                        cursor="pointer"
                                                        py={1}
                                                        onClick={onClose}
                                                    >
                                                        <TfiDirection />
                                                        <Text fontSize={18} >
                                                            {item.itemName}
                                                        </Text>
                                                    </HStack>
                                                </NavLink>
                                                <ul>
                                                    {item.subItems && item.subItems.map((subItem) => (
                                                        <NavLink
                                                            key={uuidv4()}
                                                            to={subItem.itemLink}
                                                            className='header-nav-link'
                                                        >
                                                            <HStack
                                                                fontSize={14}
                                                                spacing={3}
                                                                w="100%"
                                                                justifyContent="flex-start"
                                                                _hover={{
                                                                    color: 'cyan.400',
                                                                }}
                                                                cursor="pointer"
                                                                py={1}
                                                                pl='20px'
                                                                onClick={onClose}
                                                            >
                                                                <ChevronLeftIcon w={3} h={3} color="teal.800" />
                                                                <Text fontSize={16} >
                                                                    {subItem.itemName}
                                                                </Text>
                                                            </HStack>

                                                        </NavLink>
                                                    ))}
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default HamurgerMenu
