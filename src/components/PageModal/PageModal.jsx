import './page-modal.scss'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useColorModeValue
} from '@chakra-ui/react'


const PageModal = ({ isOpen, onClose, children, title = "Details" }) => {
    const contentBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent
                bg={contentBg}
                borderRadius="20px"
                maxW={{ base: "600px", md: "900px" }}
                w={{ base: "95%", md: "90%" }}
                maxH="85vh"
                boxShadow="2xl"
                border="1px solid"
                borderColor={borderColor}
            >
                <ModalHeader
                    fontSize="md"
                    fontWeight="600"
                    color="gray.700"
                    borderBottom="1px solid"
                    borderColor={borderColor}
                    pb={2}
                >
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} w="100%" maxW="100%">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PageModal