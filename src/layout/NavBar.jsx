import { Link } from "react-router-dom";
import logo from "../imagenes/logo1.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Carrito from '../components/Carrito';
import React, { useState, useEffect } from 'react';

import { faClose } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setIsSmallScreen(true);
      } else {
        setIsMenuOpen(false); // Cerrar el menú si el tamaño de la pantalla es mayor a 490px
        setIsSmallScreen(false); // Asegurar que el menú no se muestre al llegar a 490px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header_container">
      <div className={`navbar-menu-icon ${isSmallScreen ? 'show' : 'hide'}`} onClick={toggleMenu}>
       <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`header__element ${!isMenuOpen && !isSmallScreen ? 'show' : ''}`}>
      <Link to="/"> 
        <img src={logo} alt="Mi Imagen" /> 
      </Link>          
        <input type="text" placeholder="Buscar" />
      </div>
      <nav className={`header__element__2 ${isMenuOpen ? 'open' : ''}`}>
      <Button
          icon={faClose}
          className="modal__close"
          action={() => setIsMenuOpen(false)} 
        />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/alta">Alta</Link></li>
          <li><Link to="/contacto">Contáctanos</Link></li>
        </ul>
      </nav>
        <div className="tienda_container"></div>
        <Carrito />
    </header>
  );
}

export default NavBar;
