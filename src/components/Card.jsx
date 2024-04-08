import React, { useState } from 'react';
import Counter from '../components/Counter';

function Card({ id,
                title, 
                img, 
                category, 
                description,
                stock, 
                price, 
                ageFrom,
                brand,
                ageTo,
                shortDesc, 
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
          <b>Edad: {ageFrom} a {ageTo}</b>
          <span>{price}</span>
          <p>{stock}</p>
          {delivery && <p>Envío sin cargo.</p>}
        </div>
      )}

      <Counter 
        id={id}
        toyData={{
          title,
          img,
          category,
          brand,
          stock,
          price,
          shortDesc,
        }}
      />
    </div>
  );
}

export default Card;
