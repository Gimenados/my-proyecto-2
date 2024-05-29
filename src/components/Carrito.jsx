import React, { useContext, useState } from "react";
import { faClose, faCartShopping ,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import Button from "./Button";
import Modal from "./Modal";
import CartItem from './CartItem';


//Elementos agregados al carrito
function Cart() {
    //Obtener la lista de productos 
    const { productsCartList } = useContext(CartContext); 
    const navigate = useNavigate()
    //Apertura y cierre del modal
    const [open, setOpen] = useState(false);
    

    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className="cart__navbar-button"
                    action={() => setOpen(!open)}
                    disabled={!productsCartList.length}
                />
                {
                    productsCartList.length ?
                        <div className="cart__badge">
                            <span>
                                {productsCartList.reduce(
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
                    productsCartList.map(
                        data =>
                            <CartItem
                                key={data.product._id}
                                {...data}
                            />
                    )
                }
                 <div id="payment_container" className="modal__footer">
                        <Button
                            icon={faCartShopping}
                            className="modal__btn-buy"
                            label="Comprar"
                            action={() => {
                                navigate("/checkout")
                                setOpen(!open)
                            }}
                        />
                    </div>
            </Modal>
            

        </>
    );
}

export default Cart;