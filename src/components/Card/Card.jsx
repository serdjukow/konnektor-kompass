import { projectColorScheme } from "../../utils/theme";
import {
    Box,
    Text,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
    Divider,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Collapse,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react';

function createMarkup(example) {
    return { __html: example }
}

const Card = ({ item }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const secondaryTextColor = useColorModeValue('gray.500', 'gray.400');
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isCommentOpen, onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure();

    // Цвета для комментариев (вынесены из условного блока)
    const commentBg = useColorModeValue('blue.50', 'blue.900');
    const commentBorder = useColorModeValue('blue.200', 'blue.700');
    const commentTitleColor = useColorModeValue('blue.700', 'blue.200');
    const commentTextColor = useColorModeValue('blue.600', 'blue.300');

    const getColorScheme = (type) => {
        const colorMap = {
            'mit Genitiv': 'blue',
            'mit Dativ': 'yellow',
            'mit Akkusativ': 'green',
            'mit Dativ oder Akkusativ': 'purple'
        };
        return colorMap[type] || 'gray';
    };

    return (
        <Box
            id={item.id}
            bg={cardBg}
            borderRadius="16px"
            p={3}
            border="2px solid"
            borderColor={borderColor}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'xl'
            }}
            w="100%"
            maxW="100%"
            mx="auto"
        >
            <VStack spacing={2} align="stretch">
                {/* Заголовок и тип */}
                <VStack spacing={2} align="center">
                    <Text
                        fontSize="xl"
                        fontWeight="700"
                        color={textColor}
                        textAlign="center"
                    >
                        {item.title}
                    </Text>
                    <Badge
                        colorScheme={getColorScheme(item.type)}
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="600"
                    >
                        {item.usage ? item.usage.replace(/-/g, ' ') : item.type.replace(/-/g, ' ')}
                    </Badge>
                </VStack>

                <Divider />

                {/* Пример */}
                <Box>
                    <Text
                        fontSize="sm"
                        color={secondaryTextColor}
                        fontWeight="500"
                        mb={2}
                        textAlign="center"
                    >
                        Verwendungsbeispiel:
                    </Text>
                    <Box
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        p={2}
                        borderRadius="12px"
                        borderLeft="4px solid"
                        borderLeftColor={`${getColorScheme(item.type)}.500`}
                    >
                        <Text
                            fontSize="md"
                            lineHeight="1.6"
                            color={textColor}
                            dangerouslySetInnerHTML={createMarkup(item.example)}
                        />
                    </Box>
                </Box>

                {/* Комментарии для слов со звездочками */}
                {item.comment && (
                    <Box>
                        <Button
                            size="sm"
                            variant="outline"
                            colorScheme={getColorScheme(item.type)}
                            onClick={onCommentOpen}
                            w="100%"
                            fontSize="xs"
                        >
                            📝 Kommentare anzeigen
                        </Button>

                        {/* Модальное окно для комментариев */}
                        <Modal isOpen={isCommentOpen} onClose={onCommentClose} size="xl">
                            <ModalOverlay />
                            <ModalContent maxW={{ base: "600px", md: "800px" }} w={{ base: "90%", md: "75%" }}>
                                <ModalHeader color={commentTitleColor} fontSize="lg" pb={3}>
                                    {item.comment.title}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6} pt={0}>
                                    <Alert
                                        status="info"
                                        variant="subtle"
                                        flexDirection="column"
                                        alignItems="flex-start"
                                        justifyContent="center"
                                        textAlign="left"
                                        height="auto"
                                        borderRadius="12px"
                                        bg={commentBg}
                                        border="1px solid"
                                        borderColor={commentBorder}
                                        p={6}
                                    >
                                        <AlertIcon boxSize="20px" />
                                        <AlertDescription color={commentTextColor} maxW="100%">
                                            {Array.isArray(item.comment.text) ? (
                                                <VStack spacing={4} align="stretch">
                                                    {item.comment.text.map((text, index) => (
                                                        <Text key={index} fontSize="md" lineHeight="1.7">
                                                            {text}
                                                        </Text>
                                                    ))}
                                                </VStack>
                                            ) : (
                                                <Text fontSize="md" lineHeight="1.7">
                                                    {item.comment.text}
                                                </Text>
                                            )}
                                        </AlertDescription>
                                    </Alert>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>
                )}
            </VStack>
        </Box>
    )
}
export default Card