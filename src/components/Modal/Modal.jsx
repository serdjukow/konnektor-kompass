import React, { useRef } from 'react';
import ConnectorCard from "../ConnectorCard/ConnectorCard.jsx";
import './modal.scss'


const Modal = (props) => {
    const wrapperRef = useRef(null);
    const handleClick = (event) => {
        if (event.target === wrapperRef.current) {
            props.chengeIsOpen()
        }
    }

    return (
        <div className={`modal ${props.isOpen && 'open'}`}>
            <div className="modal__wrapper" ref={wrapperRef} onClick={handleClick}>
                <div className="modal__body">
                    <div className="modal__header">
                        <span onClick={props.chengeIsOpen} className="modal__close">⛌</span>
                    </div>
                    <ConnectorCard connector={props.modalContent} />
                </div>
            </div>
        </div >
    )
}

export default Modal