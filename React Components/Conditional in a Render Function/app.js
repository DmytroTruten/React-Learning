
const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    if(fiftyFifty) {
      return (<h1>Tonight I'm going out WOOO</h1>)
    } else {
      return (<h1>Tonight I'm going to bed WOOO</h1>)
    }
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'))
