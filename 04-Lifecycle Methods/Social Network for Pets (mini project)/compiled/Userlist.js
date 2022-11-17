export class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.onChoose(event.target.dataset.username);
  }
  render() {
    return /*#__PURE__*/React.createElement("ul", null, this.props.usernames.map(username => /*#__PURE__*/React.createElement("li", {
      key: username
    }, /*#__PURE__*/React.createElement("button", {
      "data-username": username,
      onClick: this.handleClick
    }, "@", username))));
  }
}