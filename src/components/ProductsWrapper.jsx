import React, { useEffect, useState } from 'react'
import Card from './Card'

import cards from '../data/card.json'

function ProductsWrapper() {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     getProducts()
    //         .then(
    //             data => setProducts(data)
    //         )
    //         .catch( err => console.error(err))
    // }, [])
    

    return (
        <div style={{ display: 'flex'}}>
            <div className="cards__container">
                {
                    cards.map(
                        cards =>
                            <Card 
                                key={cards.id}
                                {...cards}
                            />
                    )
                }
            </div>
            
        </div>
    )
}

export default ProductsWrapper