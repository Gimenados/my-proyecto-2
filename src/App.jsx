import RouterApp from "./routes/RouterApp";

import { CartProvider } from '../src/context/CartContext';

function App() {
  return (
    <CartProvider>
            <RouterApp />
    </CartProvider>
  );
}

export default App;
