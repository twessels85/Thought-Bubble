import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Profile from './Profile';
  import Login from './Login';
  import NewThought from './NewThought';
  import Main from './Main';

ReactDOM.render(
    <HashRouter>
        <div>
            <div className="testcontainer head">
                <div className="Menu">
                    <div className="dropdown">
                        <button className="dropbtn">
                            <div className="menuIcon"></div>
                            <div className="menuIcon"></div>
                            <div className="menuIcon"></div>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to="/"> Home </NavLink>
                            <NavLink to="/NewThought"> New Thought</NavLink>
                            <NavLink to="/Profile"> Profile</NavLink>
                            <NavLink to="/Login"> Sign out</NavLink>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <img className="logo" src='/images/logo.png' alt=""/>
=======
                <img className="logo" src="/images/logo.png" alt=""/>
>>>>>>> 56de56d73f357424ac7677f9146e98c9a9cedd99
            </div>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/NewThought" component={NewThought}/> 
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Login" component={Login}/>
                </div>

            <footer className="foot">
                <p> Developed by Jewell Finder and Tyler Wessels </p>
            </footer>

        </div>
        </HashRouter>

        , document.getElementById('root'));
registerServiceWorker();
