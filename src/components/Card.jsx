// Card.jsx
import React, { useState } from 'react';

import Counter from '../components/Counter'

function Card({ id,
                title, 
                image, 
                category, 
                description, 
                price, 
                addToCart, 
                delivery }) {
                  
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="cards__element" 
      onMouseEnter={() => setShowDetails(true)} 
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={image} alt="Imagen del producto" />
      {showDetails && (
        <div className="cards__element2">
          <h2>{title}</h2>
          <p>{description}</p>
          <b>{category}</b>
          <span>{price}</span>
          {delivery ? <p>Envío sin cargo.</p> : undefined}
          {/* <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button> Cambiado el elemento a un button y se llama a la función addToCart directamente */}
        </div>
        
      )}

      <Counter id={id}/>
      
    </div>
    
  );
}

export default Card;
