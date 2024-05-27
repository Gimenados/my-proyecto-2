import React from 'react';
import Counter from '../components/Counter';

//Objeto props para tomar los datos de la card
function Card({ _id,
                name, 
                imgUrl, 
                category, 
                description,
                stock, 
                price, 
                ageFrom,
                brand,
                ageTo,
                shortDesc, 
                delivery }) {
                  
  // Este estado se utiliza para controlar si se muestran o no los detalles adicionales de la tarjeta cuando el usuario pasa el ratón sobre ella.                
  // const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="cards__element" 
      // onMouseEnter={() => setShowDetails(true)} 
      // onMouseLeave={() => setShowDetails(false)}
    >
      <img src={imgUrl} alt={shortDesc} />
      {/* Si showDetails es true, muestra un bloque de información adicional */}
      {/* {showDetails && ( */}
        <div className="cards__element2">
          <h2>{name}</h2>
          <p>{description}</p>
          <b>Edad: {ageFrom} a {ageTo}</b>
          <span>${price}</span>
          <p>Stock: {stock}</p>
          {delivery ? <p>Envío sin cargo.</p> : undefined}
        </div>
      {
      /* ) */}

      <Counter _id={_id} />
    </div>
  );
}

export default Card;