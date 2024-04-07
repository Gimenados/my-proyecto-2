import React from 'react'
import Counter from './Counter'

function CartItem({ id, toyData, quantity, CartList }) {
    // Verifica si toyData está definido antes de intentar acceder a sus propiedades
    if (!toyData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-item__container'>
            <h2>
                {toyData.title}
                <span>({toyData.brand})</span>
            </h2>
            <p>{toyData.category}</p>
            <Counter 
               id={id} 
               toyData={toyData}
               initialValue={quantity}
/>
        </div>
    )
}

export default CartItem
