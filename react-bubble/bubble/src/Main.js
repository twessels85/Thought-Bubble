import React, { Component } from 'react';
import bubble from './images/bubble.png';
import heart from './images/heartNew.png';
import './App.css';

class BubblePic extends Component {
    render() {
        return (
            <img src={bubble} className={this.props.def} onClick={this.OnBubbleClick}></img>  //Add quote, class for size, etc
            
        )
    }
}

class HeartPic extends Component { 
    render() { 
        return (
            <img src={heart} className={this.props.def} onClick={this.OnBubbleClick}></img>  //Add quote, class for size, etc

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
        var i = Math.floor((Math.random()*3) + 1); //simple rng - would be changed with added backend
        switch (i) {
            case 1:
                return (
                    <div className="centered quote"  id="quote">
                        An office is for not dying. An office is a place to live life to the fullest, to the max, to... An office is a place where dreams come true.
                        <p>
                            -Michael Scott
                        </p>
                     </div>
                );
            case 2: 
                return (
                    <div className="centered quote"  id="quote">
                        Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.
                        <p>
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
           <img src={bubble} />
                {this.renderQuote()} 
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
                  <a href="tb-main.html"> New Thought</a>
                  <a href="tb-main.html"> Profile</a>
                  <a href="tb-login.html"> Sign out</a>
              </div>
          </div>
        </div>
    
      );
    }
  }

class Main extends Component{
    render(){ 
        return (
            <div> 
                <Menu />

                <BubbleBoard /> 
                <QuoteBubble />
            </div>
        );
    }
}

// private onBubbleClick = () => {
//     return (
//         {this.setState(showBoard:false)}
//     ); 
// }

// private onQuoteClick = () =>{ 
//     return ();
// }

export default Main; 