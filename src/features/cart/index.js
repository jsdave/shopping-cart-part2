// Goal of this component is to 

import React from 'react';
// we are going to connect the component
import { connect } from 'react-redux';

// part 2 min 18; eras all the code and write new code.
// sort function takes an a and b; 0 index and 1 index; next time you call it will be the 1 index and 2 index; 2 index and 3 index, so on and so forth. Sort by a.id < b.id so they will not jump around.
function cartSort(items) {
    return items.sort((a, b) => a.id - b.id)
}

// 1. We don't need to do export default since it will be connected via redux. Return a table to hold products. Every table has a thead tag. tr tag which is a row. 

function Cart(props) {
    return <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th></th> {/* actions */}
                <th></th> {/* buttons */}
            </tr>
        </thead>

        <tbody>
            {/* loop over items in cart and display them. We have an item and for each of those items we are going to display a tr tag, which is going to have a td tag which is going to have the item.name, td tag with the item.quantity, td tag with add/remove buttons, td tag to remove cart completely.  */}
            {
                cartSort(props.cart).map(item => <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <button
                            // click call addToCart; to access adToCart that is going to come from dispatch. 
                            onClick={() => props.addToCart(item)}
                        >+</button>

                        <button
                            // click call addToCart; to access adToCart that is going to come from dispatch. 
                            onClick={() => props.removeFromCart(item)}
                        >-</button>
                        {/* removes everything of that type of item */}
                        <button
                            onClick={() => props.removeAllFromCart(item)}
                        >
                            Remove all from cart
                        </button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

// 3. get state from redux so we can map it to props. It will take state and return the keys we care about 

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    // return functions that we want to add on to props.
    // addToCart is an arrow function that will take an item 
    // dispatch a call to the redux store with the type of add and the payload  of the item that we want to add. 
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        // an arrow function that takes an item as an argument; dispatch the type will be remove; payload the item. 
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

// 2. this one is a connected component so use connect. 
// First parenthesis for mapStateToProps and MapDispatchToProps
// Second parenthesis we are going to pass our Cart

// First connect call will return another function, then it will be called passing cart into it. No we can call cart in the body of the table above and iterate over those items. 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// cart items are just an array; we need to create a quantity; a function that will count the items in the cart.
// Pass in cartItems

// export const cartItemsWithQuantities = (cartItems) => {
    // return a reduce function; filter and map function are created by the reduce function. An accumulator and an item for each iteration. Go over each of the items and count the quantity. 

    // this is like a for loop
    // return cartItems.reduce((acc, item) => {
        // Grab first item that it finds. Take the accumulator, filter over that, get item2 which is an arrow function which is going to compare item2.id to the item.id. The item.id is in our cart items; the item2 is in our accumulator. Currently our accumulator does not have anything in it. Our filter item will be undefined the first time. Do a check to see if it is not undefined do a turnary return filteredItem.quantity++; if the accumulator is empty or does not contain that item, we are going to take the accumulator and push a new value which will be all of the values of item and quanitity of 1. 
        // first iteration this will come back as undefined first time. Accumulator will look like this. 
        // acc =[]
        // since it is undefined, we are going to push it on. 

        // const filteredItem = acc.filter(item2 => item2.id === item.id)[0];

        // second iteration; grab the const filteredItem; go over the accumulator and filter over those items; item2.id is a 1, since we are iterating over item2. 
        // the accumulator will look like 
        // acc = [
        //     {
        //         id: 1, this is item2 in acc.filter(item2 =>)
        //         quantity: 1,
        //     }
        // ]

        // cartItems = [
        //    {
        //      id: 1, 
        //     },
        //     {
        //      id: 1, item2.id is this one we are iterating over
        //     },
        //     {
        //      id: 2,
        //     }
        // ]
        // result it sees a match between item2 and item2.id; now the filteredItem is not undefined, it has a value. Take this which is the filteredItem 
        // acc = [
        //     {
        //         id: 1, this is item2 in acc.filter(item2 =>)
        //         quantity: 1,
        //     }
        // ]

        // and return this
        // acc = [
        //     {
        //         id: 1,
        //         quantity: 2,
        //     }
        // ]


        // third iteration when filteredItem is not undefined.
        // ? filteredItem.quantity++ will take this
        // which is the filtered item 
        // acc = [
        //     {
        //         id: 1,
        //         quantity: 1,
        //     }
        // ]

        // now the accumulator will look like 
        // acc = [
        //     {
        //         id: 1,
        //         quantity: 2, // quantity++
        //     }
        // ]

        // fourth iteration will have accumulator; does our accumulator have an item with the id of 2. Look at the accumulator and see no it does not have an item with the id of 2. Therefor the filteredItem is going to be undefined. Do : acc.push({ ...item, quantity: 1. }).

        // acc.push({
        //     {
        //         id: 1, // this is item.id
        //         quantity: 2, // quantity++
        //     },
        //     quantity: 1,
        // })

        // final result our accumulator will have 2 items.
        // acc = [
        //     {
        //         id: 1, 
        //         quantity: 2, 
        //     },
        //     {
        //          id: 2, 
        //          quanitity: 1,
        //      }
        // ]

        // that's how the accumulator and reducer works

        // cartItems = [
        //    {
        //      id: 1, 
        //     },
        //     {
        //      id: 1, 
        //     },
        //     {
        //      id: 2, item2.id is this one we are iterating over
        //     }
        // ]

        // acc = [
        //     {
        //         id: 1, this is item.id
        //         quantity: 2, // quantity++
        //     }
        // ]

        // const filteredItem = acc.filter(item2 => item2.id === item.id)[0];

        // filteredItem !== undefined
        //     ? filteredItem.quantity++
        //     : acc.push({ ...item, quantity: 1. })

        // spread operator example
        // {...item } equals { id: 1, name: 'foo' }

        // item: {
        //     id: 1,
        //     name: 'foo',
        // }


        // then return the accumulator so we will have access to it on the next iteration.  
        // return acc;

//     }, []);
// }

// Pseudo code is we got cartItems=[] an array. We got 3 items in our cart. Two items with the id of 1 and 1 item with the id of 2. 
// The accumulator acc=[] starts of as an empty array by using the second argument of reducer. The first argument is the function you want to call for each iteration. The second argument is whatever the accumulator variable will start off at which is an empty array. We are going to iterate over these and for each one we are going to call the arrow function. 

// The first one we are going to go over and we get this value. If this item exists in the accumulator we are going to take our quantity and add 1 to it. A quantity of 1 will become a quantity of 2. 

// {
//     id: 1,
//     },
// {

// quantity++

// if it doesn't exist 

// acc = [];

// {
//     id: 1,
//     },
// {

// We are going to drop in the item with the spread operator, and quantity 1 a starting point: acc.push({...item, quanitity: 1 })  to sum it up do an:

// acc.push({ id: 1, quantity: 1});


// cart content
// {
//     id: 1,
//     },
// {
//     id: 1,
//     },
// {
//     id: 2,
//     }
// ]

// acc = [];

