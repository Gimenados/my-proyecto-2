import React, { useState, useEffect } from 'react'
import { CartContext } from './CartContext'
import { editCart, postCart, getCart } from '../data/api'

function CartProvider({children}) {
    // Donde se van a guardar
    const [idCart, setIdCart] = useState(null)
    // Usa useState para crear un estado llamado productsCartList que almacena la lista de juguetes. SetProdCartList para actualizar el estado
    const [productsCartList, setProdCartList] = useState([])

    useEffect(() => {
        const storedIdCart = localStorage.getItem("cartId")
        if (storedIdCart) {
            getCart(storedIdCart)
                .then(({cart}) => {
                    setProdCartList(cart.items)
                    setIdCart(storedIdCart)
                })
        }
    }, [])

    // Para agregar un nuevo juguete al carrito. Datos del juguete con data ( + )
    const addProd = ({ _id, quantity }) => {
        const data = {
            quantity,
            product: _id
        }
        // Con find busca si ya existe un juguete con el mismo ID
        const prodFinded = productsCartList.find(prod => prod.product?._id === _id)
        // Si prodFinded es verdadero, o sea que encontró el ID del juguete
        if (prodFinded) {
            // Itera sobre cada elemento del array
            const newCart = productsCartList.map(
                prod => prod.product?._id === data.product ? data : prod
            )
            editCart(idCart, newCart)
                .then(({cart}) => setProdCartList(cart.items))
        // Si no coincide
        } else {
            if (!idCart) {
                postCart([data])
                    .then(({cart}) => {
                        //Guardar el carrito en un estado
                        localStorage.setItem("cartId", cart._id)
                        setIdCart(cart._id)
                        setProdCartList(cart.items)
                    })
            } else {
                const newCart = [...productsCartList, data]
                editCart(idCart, newCart)
                    .then(({cart}) => setProdCartList(cart.items))
            }
        }
    }

    // Para eliminar el juguete del carrito ( - )
    const removeProd = (id) => {
        // Toma un parámetro id para eliminar
        const prodFinded = productsCartList.find(prod => prod.product?._id === id)
        // Comprueba si prodFinded existe y si la propiedad quantity del juguete es mayor que 1.
        if (prodFinded?.quantity > 1) {
            const newCart = productsCartList.map(
                prod => prod.product._id === id ? {
                    ...prod,
                    quantity: prod.quantity -1
                } : prod
            )
            editCart(idCart, newCart)
                .then(({cart}) => setProdCartList(cart.items))
        // Si la cantidad del juguete es igual a 1 o no se encuentra
        } else {
            const newCart = productsCartList.filter( prod => prod.product?._id !== id )
            editCart(idCart, newCart)
                .then(({cart}) => setProdCartList(cart.items))
        }
    }

    //Boton final del modal
    const resetCart = () => {
        // Restablecer el carrito a cero
        setIdCart(null)
        localStorage.removeItem("cartId")
        setProdCartList([])
    }

    return (
        // Llamo a las dos funciones
        <CartContext.Provider value={{
            productsCartList,
            addProd,
            removeProd,
            resetCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
