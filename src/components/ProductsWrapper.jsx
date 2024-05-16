import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getProducts } from '../data/api'

//Lista de Cards
function ProductsWrapper() {
    //Almacena la lista y la actualiza
    // const [products, setProducts] = useState([])
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     getProducts()
    //         .then(
    //             data => setProducts(data.products)
    //         )
    //         .catch(err => {
    //             console.error(err);
    //             setError(err);
    //         });
    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(
                data => setProducts(data.products)
            )
            .catch( err => console.error(err))
    }, [])

    return (
        <div style={{ display: 'flex'}}>
            <div className="cards__container">
                {/* Verificar si products es un array antes de llamar a map*/}
                {/* {Array.isArray(products) && products.map(product => (
                    <Card 
                        key={product.id}
                        {...product}
                    />
                ))} */}
                 {
                    products.map(
                        product =>
                            <Card 
                                key={product._id}
                                {...product}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default ProductsWrapper
