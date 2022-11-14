class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Best App"
    };
  }
  render() {
    return /*#__PURE__*/React.createElement("h1", null, this.state.title);
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));