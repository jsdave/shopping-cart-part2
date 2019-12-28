import React from 'react';
import Cart from '../features/cart';

const CartPage = (props) => {
    return <div>
        <h2>CartPage</h2>
        <Cart /> {/*don't have to pass any values cause it gets all of it's props from redux. */}
    </div>
}

export default CartPage;