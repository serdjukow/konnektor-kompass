import { useRef, useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper/modules';

import Card from "../Card/Card.jsx";
import {
    Box,
    Text,
    Flex,
    IconButton,
    useColorModeValue,
    Progress,
    HStack,
    VStack
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ModalSlider = ({ activeSlide = 0, data = {}, children }) => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const goTo = (id) => swiperRef.current.slideTo(id)

    useEffect(() => {
        goTo(activeSlide)
        setCurrentSlide(activeSlide)
    }, [])
    useEffect(() => {
        goTo(activeSlide)
        setCurrentSlide(activeSlide)
    }, [activeSlide])

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const nextSlide = () => {
        if (swiperRef.current && !isEnd) {
            swiperRef.current.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current && !isBeginning) {
            swiperRef.current.slidePrev();
        }
    };

    const progressValue = ((currentSlide + 1) / data.length) * 100;
    const buttonColor = useColorModeValue('gray.600', 'gray.300');
    const buttonHoverColor = useColorModeValue('gray.800', 'gray.100');


    return (
        <VStack spacing={4} w="100%" maxW="100%" style={{ width: '100%', maxWidth: '100%' }}>
            <style>
                {`
                    .modal-swiper .swiper-pagination,
                    .modal-swiper .swiper-pagination-bullet,
                    .modal-swiper .swiper-pagination-bullet-active,
                    .modal-swiper .swiper-pagination-fraction,
                    .modal-swiper .swiper-pagination-progressbar,
                    .modal-swiper .swiper-pagination-custom,
                    .swiper-pagination,
                    .swiper-pagination-bullet,
                    .swiper-pagination-bullet-active,
                    .swiper-pagination-fraction,
                    .swiper-pagination-progressbar,
                    .swiper-pagination-custom {
                        display: none !important;
                        visibility: hidden !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                        position: absolute !important;
                        left: -9999px !important;
                        width: 0 !important;
                        height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    
                    /* Ограничиваем ширину контейнера точек */
                    .modal-swiper .chakra-stack {
                        max-width: 100% !important;
                        overflow: hidden !important;
                    }
                    
                    /* Базовые стили для modal-swiper */
                    .modal-swiper {
                        width: 100%;
                    }
                    
                    .modal-swiper .swiper-slide {
                        width: 100%;
                    }
                    
                `}
            </style>
            {/* Прогресс бар и информация */}
            <Box w="100%">
                <Flex justify="space-between" align="center" mb={2}>
                    <Text fontSize="sm" color="gray.600" fontWeight="500">
                        {currentSlide + 1} von {data.length}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        {data[currentSlide]?.type || ''}
                    </Text>
                </Flex>
                <Progress
                    value={progressValue}
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    bg={useColorModeValue('gray.200', 'gray.600')}
                />
            </Box>

            {/* Swiper с кнопками навигации */}
            <Box w="100%" position="relative">
                <Swiper
                    loop={false}
                    effect={'slide'}
                    speed={400}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[Keyboard]}
                    className="modal-swiper"
                    autoHeight={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {data.map(item => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <Card item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кнопки навигации вне слайдов */}
                <HStack
                    position="absolute"
                    top="50%"
                    left="0"
                    right="0"
                    justify="space-between"
                    transform="translateY(-50%)"
                    zIndex={10}
                    px={4}
                    pointerEvents="none"
                >
                    <IconButton
                        aria-label="Vorheriger Slide"
                        icon={<ChevronLeftIcon />}
                        size="md"
                        variant="solid"
                        colorScheme="blue"
                        opacity={isBeginning ? 0.3 : 0.8}
                        cursor={isBeginning ? 'not-allowed' : 'pointer'}
                        onClick={prevSlide}
                        pointerEvents="auto"
                        _hover={{
                            transform: 'scale(1.1)',
                            opacity: isBeginning ? 0.3 : 1
                        }}
                        transition="all 0.2s"
                        boxShadow="lg"
                    />
                    <IconButton
                        aria-label="Nächster Slide"
                        icon={<ChevronRightIcon />}
                        size="md"
                        variant="solid"
                        colorScheme="blue"
                        opacity={isEnd ? 0.3 : 0.8}
                        cursor={isEnd ? 'not-allowed' : 'pointer'}
                        onClick={nextSlide}
                        pointerEvents="auto"
                        _hover={{
                            transform: 'scale(1.1)',
                            opacity: isEnd ? 0.3 : 1
                        }}
                        transition="all 0.2s"
                        boxShadow="lg"
                    />
                </HStack>
            </Box>

            {/* Индикаторы точек - только если элементов не слишком много */}
            {data.length <= 20 && (
                <HStack spacing={2} justify="center" mt={2} flexWrap="wrap" maxW="100%">
                    {data.map((_, index) => (
                        <Box
                            key={index}
                            w={3}
                            h={3}
                            borderRadius="full"
                            bg={index === currentSlide ? 'blue.500' : 'gray.300'}
                            cursor="pointer"
                            transition="all 0.2s"
                            _hover={{
                                bg: index === currentSlide ? 'blue.600' : 'gray.400',
                                transform: 'scale(1.2)'
                            }}
                            onClick={() => goTo(index)}
                        />
                    ))}
                </HStack>
            )}
        </VStack>
    )
}

export default ModalSlider