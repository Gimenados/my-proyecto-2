import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getArticles } from '../data/api'

//Lista de Cards
function ArticlesWrapper() {
    //Almacena la lista y la actualiza
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
            .then(
                data => setArticles(data)
            )
            .catch(err => console.error(err))
    }, [])

    return (
        <div style={{ display: 'flex'}}>
            <div className="cards__container">
                {/* Verificar si articles es un array antes de llamar a map*/}
                {Array.isArray(articles) && articles.map(article => (
                    <Card 
                        key={article.id}
                        {...article}
                    />
                ))}
            </div>
        </div>
    )
}

export default ArticlesWrapper
