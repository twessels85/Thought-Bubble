import * as React from 'react';
import {IBubble} from './IBubble';

interface IBubbleProps extends IBubble{
    name:string;

    onDeleted: (name: string) => void;
}

class BubbleComp extends React.Component<IBubbleProps> {
    public onDelete = () =>{
        this.props.onDeleted(this.props.name);
    }
    public render() {
        return (
        <div >
            <div>{this.props.name}</div>
            <img src = "/bubble.png" />
            <button onClick={this.onDelete}>Delete</button>
        </div>
        );
    
    }
}

export default BubbleComp;
