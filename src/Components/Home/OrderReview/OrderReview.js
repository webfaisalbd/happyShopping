import React from 'react';
import useCart from '../../../hooks/useCart';
import useProducts from '../../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h3>Products {products.length}</h3>
            <h3>Products {cart.length}</h3>
            <h3>This is order</h3>
        </div>
    );
};

export default OrderReview;