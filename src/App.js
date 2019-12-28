// import components from libraries
import { NavLink } from 'react-router-dom';

// imports from internal files
import React from 'react';
import Router from './Router';


// create a nav component with links for our navigation. NavLink comes from react-router. When we click on Home the url will switch to /; click on cart the url will switch to /cart, which will kick off the router switch. 

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

class App extends React.Component {

  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
