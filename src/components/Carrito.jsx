import React, { useContext, useState } from "react";
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../context/CartContext";

import Button from "./Button";
import Modal from "./Modal";
import CartItem from './CartItem';

//Elementos agregados al carrito
function Cart() {
    //Obtener la lista de productos 
    const { CartList } = useContext(CartContext); 
    //Apertura y cierre del modal
    const [open, setOpen] = useState(false);
    

    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className="cart__navbar-button"
                    action={() => setOpen(!open)}
                    disabled={!CartList.length} 
                />
                {
                    CartList.length ? 
                        <div className="cart__badge">
                            <span>
                                {CartList.reduce( 
                                    (acc, toys) => acc + toys.quantity,
                                    0
                                )}
                            </span>
                        </div>
                    : undefined 
                }
            </div>
            {/* Cuando open es true. Utiliza el componente Modal y pasa el estado open como prop show  */}
            <Modal show={open} onClose={()=>setOpen(false)}>
                <div className="modal__header">
                    <Button
                        icon={faClose}
                        className="modal__close"
                        action={() => setOpen(!open)}
                    />
                </div>
                {
                    // Itera sobre la lista de productos en el carrito 
                    CartList.map(
                        data =>
                            <CartItem
                                key={data.id}
                                {...data}
                            />
                    )
                }
            </Modal>
        </>
    );
}

export default Cart;