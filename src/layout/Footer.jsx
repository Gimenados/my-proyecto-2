import React from 'react';
import SocialMedia from "../components/SocialMedia";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer_container">
        <div className="footer_element">
            

        <ul>
         <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/alta">Alta</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
        </ul>

        </div>

          < SocialMedia />

        <div className="footer_element_2">
          <p>2023 Juegueteria Cosmica. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
