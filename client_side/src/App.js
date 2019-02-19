import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import Categories from './components/Categories';
import Invoicers from './components/invocers';
import Users from './components/Users'

const Home = () => (
  <div>
    <center>
    <h2> Assets Management System </h2>
    </center>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
          <li><Link to="/Invoicers">Invocers</Link></li>
        </ul> */}

        <Route path="/" component={Home}/>
        <Route path="/Categories" component={Categories}/>
        <Route path="/Invoicers" component={Invoicers}/>
        <Route path="/Users" component={Users}/>
      </div>
    );
  }
}

export default App;