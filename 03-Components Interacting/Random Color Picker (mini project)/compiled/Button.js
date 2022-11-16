export class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.props.onClick,
      className: this.props.light ? 'light-button' : 'dark-button'
    }, "Refresh");
  }
}