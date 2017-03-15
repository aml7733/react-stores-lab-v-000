const Store = require('./Store');

class CounterStore extends Store {
  constructor() {
    super(0);
  }

  increment() {
    const newState = this.getState() + 1
    this.setState(newState);
  }

  decrement() {
    const newState = this.getState() - 1
    this.setState(newState);
  }
  // Your implementation here.
  // Hint: extend the Store class!
}

module.exports = new CounterStore();
