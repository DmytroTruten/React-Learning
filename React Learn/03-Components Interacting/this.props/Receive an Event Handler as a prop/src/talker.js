import { Button } from "./button.js";

class Talker extends React.Component {
  talk() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(<Talker />, document.getElementById("app"));
