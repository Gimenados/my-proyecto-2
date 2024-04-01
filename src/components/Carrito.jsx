import { useContext, useState } from "react";
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../context/CartContext";

import Button from "./Button";
import Modal from "./Modal";

function Cart() {
    const { cart } = useContext(CartContext); 
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className="cart__navbar-button"
                    action={() => setOpen(!open)}
                    disabled={!cart.length} 
                />
                {
                    cart.length ? 
                        <div className="cart__badge">
                            <span>
                                {cart.reduce( 
                                    (acc, toys) => acc + toys.quantity,
                                    0
                                )}
                            </span>
                        </div>
                    : undefined 
                }
            </div>
            <Modal show={open}>
                <div className="modal__header">
                    <Button
                        icon={faClose}
                        className="modal__close"
                        action={() => setOpen(!open)}
                    />
                </div>
            </Modal>
        </>
    );
}

export default Cart;
