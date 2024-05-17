import React from 'react';
import RouterApp from "./routes/RouterApp";

import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
            <RouterApp />
    </CartProvider>
  );
}

export default App;