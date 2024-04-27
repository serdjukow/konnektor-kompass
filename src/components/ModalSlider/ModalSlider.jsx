import { useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import Card from "../Card/Card.jsx";

const ModalSlider = ({ activeSlide = 0, data = {}, children }) => {
    const swiperRef = useRef(null);
    const paginationRef = useRef(null)
    const goTo = (id) => swiperRef.current.slideTo(id)

    useEffect(() => {
        goTo(activeSlide)
    }, [])
    useEffect(() => {
        goTo(activeSlide)
    }, [activeSlide])

    return (
        <Swiper
            loop={false}
            effect={'fade'}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            pagination={{
                type: 'fraction',
                el: paginationRef.current,
            }}
            modules={[EffectFade, Pagination, Navigation]}
            className="swiper"
            autoHeight={true}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
        >
            {data.map(item => (
                <SwiperSlide key={item.id} className="swiper-slide">
                    <Card item={item} />
                </SwiperSlide>
            ))}
        </Swiper>)
}

export default ModalSlider