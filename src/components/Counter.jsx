import React, { useContext, useEffect, useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext'

import Text from '../components/Text'
import Button from '../components/Button'

function Counter({ _id, initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);
    const { addProd, removeProd, productsCartList } = useContext(CartContext);

    useEffect(() => {
        const productItem = productsCartList.find(prod => prod.product._id === _id);
        setCount(productItem?.quantity || 0);
    }, [productsCartList, _id]);

    const decrement = e => {
        e.stopPropagation()
        if(count > 0) setCount(count - 1)
        removeProd(_id)
    }

    const increment = e => {
        e.stopPropagation()
        setCount(count + 1)
        addProd({
            _id,
            quantity: count + 1
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

export default Counter