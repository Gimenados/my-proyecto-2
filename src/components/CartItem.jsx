import React from 'react'
import Counter from './Counter'

function CartItem({ id, img, toyData, stock, price, quantity, shortDesc, CartList }) {
    // Verifica si toyData está definido antes de intentar acceder a sus propiedades
    if (!toyData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-item__container'>
                <img src={toyData.img} alt={toyData.shortDesc} />
            <h2>
                {toyData.title}
            </h2>
                <span>({toyData.brand})</span>
                <span>${toyData.price}</span>
                <p>Stock: ({toyData.stock})</p>
                <p>Categoria: {toyData.category}</p>
            <Counter 
               id={id} 
               toyData={toyData}
               initialValue={quantity}
/>
        </div>
    )
}

export default CartItem
