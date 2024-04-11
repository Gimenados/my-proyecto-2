import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    //Usa Usestate para crear une estado llamado cartList que almacena la lista de juguetes. SetToyCartList para actualizar el estado
    const [CartList, setToyCartList] = useState([])
    
    //Para agregar un nuevo juguete al carrito. Datos del juguete con data 
    const addToy = data => {
        //Con find busca si ya existe un juguete con el mismo ID
        const toyFinded = CartList.find(toy => toy.id === data.id)
        //Si toyFinded es verdadero, osea que encontro el ID del juguete
        if (toyFinded) {
            setToyCartList(
                //Itera sobre cada elemento del array
                CartList.map(
                    //Se remplaza ese jugeute con los datos nuevo
                    toy => toy.id === data.id ? data : toy
                )
            )
        //Si no coincide 
        } else {
            //El juguete se mantiene igual
            setToyCartList([...CartList, data])
        }
    }

    //Para eliminar el juguete del carrito
    const removeToy = id => {
        //Toma un parametro id para eliminar
        const toyFinded = CartList.find(toy => toy.id === id)
        //Compruebo si toyFinded existe y si la propiedad quantity del juguete es mayor que 1.
        if (toyFinded?.quantity > 1) {
            setToyCartList(
                CartList.map(
                    toy => toy.id === id ? {
                        ...toy,
                        quantity: toy.quantity -1
                    } : toy
                )
            )
        // Si la cantidad del juguete es igual a 1 o no se encuentra
        } else {
            //Filter para poder eliminar el juguete con el id proporcionado
            setToyCartList(CartList.filter( toy => toy.id !== id ))
        }
    }

    return (
        // LLamo a las dos funciones 
        <CartContext.Provider value={{
            CartList,
            addToy,
            removeToy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;