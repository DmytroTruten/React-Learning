import { Profile } from './Profile.js';
import { Directory } from './Directory.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(this);
  }
  handleChoose(newUsername) {
    this.setState({
      currentUsername: newUsername
    });
  }
  handleReturnToDirectoryClick() {
    this.setState({
      currentUsername: null
    });
  }
  render() {
    let body;
    if (this.state.currentUsername) {
      body = /*#__PURE__*/React.createElement(Profile, {
        username: this.state.currentUsername,
        onChoose: this.handleChoose
      });
    } else {
      body = /*#__PURE__*/React.createElement(Directory, {
        onChoose: this.handleChoose
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "App"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, "PetBook"), /*#__PURE__*/React.createElement("nav", null, this.state.currentUsername && /*#__PURE__*/React.createElement("button", {
      onClick: this.handleReturnToDirectoryClick
    }, "Return to directory"))), /*#__PURE__*/React.createElement("main", null, body));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));