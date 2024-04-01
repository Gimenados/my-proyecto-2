// CartProvider.jsx
import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToys = (toyToAdd) => {
        const existingToyIndex = cart.findIndex(toy => toy.id === toyToAdd.id);
    
        if (existingToyIndex !== -1) {
          // Si el juguete ya está en el carrito, actualiza su cantidad
          const updatedCart = [...cart];
          updatedCart[existingToyIndex].quantity += toyToAdd.quantity;
          setCart(updatedCart);
        } else {
          // Si el juguete no está en el carrito, agrégalo
          setCart([...cart, toyToAdd]);
        }
    };

    const removeToys = id => {
        const updatedCart = cart.filter(toy => toy.id !== id);
        setCart(updatedCart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToys,
            removeToys
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
