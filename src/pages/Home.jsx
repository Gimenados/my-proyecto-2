import React from 'react';
import ProductsWrapper from "../components/ProductsWrapper"

function Home() {  

  // const [carrito, setCarrito] = useState([]);

  // const addToCart = (product) => {
  //   setCarrito([...carrito, product]);
  // };
  
  return (
    <>
      <section className='section__container'>
        <h1>Juguetería Cósmica</h1>
        <p>Tenemos hasta 30% OFF y 3 cuotas sin interés</p>
      </section>
      <div className='title'>
        <h2>Listado de productos</h2>
      </div>
      <section className='cards__container'>
        <ProductsWrapper />
      </section>
    </>
    );
  }

  export default Home;

