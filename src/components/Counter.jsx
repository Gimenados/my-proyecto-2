import React, { useContext, useEffect, useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext'

import Text from '../components/Text'
import Button from '../components/Button'


function Counter({ id, toyData, initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);
    const { addToy, removeToy, CartList } = useContext(CartContext);

    useEffect(() => {
        const toy = CartList.find(toy => toy.id === id);
        setCount(toy?.quantity || 0);
    }, [CartList, id]);


    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            removeToy(id)
        }
        //Mostrar mensaje cuando se retira un producto del carrito
        alert('El producto fue retirado del carrito')
    }

    const increment = () => {
        setCount(count + 1);
        addToy({
            id,
            toyData,
            quantity: count + 1
        });

        // Mostrar mensaje de alerta cuando se agrega un producto
        alert('El producto fue agregado al carrito');
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

export default Counter