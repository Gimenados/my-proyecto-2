import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros"; // Importa el componente NosotrosPage
import Alta from "../pages/Alta";
import Contacto from "../pages/Contacto"

import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Checkout from "../pages/Checkout";

function RouterApp() {
  return (
    <BrowserRouter>
      {/* IMPORTAMOS EL COMPONENTE ENCABEZADO DE LA PAGINA */}
      <NavBar />
      
      <Routes>
        {/* IMPORTAMOS EL COMPONENTE HOME A EL INDEX */}
        <Route path="/" element={<Home />} />
        {/* Agrega la ruta para la página Nosotros */}
        <Route path="/nosotros" element={<Nosotros />} />
        {/* Agregar a la ruta para la pagina Alta  */}
        <Route path="/alta" element={<Alta />} />
        {/* Agregar a la ruta para la pagina Contacto */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      
      {/* Definimos una ruta separada para el Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;
