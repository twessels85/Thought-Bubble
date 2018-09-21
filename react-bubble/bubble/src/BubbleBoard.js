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

export default BubbleBoard;