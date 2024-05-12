import React from 'react';

import ImageSlider from "../components/Slider";

import section1 from "../imagenes/section1.jpg";
import section2 from "../imagenes/section2.jpg";
import section3 from "../imagenes/section3.jpg";

function Nosotros() {
  return (
    <>
    <ImageSlider />
     <div className='nosotros_container'>
      <div className="title_container">
        <h1>Quiénes somos</h1>
      </div>
      <section className="select_container_us">
        <div>
        <img src={section1} alt="Mi Imagen" />;            
          <h2>¿Qué hacemos?</h2>
          <p>Ofrecemos juegos y juguetes de verdad, creativos y que traspasan modas, para todas las edades. Consulte por disponibilidad y stock! </p>
        </div>
        <div>
        <img src={section2} alt="Mi Imagen" />;            
          <h2>¿Cómo lo hacemos?</h2>
          <p>Buscamos constantemente los mejores juguetes para cada necesidad, de reconocidas marcas. Asesoramos a cada uno de nuestros clientes.</p>
        </div>
        <div>
        <img src={section3} alt="Mi Imagen" />;            
          <h2>¿Por qué lo hacemos?</h2>
          <p>Creemos en el poder del juego y en el aprendizaje de cada uno de nosotros. <br />¡Menos pantallas, más juegos!</p>
        </div>
      </section>
     </div>

      <section className="select_container_location">
        <h3>DÓNDE ESTAMOS</h3>
        <p>Disneyland Paris</p>
        <iframe
           className="iframe"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5186120307435!2d2.7810180756273835!3d48.86738930007436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61d19ca7ae2bd%3A0x57faf8cb6310e660!2sDisneyland%20Paris!5e0!3m2!1ses-419!2sar!4v1703893874221!5m2!1ses-419!2sar"
           style={{ border: '0', width: '70%', height: '70%' }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           title="Ubicación de nuestra tienda"
        ></iframe>

      </section>
    </>
  );
}

export default Nosotros;
