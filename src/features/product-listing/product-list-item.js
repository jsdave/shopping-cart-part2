// Objective is to create a ProductListItem component

import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

// Will take some props. Will return a div. Inside div display the product. H3 for the name props.name. Do an image tag, height equal to 100, since it is a number in react we will give it curly braces so JavaScript will read as a number not a string. It will have a title will use props.name, have src will do curly braces and backticks for template string. If we look at the products.json we can see that image gives us a file name. 
// Then do a div with props.description, for the description of the product. Then another div props.price and add dollar sign $. Add a button that says Add to cart. 
const ProductListItem = (props) => {
    // 1. find the current item that is in this component and find it inside of the cart. 
    // pass the cart in. This filter call will return the array but we only want the first item in this cart. 

    // Part 2 min 7:21 no longer need below function.
    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];

    return <div className='product-list-item'>
        <h3>{props.product.name}</h3>
        <img
            height={100}
            title={props.product.name}
            src={`/products/${props.product.image}`}
        />
        <div>{props.product.description}</div>
        <div>${props.product.price}</div>
        {/* <div>
            <button onClick={() => props.addToCart(props.product)}>Add to cart ({
                // if thisItemInCart is undefined or null the && will short circuit, the or will fire and we will get a 0. Put parenthesis around first part to execute first. This will evaluate as a true or a false (thisItemInCart && thisItemInCart.quantity). If true then quantity will print out else 0.
                //2. thisItemInCart; This item is it in the cart? If it is how many are there? thisItemInCart.quantity; if there are then put the quantity here; if not then return 0. 
                // (thisItemInCart && thisItemInCart.quantity) || 0

                // change to this function part 2 8:52
                // if props.cartItem does not exist i.e. is no in the cart.
                // it will return false, which means this block will return false
                // (props.cartItem && props.cartItem.quantity) will return false
                // will not run and the OR kicks in, and will return 0 cause it is not in our cart. 
                (props.cartItem && props.cartItem.quantity) || 0
            })</button>
        </div> */}

        {/* part 2 min 14:24 */}
        <div>
            {/* Going to pass some props */}
            <AddBtn
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
            />

            {
                props.cartItem
                    ? <RemoveBtn
                        cartItem={props.cartItem}
                        product={props.product}
                        removeFromCart={props.removeFromCart}
                    />
                    : null
            }
        </div>
    </div>

}

export default ProductListItem;