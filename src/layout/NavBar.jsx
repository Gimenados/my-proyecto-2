// NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../imagenes/logo.png";
import Carrito from '../components/Carrito';

function NavBar() {

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
        {/* Asegúrate de pasar carritoVisible y toggleCarrito como props al componente Carrito */}
        <div className="tienda_container">
        </div>
          <Carrito />
      </nav>
    </header>
  );
}

export default NavBar;
