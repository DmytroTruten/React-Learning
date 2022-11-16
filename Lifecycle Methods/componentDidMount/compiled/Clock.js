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
  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, oneSecond);
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('app'));