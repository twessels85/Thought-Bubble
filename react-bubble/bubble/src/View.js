import React, { Component } from 'react';
import './App.css';
class BubblePic extends Component {
    render() {
        return (
            <img src="/images/bubble.png" className={this.props.def} onClick={this.OnBubbleClick}></img>  
            
        )
    }
}

class HeartPic extends Component { 
    render() { 
        return (
            <img src={"/images/heartNew.png"} className={this.props.def} onClick={this.OnBubbleClick}></img> 
        )
    }
}

class BubbleBoard extends Component {
    renderBubble(){
        var i = Math.floor((Math.random()*9) + 1); //simple rng - would be changed with added backend
        switch (i) {
            case 1:
                return (<BubblePic def="bubble small animated bounceInUp slowest" />);
            case 2: 
                return (<BubblePic def="bubble small animated bounceInUp slower" />);
            case 3:
                return (<BubblePic def="bubble small animated bounceInUp" />);
            case 4: 
                return (<BubblePic def="bubble animated bounceInUp slowest" />);
            case 5: 
                return(<BubblePic def="bubble animated bounceInUp slower" />);
            case 6:
                return(<BubblePic def="bubble animated bounceInUp" />);
            case 7:
                return(<HeartPic def="bubble big animated bounceInUp slowest" />);
            case 8: 
                return(<HeartPic def="bubble big animated bounceInUp slower" />);
            default:
                return (<BubblePic def="bubble big animated bounceInUp" />);
        }

        return(
            <BubblePic def="bubble small animated bounceInUp slowest"/>
        ); 
    }

    render() {
        return (
            <div> 
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
                {this.renderBubble()}
            </div>
        );
    }
}

class QuoteBubble extends Component {
    renderQuote(){ 
        var i = Math.floor((Math.random()*7) + 1); //simple rng - would be changed with added backend
        switch (i) {
            case 1:
                return (
                    <div className="centered quote"  id="quote">
                        An office is for not dying. An office is a place to live life to the fullest, to the max, to... An office is a place where dreams come true.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                );
            case 2: 
                return (
                    <div className="centered quote"  id="quote">
                        Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                )
            case 3: 
                return (
                    <div className="centered quote"  id="quote">
                        Make friends first, make sales second, make love third. In no particular order.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                )
            case 4: 
                return (
                    <div className="centered quote"  id="quote">
                        Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                )
            case 5: 
                return (
                    <div className="centered quote"  id="quote">
                        I am Beyonce, always.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                )
            case 6: 
                return (
                    <div className="centered quote"  id="quote">
                        I'm not superstitious but I am a little stitious.
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                )
            default:
                return (
                    <div className="centered quote"  id="quote">
                        You miss 100% of the shots you don't take -Wayne Gretsky
                        <p className="quoted">
                            -Michael Scott
                        </p>
                     </div>
                );
        }
    }
    render() {
        return (
        <div id="expandBubble" className="bubbleOn animated pulse slow" onClick={this.OnQuoteClick}>
           <img src={"/images/bubble.png"} />
                {this.renderQuote()} 
        </div>
        );
    }
}

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