import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getArticles } from '../data/api'


function ArticlesWrapper() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
            .then(
                data => setArticles(data)
            )
            .catch( err => console.error(err))
    }, [])
    

    return (
        <div style={{ display: 'flex'}}>
            <div className="cards__container">
                {
                    articles.map(
                        articles =>
                            <Card 
                                key={articles.id}
                                {...articles}
                            />
                    )
                }
            </div>
            
        </div>
    )
}

export default ArticlesWrapper