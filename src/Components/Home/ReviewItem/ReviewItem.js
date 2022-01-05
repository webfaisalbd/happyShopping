import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <h4>{name}</h4>
            <h6>Price:{price}</h6>
            <h6>Quantity:{quantity}</h6>
            <button onClick={() => {
                handleRemove(key)
            }} className='btn btn-warning'>Remove</button>
        </div>
    );
};

export default ReviewItem;