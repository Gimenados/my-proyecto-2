import React from 'react'
import Counter from './Counter'

// Contenido del modal
function CartItem({ _id, product, quantity }) {

    return (
        <div className='cart-item__container'>
                <img src={product.imgUrl} alt={product.shortDesc} />
            <h2>
                {product.name}
            </h2>
                <span>({product.brand})</span>
                <span>${product.price}</span>
                <p>Stock: ({product.stock})</p>
                <p>Categoria: {product.category}</p>
            <Counter 
               _id={_id} 
               product={product}
               initialValue={quantity}
/>
        </div>
    )
}

export default CartItem
