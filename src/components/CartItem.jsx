import React from 'react'
import Counter from './Counter'

// Contenido del modal
function CartItem({ _id, imgUrl, toyData, stock, price, quantity, shortDesc, ProductsCartList }) {
    // Verifica si toyData está definido antes de intentar acceder a sus propiedades
    if (!toyData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-item__container'>
                <img src={toyData.imgUrl} alt={toyData.shortDesc} />
            <h2>
                {toyData.title}
            </h2>
                <span>({toyData.brand})</span>
                <span>${toyData.price}</span>
                <p>Stock: ({toyData.stock})</p>
                <p>Categoria: {toyData.category}</p>
            <Counter 
               _id={_id} 
               toyData={toyData}
               initialValue={quantity}
/>
        </div>
    )
}

export default CartItem
