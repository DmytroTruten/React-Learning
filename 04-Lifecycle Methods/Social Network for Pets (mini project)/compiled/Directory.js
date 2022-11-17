import { Userlist } from './Userlist.js';
export function Directory(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Directory"
  }, /*#__PURE__*/React.createElement("h2", null, "User directory"), /*#__PURE__*/React.createElement(Userlist, {
    usernames: ['dog', 'cat', 'komodo'],
    onChoose: props.onChoose
  }));
}