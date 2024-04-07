import { useContext, useState } from "react";
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../context/CartContext";

import Button from "./Button";
import Modal from "./Modal";
import CartItem from './CartItem';

function Cart() {
    const { CartList } = useContext(CartContext); 
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
            {/* Aquí envuelve los elementos en un contenedor único  */}
            <Modal show={open} onClose={()=>setOpen(false)}>
                <div className="modal__header">
                    <Button
                        icon={faClose}
                        className="modal__close"
                        action={() => setOpen(!open)}
                    />
                </div>
                {
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
