import { Friend } from "./Friend.js";
export const NewFriend = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Friend, null), /*#__PURE__*/React.createElement("img", {
    src: props.src
  }));
};
ReactDOM.render( /*#__PURE__*/React.createElement(NewFriend, {
  src: "https://content.codecademy.com/courses/React/react_photo-squid.jpg"
}), document.getElementById("app"));