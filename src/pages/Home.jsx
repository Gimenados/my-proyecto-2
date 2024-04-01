import React, { useState } from 'react';
import ArticlesWrapper from "../components/ArticlesWrapper"

import Card from '../components/Card';
import Carrito from '../components/Carrito';

import cards1 from '../imagenes/caballo.webp';
import cards2 from '../imagenes/bombero1.webp';
import cards3 from '../imagenes/resorte.webp';
import cards4 from '../imagenes/barbie1.webp';
import cards5 from '../imagenes/llorona1 - copia.webp';

function Home() {  

  const [carrito, setCarrito] = useState([]);

  const addToCart = (product) => {
    setCarrito([...carrito, product]);
  };

  return (
    <>
      <section className='section__container'>
        <h1>Juguetería Cósmica</h1>
        <p>Tenemos hasta 30% OFF y 3 cuotas sin interés</p>
      </section>
      {/* Creamos objetos para la informacion de cada card */}
        {/* <Card
          title='Caballo Saltarín'
          image={cards1}
          description='Un juguete seguro y divertido para los más pequeños de la casa. Todos nuestros productos se envían inflados y revisados. Fabricados con plastisol PVC NO TÓXICO libre de ftalatos.'
          price='$31.856'
          addToCart={addToCart}
          />
          <Card
          title='Camión de Bomberos'
          image={cards2}
          description='Este camioncito de bomberos, réplica de alguna versión antigua, es una belleza. Imposible no querer recorrerlo de punta a punta. Con increíbles colores y fabricación.'
          price='$18.999'
          addToCart={addToCart}
          />
          <Card
          title='Barbie'
          image={cards4}
          description='Barbie La muñeca modela un vestido de cuadros rosa y blanco de inspiración vintage con un cinturón a juego y una falda plisada completa. Su largo cabello rubio está peinado.'
          price='$20.000'
          addToCart={addToCart}
          />
          <Card
          title='Resorte'
          image={cards3}
          description='Resorte mágico con atractivos colores arcoíris. Es un juguete divertido que también funciona como juego anti estrés. Fabricado en plástico de muy buena calidad.'
          price='$3.999'
          addToCart={addToCart}
          />
          <Card
          title='Bebe llorona'
          image={cards5}
          description='Los Bebés Llorones son unas muñecas interactivas de IMC Toys muy divertidas que llevan pijamas de animalitos.'
          price='$90.2'
          addToCart={addToCart}
        /> */}
        <section className='cards__container'>
            <ArticlesWrapper />
        </section>
    </>
  );
}

export default Home;
