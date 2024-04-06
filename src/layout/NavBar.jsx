// NavBar.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../imagenes/logo.png";
import Carrito from '../components/Carrito';

function NavBar() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <header className="header_container">
      <div className="header__element">
      <img src={logo} alt="Mi Imagen" />            
        <input type="text" placeholder="Buscar" />
      </div>
      
      <nav className="header__element__2">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/alta">Alta</Link></li>
          <li><Link to="/contacto">Contáctanos</Link></li>
        </ul>
        <div className="tienda_container">
          <Carrito />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
