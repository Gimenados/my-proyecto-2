import React, { useState , useEffect } from 'react';

import ContactForm from '../components/ContactForm';

import sliderImage1 from '../imagenes/section.jpg';
import sliderImage2 from '../imagenes/slider.jpeg';
import sliderImage3 from '../imagenes/slider2.jpeg';
import sliderImage4 from '../imagenes/slider3.jpeg';

// Componente del slider de imágenes
const ImageSlider = () => {
  const [index, setIndex] = useState(0); //Para controlar el indice de la imagen actual
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4]; //Array de imagenes

  useEffect(() => { //Efecto secundario que se ejecuta despues de que el componente se monta en el DOM
    const interval = setInterval(() => {
     // Actualización del índice utilizando el operador de módulo (%) para asegurarse de que el índice esté dentro de los límites del array de imágenes
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
     // Función de limpieza del efecto secundario para detener el intervalo cuando el componente se desmonta o actualiza
    return () => clearInterval(interval);
  }, []); // El array vacio indica que este efecto solo se ejecuta una vez

  return (
    <div className="slider">
      <div className="slider_container">
        {images.map((image, i) => (
          <img key={i} src={image} alt={`Slide ${i}`} style={{ display: index === i ? 'block' : 'none' }} />
        ))}
      </div>
      {/* <div className="text_container">
        <h1>Promociones semanales</h1>
        <p>Hasta 6 cuotas sin interes</p>
      </div> */}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ImageSlider />
      <ContactForm />
    </div>
  );
}

