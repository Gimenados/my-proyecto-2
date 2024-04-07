import React from 'react'
import Counter from './Counter'

function CartItem({ id, img, toyData, price, quantity, shortDesc, CartList }) {
    // Verifica si toyData está definido antes de intentar acceder a sus propiedades
    if (!toyData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-item__container'>
                <img src={toyData.img} alt={toyData.shortDesc} />
            <h2>
                {toyData.title}
                <span>({toyData.brand})</span>
                <span>{toyData.price}</span>
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
