import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    const [CartList, setToyCartList] = useState([])
    
    const addToy = data => {
        const toyFinded = CartList.find(toy => toy.id === data.id)
        if (toyFinded) {
            setToyCartList(
                CartList.map(
                    toy => toy.id === data.id ? data : toy
                )
            )
        } else {
            setToyCartList([...CartList, data])
        }
    }

    const removeToy = id => {
        const toyFinded = CartList.find(toy => toy.id === id)
        if (toyFinded?.quantity > 1) {
            setToyCartList(
                CartList.map(
                    toy => toy.id === id ? {
                        ...toy,
                        quantity: toy.quantity -1
                    } : toy
                )
            )
        } else {
            setToyCartList(CartList.filter( toy => toy.id !== id ))
        }
    }

    return (
        <CartContext.Provider value={{
            CartList,
            addToy,
            removeToy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;