import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summery:</h3>
            <h5>Items Order: {props.cart.length}</h5>
            <p>total {total.toFixed(2)}</p>
            <p>shipping {shipping}</p>
            <p>tax {tax.toFixed(2)}</p>
            <p>GrandTotal {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;