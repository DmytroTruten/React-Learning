class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", null, this.props.text);
  }
}
Button.defaultProps = {
  text: "I am a button"
};
ReactDOM.render( /*#__PURE__*/React.createElement(Button, null), document.getElementById('app'));