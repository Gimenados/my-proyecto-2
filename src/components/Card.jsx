// Card.jsx
import React, { useState } from 'react';

import Counter from '../components/Counter'

function Card({ id,
                title, 
                img, 
                category, 
                description, 
                price, 
                ageFrom,
                ageTo,
                shortDesc,
                addToCart, 
                delivery }) {
                  
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="cards__element" 
      onMouseEnter={() => setShowDetails(true)} 
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={img} alt={shortDesc} />
      {showDetails && (
        <div className="cards__element2">
          <h2>{title}</h2>
          <p>{description}</p>
          <b>{shortDesc}</b>
          <b>Edad: {ageFrom} a {ageTo}</b>
          <span>{price}</span>
         {delivery && <p>Envío sin cargo.</p>}
          {/* <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button> Cambiado el elemento a un button y se llama a la función addToCart directamente */}
        </div>
        
      )}

      <Counter id={id}/>
      
    </div>
    
  );
}

export default Card;
