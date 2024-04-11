// import React, { useState, useEffect } from 'react';

// function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = ['./imagenes/slider1.jpg', './imagenes/slider2.jpg', './imagenes/slider3.jpg'];
  
//   // Función para cambiar a la siguiente imagen
//   function nextImage() {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }

//   // Cambiar a la siguiente imagen cada 5 segundos
//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="slider">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slider Image ${index}`}
//           style={{ display: index === currentIndex ? 'block' : 'none' }}
//         />
//       ))}
//     </div>
//   );
// }

// export default Slider;
