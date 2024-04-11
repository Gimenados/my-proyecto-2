import React, { useEffect, useRef } from 'react'
import { bool, element } from 'prop-types'

function Modal({children, show, onClose}) {

    const modalRef = useRef()

    // Ejecutar una función cada vez que el valor de show cambie
    useEffect(() => {
        if (show) {
            // Poner el foco en el modal cuando se muestra
            modalRef.current.focus();
        }
    }, [show]);
    
    // Se ejecutará cuando se presione una tecla dentro del modal.
    const handleKeyDown = e => {
        // Si la tecla presionada es "Escape", cierra el modal
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        show ? (
            <div className='modal__overlay' onClick={onClose}>
                <div
                    ref={modalRef} 
                    className='modal__container' 
                    onClick={ e => e.stopPropagation()}
                    tabIndex="-1" // Agregar tabIndex para que el div sea enfocable y pueda recibir eventos de teclado
                    onKeyDown={handleKeyDown}>
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

//Por defecto, el modal no se mostrará (show: false)
Modal.defaultProps = {
    show: false
}

export default Modal