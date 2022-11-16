import { Clock } from "./Clock.js";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "off"
    };
  }
  toggleClock() {
    if (this.state.toggle === 'off') {
      componentWillunmount();
    } else {
      componentWillMount();
    }
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onclick: this.toggleClock
    }, "Toggle clock"), /*#__PURE__*/React.createElement(Clock, null));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Button, null), document.getElementById("app"));