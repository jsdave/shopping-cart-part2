// In store.js we configure redux.
import { createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer';

// create rootReducer; call combineReducers for now leave empty, since we haven't created any reducers. 

const rootReducer = combineReducers({
    // put reducer here; key is called cart and value is whatever happens in cartReducer. 
    cart: cartReducer,
});

// const store equals createStore that will take a rootReducer and use Redux dev tools extension. Each of the browsers has a redux dev tools extension for it. Since we are going to be using the extension, we have to tell our store about it. 

const store = createStore(
    rootReducer,
    // before the && says this function exists(the redux dev tools extension is installed in the current browser we are using), and then call the function. So if the function doesn't exist we don't call the function. 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
// export so we can get it in our index file.
// this is another provider like our redux dev tools