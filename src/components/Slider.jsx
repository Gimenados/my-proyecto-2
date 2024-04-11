import React, { useState, useEffect } from 'react';

import sliderImage1 from '../imagenes/slider10.webp';
import sliderImage2 from '../imagenes/slider9.webp';
import sliderImage3 from '../imagenes/slider8.jpg';
import sliderImage4 from '../imagenes/slider6.webp';

// Componente del slider de imágenes
const ImageSlider = () => {
  const [index, setIndex] = useState(0); // Para controlar el índice de la imagen actual
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4]; // Array de imágenes

  useEffect(() => {
    // Efecto secundario que se ejecuta después de que el componente se monta en el DOM
    const interval = setInterval(() => {
      // Actualización del índice utilizando el operador de módulo (%) para asegurarse de que el índice esté dentro de los límites del array de imágenes
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    // Función de limpieza del efecto secundario para detener el intervalo cuando el componente se desmonta o actualiza
    return () => clearInterval(interval);
  }, []); // El array vacío indica que este efecto solo se ejecuta una vez

  return (
   
      <div className="slider_container">
        {/* Map para poder iterar sobre el array de imagenes */}
        {images.map((image, i) => (
          
          <img key={i} src={image} alt={`Slide ${i}`} style={{ display: index === i ? 'block' : 'none' }} />
        ))}
      </div>
  );
};

export default ImageSlider;
