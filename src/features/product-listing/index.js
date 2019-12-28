// Goal of this component is to iterate over the products, from data products.json. 

import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import { cartItemsWithQuantities } from '../cart';

// It returns a div and then iterate over props.products which we are going to pass in. Dot map which is our iteration function. Each iteration we are going to be a product. Create another component that will be a product list item that will be responsible for displaying a single product in our product list. Just product, instead of props.product, since we already iterating over and getting that value. Inside of product listing create new component. 
// Create a div and for every product its going to iterate over our product and create one ProductListItem component per product. Passing the product in so we can get those values. Go to pages and home. 
const ProductListing = (props) => {
    return <div className="product-listing">
        {
            props.products.map(product =>
                <ProductListItem
                    product={product} // pass in the product
                    addToCart={props.addToCart} // pass in the addToCart function; on our props because it comes from mapDispatchToProps(dispatch)
                    // cart={cartItemsWithQuantities(props.cart)} // from mapStateToProps; pass our cart into it so we can get the cartItemsWithQuantities so when we add products that's where its getting the number. 

                    // part 2 min 12:56
                    removeFromCart={props.removeFromCart}

                    // part 2 min 8:42; don't need this helper function (cartItemsWithQuantities) quantities directly in redux store; props.cart.filter will give us a cart item, one for each item in the cart; check cartItem.id equals to product.id to see if the product is actually in our cart. It returns an array and since there should ever be only 1 item of each type in the cart, go with index 0 to either return undefined or the item. 
                    cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />)
        }
    </div>
}

// grab all values of our cart state and map it to props. So we can say props.cart and gives us everything inside the of the cart inside of this component; get those values. Takes an argument of state. Pass the key cart and pass state.cart into that.   

// Defines which keys out of our redux store we are going to allow as props inside our current component. Want cart key to go our cart reducer inside of our redux store. 
const mapStateToProps = (state) => {
    // return the key that we want
    return {
        cart: state.cart, // pulling this out of redux and putting into prop called cart.
    }

}

// actions to are going to add stuff and remove stuff from the cart. We need to do a mapDispatchToProps which will map all of our actions to props on this component and the argument is dispatch which is the shortcut for store.dispatch, which dispatch is an action onto our store. Return a new action; addToCart is going to be the action. Take an item, an arrow function that will return a JavaScript object; call dispatch which comes from the argument, which dispatch is an action to our store. Look back at the reducer.js we got action.payload and action.type, that's where these are being used. 

// Add item to the cart. Type will be ADD and payload the item we are dealing with. 

// To Remove item from the cart. Props.removeFromCart when we want to remove something out of the redux store. Pass it an item. Gives us an arrow function that points to a JavaScript object. Dispatch another JavaScript object with type Remove and payload is also the item. Look at reducer, at the case for remove the action.type is remove and action.payload is the item we want to remove. 

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

// Need to connect these 2 functions and the redux store to our component. Second argument is our ProductListing.
// Connect is a function that takes our 2 functions, and then it returns a new function. In that new function we pass in our component ProductListing.

// This returns a function export default connect(mapStateToProps, mapDispatchToProps).

// Then we call the function passing in our component ProductListing. 

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);

// export default ProductListing;