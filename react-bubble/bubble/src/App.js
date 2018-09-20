import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './images/logo.png';

import './App.css';
import Profile from './Profile.js';
import Main from './Main.js';
import Login from './Login.js';
import NewThought from './NewThought';


class App extends Component {
  render() {
    return (
      <div>
        <div className="testcontainer head">
          <img className="logo" src={logo} alt=""/>
        </div>
        
        <Main />


        <footer className="foot">
            <p> Developed by Jewell Finder and Tyler Wessels </p>
        </footer>

      </div>
    )
  }
}

export default App;
