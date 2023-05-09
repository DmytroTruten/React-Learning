import { Button } from "./button.js";
class Talker extends React.Component {
  handleClick() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }
  render() {
    return /*#__PURE__*/React.createElement(Button, {
      onClick: this.handleClick
    });
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Talker, null), document.getElementById("app"));