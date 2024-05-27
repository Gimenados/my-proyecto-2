import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    //Usa Usestate para crear une estado llamado ProductsCartList que almacena la lista de juguetes. SetToyProductsCartList para actualizar el estado
    const [ProductsCartList, setToyProductsCartList] = useState([])
    //Para agregar un nuevo juguete al carrito. Datos del juguete con data 
    const addToy = data => {
        //Con find busca si ya existe un juguete con el mismo ID
        const toyFinded = ProductsCartList.find(toy => toy._id === data._id)
        //Si toyFinded es verdadero, osea que encontro el ID del juguete
        if (toyFinded) {
            setToyProductsCartList(
                //Itera sobre cada elemento del array
                ProductsCartList.map(
                    //Se remplaza ese jugeute con los datos nuevo
                    toy => toy._id === data._id ? data : toy
                )
            )
        //Si no coincide 
        } else {
            //El juguete se mantiene igual
            setToyProductsCartList([...ProductsCartList, data])
        }
    }

    //Para eliminar el juguete del carrito
    const removeToy = id => {
        //Toma un parametro id para eliminar
        const toyFinded = ProductsCartList.find(toy => toy._id === id)
        //Compruebo si toyFinded existe y si la propiedad quantity del juguete es mayor que 1.
        if (toyFinded?.quantity > 1) {
            setToyProductsCartList(
                ProductsCartList.map(
                    toy => toy._id === id ? {
                        ...toy,
                        quantity: toy.quantity -1
                    } : toy
                )
            )
        // Si la cantidad del juguete es igual a 1 o no se encuentra
        } else {
            //Filter para poder eliminar el juguete con el id proporcionado
            setToyProductsCartList(ProductsCartList.filter( toy => toy._id !== id ))
        }
    }

    return (
        // LLamo a las dos funciones 
        <CartContext.Provider value={{
            ProductsCartList,
            addToy,
            removeToy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;