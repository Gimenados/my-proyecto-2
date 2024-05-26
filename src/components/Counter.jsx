import React, { useContext, useEffect, useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext'

import Text from '../components/Text'
import Button from '../components/Button'

                // Representa el valor inicial del contador.
function Counter({ _id, toyData, initialValue = 0 }) {
    // Para almacenar la cantidad actual del producto en el contador.
    const [count, setCount] = useState(initialValue);
    // Para agregar o eliminar productos del carrito
    const { addToy, removeToy, CartList } = useContext(CartContext);

    //Para actualizar el estado del contador
    useEffect(() => {
        //Se busca un juguete que coincida con el id 
        const toy = CartList.find(toy => toy._id === _id);
        //Una vez encontrado el juguete se establece el estado del contador, si no se encuentra el juguete el contador se establece a 0
        setCount(toy?.quantity || 0);
    }, [CartList, _id]); 

    //Boton de ( - )
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            removeToy(_id)
        }
        //Mostrar mensaje cuando se retira un producto del carrito
        alert('El producto fue retirado del carrito')
    }

    //Boton de ( + )
    const increment = () => {
        setCount(count + 1);
        addToy({
            _id,
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