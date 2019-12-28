import React from 'react';
import { Switch, Route } from 'react-router-dom'; // how we define the routes
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';

// create a const router and set that to an arrow function which will return a switch object which allows the pages to switch based on the route. It will render out a switch that will monitor the url localhost:3001/cart. When that changes it will switch to the route that matches and render the correct component. 

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
    </Switch>
)

export default Router;