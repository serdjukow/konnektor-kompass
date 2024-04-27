import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './page-modal.scss'
import { CloseButton } from '@chakra-ui/react'


const PageModal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        modalRoot.className ='page-modal';
        document.body.appendChild(modalRoot);

        return () => {
            document.body.removeChild(modalRoot);
        };
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        createPortal(
            <div className={`page-modal__overlay`} onClick={onClose}>
                <div className="page-modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="page-modal__header">
                        <CloseButton size='lg' onClick={onClose} />
                    </div>
                    <div className="page-modal__body">
                        {children}
                    </div>         
                </div>
            </div >,
            document.getElementById('modal-root')
        )
    )
}

export default PageModal