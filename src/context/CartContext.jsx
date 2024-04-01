// CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToy = (toys) => {
    setCart([...cart, toys]);
  };

  const removeToys = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToy, removeToys }}>
      {children}
    </CartContext.Provider>
  );
};
