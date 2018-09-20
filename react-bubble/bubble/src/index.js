import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import logo from './images/logo.png';
  import Profile from './Profile.js';
  import Login from './Login.js';
  import NewThought from './NewThought';
  import Main from './Main';

ReactDOM.render(
    <HashRouter>
        <div>
            <div className="testcontainer head">
            <img className="logo" src={logo} alt=""/>
            </div>
            

            <div className="Menu">
            <div className="dropdown">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/NewThought"> New Thought</NavLink>
                    <NavLink to="/Profile"> Profile</NavLink>
                    <NavLink to="/Login"> Sign out</NavLink>
                </div>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/NewThought" component={NewThought}/> 
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Login" component={Login}/>
                </div>
            </div>
            </div>

            <footer className="foot">
                <p> Developed by Jewell Finder and Tyler Wessels </p>
            </footer>

        </div>
        </HashRouter>
        , document.getElementById('root'));
registerServiceWorker();
