import { Clock } from "./Clock.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: "off" };
  }
  toggleClock() {
    if(this.state.toggle === 'off') {
      
    } else {
      
    }
  }
  render() {
    return (
      <div>
        <button onclick={this.toggleClock}>Toggle clock</button>
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById("app"));
