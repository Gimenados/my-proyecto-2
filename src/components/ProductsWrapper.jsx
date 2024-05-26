import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getProducts } from '../data/api';

// Lista de Cards
function ProductsWrapper() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (err) {
        setError(err);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className="cards__container">
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <Card 
               key={product._id} 
               {...product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}

export default ProductsWrapper;