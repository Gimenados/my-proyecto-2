import React, { useState, useEffect } from 'react';

//Slider de imagen cambia cada 4seg = 4000

const Banner = () => { const [currentImage, setCurrentImage] = useState(1); //Inicio en 1 porque las imagenes arrancan enumeradas desde 1

useEffect(() => { 
    const intervalId = setInterval(() => { 
        //Actualiza la imagen actual mcon setCurrentImage
        // La expresión (prevImage % 3) + 1 asegura que el valor de la imagen actual se mantenga entre 1 y 3.
        setCurrentImage((prevImage) => (prevImage % 3) + 1);
     }, 4000);
//Return para limpiar el intervalo      
return () => clearInterval(intervalId); 
}, []);

return (
    <div className="banner">
        <img src={`/img/banner${currentImage}.jpg`} alt={`Banner ${currentImage}`} />
    </div>
);
}

export default Banner;