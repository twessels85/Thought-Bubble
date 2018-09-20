import React, { Component } from 'react';
import './App.css';

class NewThought extends Component {
    render() {
        return(
            <div className="testcontainer modalTop">
                <form action="#">
                    <h5 className="modalItem">What inspires you today?</h5>
                    <textarea className="modalItem" name="userThought" rows="6" cols="40" placeholder="New thought...."></textarea>
                    <div className="submitItem modalItem"><input className="subButton" type="submit" value="Submit"/></div>
                </form>
            </div>
        );
    }
}

export default NewThought;