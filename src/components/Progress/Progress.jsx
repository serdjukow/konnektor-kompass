import { Box, Progress as ChakraProgress, Text, HStack, useColorModeValue } from '@chakra-ui/react'

const Progress = (props) => {
    const { bgcolor, completed, currentValue } = props;

    const getPercent = () => (100 / completed) * currentValue

    // Цвета для темной/светлой темы
    const progressBg = useColorModeValue('gray.100', 'gray.700')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const labelBg = useColorModeValue('white', 'gray.800')
    const labelBorder = useColorModeValue('gray.200', 'gray.600')

    return (
        <Box w="100%" position="relative">
            {/* Основной прогресс-бар */}
            <ChakraProgress
                value={getPercent()}
                size="lg"
                colorScheme="purple"
                bg={progressBg}
                borderRadius="full"
                height="12px"
                sx={{
                    '& > div': {
                        background: `linear-gradient(90deg, ${bgcolor} 0%, ${bgcolor}dd 100%)`,
                        borderRadius: 'full',
                        boxShadow: `0 0 20px ${bgcolor}40`
                    }
                }}
            />

            {/* Лейбл с прогрессом */}
            <HStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg={labelBg}
                px={3}
                py={1}
                borderRadius="full"
                border="1px solid"
                borderColor={labelBorder}
                boxShadow="sm"
                spacing={2}
                zIndex={1}
            >
                <Text fontSize="sm" fontWeight="600" color={textColor}>
                    {currentValue}/{completed}
                </Text>
                <Text fontSize="xs" color={textColor} opacity={0.7}>
                    ({Math.round(getPercent())}%)
                </Text>
            </HStack>
        </Box>
    );
};

export default Progress;