import React, { Component } from 'react';
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



class Profile extends Component {
  render() {
    return (
        <div> 
      
            <User />

        </div>
 

    );
  }
}

export default Profile;
