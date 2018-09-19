import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class User extends Component {
  render() {
    return (
      <div className="User">

        <div className="profContainer">
            <img className="prof" alt="Profile Pic" src={"https://www.eharmony.com/dating-advice/wp-content/uploads/2017/07/selfcenteredman.png"}/>
        </div>

       <div className="profText dark">
            <p></p> Tyler Wessels
            <p></p> Chicago
            <p></p> Score: 20<span className="verticalLine">Likes: 5</span>
        </div>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <a href="tb-main.html"> Home</a>
                <a href="tb-login.html"> Sign out</a>
            </div>
        </div>
      </div>
  
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="logo" src={logo} alt=""/>
        </div>
        

        <Menu />

        <User />


        <footer className="foot">
            <p> Developed by Jewell Finder and Tyler Wessels </p>
        </footer>

      </div>
    )
  }
}

export default App;
