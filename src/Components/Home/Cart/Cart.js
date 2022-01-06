import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summery:</h3>
            <h5>Items Order: {totalQuantity}</h5>
            <p>total {total.toFixed(2)}</p>
            <p>shipping {shipping}</p>
            <p>tax {tax.toFixed(2)}</p>
            <p>GrandTotal {grandTotal.toFixed(2)}</p>
            <button>
            <NavLink className="nav-link" to="/shipping">Proceed to Shipping</NavLink>
            </button>
        </div>
    );
};

export default Cart;