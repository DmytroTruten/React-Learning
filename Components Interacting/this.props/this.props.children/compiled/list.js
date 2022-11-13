export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleText += 's';
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, titleText), /*#__PURE__*/React.createElement("ul", null, this.props.children));
  }
}