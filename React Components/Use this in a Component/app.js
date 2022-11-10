
class MyName extends React.Component {
  get name() {
    return "Dimchek";
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));