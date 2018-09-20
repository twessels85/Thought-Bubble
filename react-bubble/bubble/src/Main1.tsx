import * as React from 'react';
import BubbleComponent from './BubbleComp';
import { IBubble } from './IBubble';
 
interface IAppState {
  bubbles: IBubble[]
}

class App extends React.Component<{}, IAppState>
{
  constructor(props: any) {
    super(props);
    this.state = {
      bubbles:[
        {name:"bub"},
        {name:"ble"}
      ]
    }
  }

  public onBubbleDelete = (name:string) =>
  {
    const bubbles = this.state.bubbles.filter(x => x.name !== name);
    this.setState({bubbles});
  }

  public render() {
    return (
      <div className="App">
        {this.state.bubbles.map(
          x => <BubbleComponent key={x.name}
          name={x.name}
          def = {x.def}
          onDeleted = {this.onBubbleDelete}/>
        )}
      </div>
    );
  }
}

export default App;
