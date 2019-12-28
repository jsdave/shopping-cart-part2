// add a couple of helper functions
// dump out all the items except for our current item back into the new array. 

// Go over all the items in the cart; return all the cart items that don't match the current item we are trying to add.id. 

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);

// Need item in cart helper function; return all the cart items that match the current item we are trying to add.id. One item, don't want the array. 

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];



const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined // not in our cart
        // all items in cart except current item we are trying to add; spread out the item; set its quantity to 1 because it did not already exist in our cart. 
        ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
        // all items in cart except current item we are trying to add; spread out the cart item cause we found it; set quantity to cartItem.quantity plus 1 because we are adding another one of these into our cart. 
        : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

// helper function for REMOVE case. Takes a cart and an item. 
const removeFromCart = (cart, item) => {
    return item.quantity === 1 // if item.quantity is equal to 1
        // we are trying to remove completely since there is 1 left in the cart.
        ? [...cartWithoutItem(cart, item)]
        // Get all the properties of item with the spread operator;item.quantity is which is the current quantity -1 to remove one of those items from the cart.
        : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}
const removeAllFromCart = (cart, item) => {
    // get all old items except item we are removing
    return [...cartWithoutItem(cart, item)]
}

// an arrow function
// first argument is always state.
// we want it to be an array; empty array as a default.

const cartReducer = (state = [], action) => {
    switch (action.type) {
        // case for add; use inmutable JavaScript spread operator to take what we already had in the state.
        // 1. take 7 items out of the original state array and dump them one by one into this new array. 
        // 2. action.payload takes item we are adding to the cart and adds it ot the end.   
        // 3. returns a brand new array, that's going to have all the values of the old array(state) plus the new value that we are adding in from payload. Action.payload is the item we are trying to add. 

        case 'ADD':
            return addToCart(state, action.payload);

        // Case for Remove; const for the firstMatchIndex, just return the first index we want to remove. If more than one of these "action.payload" in our current cart will grab first one and return the index of that item. 

        // Description of return; will filter out the first item and give us the remaining items. Give us all of the items except for our first match. 

        // Will find the first item we are trying to remove and get its index. Then return all of the items inside of our state except the one that matches that first index. 
        // case 'REMOVE':
        //     const firstMatchIndex = state.indexOf(action.payload)
        //     return state.filter((item, index) => index !== firstMatchIndex);

        // part 2 min 11

        // action.payload is item we are trying to remove

        case 'REMOVE':
            // then create helper function const removeFromCart; action.payload is item we are trying to remove. 
            return removeFromCart(state, action.payload)

        // write the helper function above removeAllFromCart; we don't care about the quantity, since we are going to be removing all of them from the cart, which is the cartWithoutItem function. 
        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)

        default: // have a default state that returns the current state.
            return state;
    }
}

export default cartReducer; 