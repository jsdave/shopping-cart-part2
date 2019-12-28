import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './config/store';

// wrap it with the Redux Provider.
// inside of the redux provider call our BrowserRouter Provider and App.

const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root'));



