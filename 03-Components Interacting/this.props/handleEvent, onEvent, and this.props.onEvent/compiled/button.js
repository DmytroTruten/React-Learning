export class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.props.onClick
    }, "Click me!");
  }
}