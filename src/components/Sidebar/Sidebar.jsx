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
    Icon
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { FaUser } from "react-icons/fa"
import Logo from '../../assets/images/logo-2.png'
import { menuList, HOME_ROUTE } from '../../utils/consts'
import { v4 as uuidv4 } from "uuid";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { TfiDirection } from "react-icons/tfi";

function HamurgerMenu() {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            pos='absolute'
            top="8px"
            right="20px"

        >
            <Button
                variant="unstyled"
                color='#fff'
                _focus={{ outline: "none" }}
                _hover={{ color: "#265958" }}
                fontSize={34}
                p={1}
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
                    maxW={{ base: "full", md: "300px" }}
                    h="100vh"
                    bg="teal.500"
                    flexDir="column"
                >
                    <DrawerHeader>
                        <VStack m="0 auto 10px auto" cursor="pointer">
                            <HStack justifyContent="space-between" alignItems="center" w="100%">
                                <Link to={HOME_ROUTE} className="logo">
                                    <img src={Logo} alt="Konnektor Kompas Logo" />
                                </Link>
                                <Button
                                    _focus={{ outline: "none" }}
                                    bg="transparent"
                                    _focusWithin={{
                                        bg: "none",
                                    }}
                                    _hover={{ color: "#265958" }}
                                    color="#fff"
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
                                                        _hover={{ color: "#265958" }}
                                                        cursor="pointer"
                                                        py={1}
                                                        color="#fff"
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
                                                                _hover={{ color: "#265958" }}
                                                                cursor="pointer"
                                                                py={1}
                                                                pl='20px'
                                                                color="#fff"
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
