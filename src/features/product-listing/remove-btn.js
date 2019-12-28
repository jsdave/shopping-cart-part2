import React from 'react';

const RemoveButton = (props) => {
    // Add Button only if product is added to cart.
    return <button
        onClick={() => props.removeFromCart(props.cartItem)}
    >Remove</button>
}

export default RemoveButton;