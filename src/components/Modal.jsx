import React, { useEffect, useRef } from 'react'
import { bool, element } from 'prop-types'

function Modal({children, show, onClose}) {

    const modalRef = useRef()

    useEffect(() => {
        if (show) {
            modalRef.current.focus()
        }
    }, [show])
    
    const handleKeyPress = e => {
        if (e.key === "Escape") {
            onClose()
        }
    }

    return (
        show ? (
            <div className='modal__overlay' onClick={onClose}>
                <div
                    ref={modalRef} 
                    className='modal__container' 
                    onClick={ e => e.stopPropagation()}
                    // tabIndex="0"
                    // onBlur={onClose}
                    onKeyDown={handleKeyPress}>
                    {children}
                </div>
            </div>
        ) : undefined
    )
}

Modal.propTypes = {
    children: element.isRequired,
    show: bool
}

Modal.defaultProps = {
    show: false
}

export default Modal