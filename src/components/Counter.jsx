import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext } from 'react';


import { CartContext } from '../context/CartContext'
import Text from '../components/Text'
import Button from '../components/Button'

const INITIAL_STATE = 0; //Inicialice en 0

export default function Counter({id}) {
    const [count, setCount] = useState(INITIAL_STATE)
    const { addToy, removeToys } = useContext(CartContext);

    const decrement = () => {
        if(count > 0) setCount(count - 1)
        removeToys(id) // Reducir la cantidad del producto en el carrito
    }
    const increment = () => {
        setCount(count + 1)
        addToy({
            id,
            quantity: 1 // Agregar solo 1 al carrito al incrementar
        })
    }

    return (
        <div className="counter__container">
            <Button 
                icon={faMinus}
                className="counter__btn"
                action={decrement}
                disabled={count === 0}
            />
            <Text 
                renderAs="p"
                content={count}
                componentsProps={{ className: "counter__count-text" }}
            />
            <Button 
                icon={faPlus}
                className="counter__btn"
                action={increment}
            />
        </div>
    )
}