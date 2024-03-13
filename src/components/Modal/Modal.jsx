import React, { useRef, useEffect } from 'react';
import ConnectorCard from "../ConnectorCard/ConnectorCard.jsx";
import './modal.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Modal = (props) => {
    const wrapperRef = useRef(null);
    const swiperRef = useRef(null);
    const paginationRef = useRef(null)

    const handleClick = (event) => {
        if (event.target === wrapperRef.current) {
            props.chengeIsOpen()
        }
    }

    const goTo = (id) => swiperRef.current.slideTo(id)

    useEffect(() => {
        goTo(props.modalContent[0])
    }, [])
    useEffect(() => {
        goTo(props.modalContent[0])
    }, [props.modalContent[0]])

    return (
        <div className={`modal ${props.isOpen && 'open'}`}>
            <div className="modal__wrapper" ref={wrapperRef} onClick={handleClick}>
                <div className="modal__body">
                    <div className="modal__header">
                        <div ref={paginationRef} className="swiper-custom-pagination"></div>
                        <span onClick={props.chengeIsOpen} className="modal__close">⛌</span>
                    </div>
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
                        {props.modalContent[1]?.map(item => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <ConnectorCard connector={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Modal