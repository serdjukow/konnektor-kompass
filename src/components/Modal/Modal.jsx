import ConnectorCard from "../ConnectorCard/ConnectorCard.jsx";
import './modal.scss'


const Modal = (props) => {

    return (
        <div className={`modal ${props.isOpen && 'open'}`}>
            <div className="modal__wrapper">
                <div className="modal__body">
                    <div className="modal__header">
                        <span onClick={props.chengeIsOpen} className="modal__close">⛌</span>
                    </div>
                    <ConnectorCard connector={props.modalContent} />
                </div>
            </div>
        </div>
    )
}

export default Modal