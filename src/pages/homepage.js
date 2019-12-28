// Stateless component to display the homepage.

import React from 'react';

import ProductListing from '../features/product-listing';

import data from '../data/products.json';

// we are going to use redux so we can use a stateless component
// In ProductListingComponent we pass data which is products.json, data is everything between the curly braces top and bottom. Our first key is products. Data.products, will give us what is inside the products array. 
const HomePage = (props) => {
    return <div>
        <h2>HomePage</h2>

        < ProductListing products={data.products} />
    </div>
}

export default HomePage;