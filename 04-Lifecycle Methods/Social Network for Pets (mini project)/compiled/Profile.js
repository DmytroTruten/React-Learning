import { fetchUserData, cancelFetch } from "./dataFetcher.js";
import { Userlist } from "./Userlist.js";
export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
  }
  loadUserData() {
    this.setState({
      userData: null
    });
    this.fetchID = fetchUserData(this.props.username, userData => {
      this.setState({
        userData
      });
    });
  }
  componentDidMount() {
    this.loadUserData();
  }
  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
  render() {
    const isLoading = this.state.userData === null;
    let name;
    let bio;
    let friends;
    let className = "Profile";
    if (isLoading) {
      className += " loading";
      name = "Loading...";
      bio = "Loading...";
      friends = [];
    } else {
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-picture"
    }, !isLoading && /*#__PURE__*/React.createElement("img", {
      src: this.state.userData.profilePictureUrl,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "profile-body"
    }, /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("h3", null, "@", this.props.username), /*#__PURE__*/React.createElement("p", null, bio), /*#__PURE__*/React.createElement("h3", null, "My friends"), /*#__PURE__*/React.createElement(Userlist, {
      usernames: friends,
      onChoose: this.props.onChoose
    })));
  }
}