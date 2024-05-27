import React from 'react'
import Counter from './Counter'

// Contenido del modal
function CartItem({ product, quantity, edit = true }) {

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
            {edit && (
                <Counter 
                    _id={product._id} 
                    product={product}
                    initialValue={quantity}
                />
            )}
        </div>
    )
}

export default CartItem
