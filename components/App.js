const React = require('react');
const actions = require('../actions/index')
const counterStore = require('../stores/counterStore');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((counter) => {
      this.setState({counter})
    })
    // Your implementation here.
  }
  componentWillUnmount () {
    this.removeListener();
    //-- remove the event listener
    // Your implementation here.
  }

  handleIncrement(event) {
    event.preventDefault();
    actions.increment();
  }

  handleDecrement(event) {
    event.preventDefault();
    actions.decrement();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
