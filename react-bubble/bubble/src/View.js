import React, { Component } from 'react';
import './App.css';
import BubbleBoard from './BubbleBoard';
import QuoteBubble from './QuoteBubble';

class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <div onClick={this.handleClick}>
          {this.state.isToggleOn ? <BubbleBoard /> : <QuoteBubble />}
        </div>
      );
    }
  }

  export default View; 