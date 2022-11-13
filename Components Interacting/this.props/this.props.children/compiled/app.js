import { List } from './list.js';
class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(List, {
      type: "Living Musician"
    }, /*#__PURE__*/React.createElement("li", null, "Sachiko M"), /*#__PURE__*/React.createElement("li", null, "Harvey Sid Fisher")), /*#__PURE__*/React.createElement(List, {
      type: "Living Cat Musician"
    }, /*#__PURE__*/React.createElement("li", null, "Nora the Piano Cat")));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));