import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    render() {
        return( 
            <form action="tb-main.html" target="_self" className="testcontainer loginCont">
                <div className="loginItem"><input type="text" name="username" placeholder="Username"/></div>
                <div className="loginItem"><input type="password" name="password" placeholder="Password"/></div>
                <div className="submitItem modalItem"><input className="subButton" type="submit" value="Log In"/></div>
            </form>
        );
    }
}

class Login extends Component {
  render() {
    return (
      <Form />
    )
  }
}

export default Login;
