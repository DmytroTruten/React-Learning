class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.date.toLocaleTimeString());
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById("app"));