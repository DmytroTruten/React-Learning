const green = '#39D1B4';
const yellow = '#FFD712';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({
      color: newColor
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: this.state.color
      }
    }, /*#__PURE__*/React.createElement("h1", null, "Change my color"), /*#__PURE__*/React.createElement("button", {
      onClick: this.changeColor
    }, "Change color"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Toggle, null), document.getElementById('app'));