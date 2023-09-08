import React, { Component } from 'react';

interface StateCounter {
  value: number;
}

interface CounterProps {
  initialValue?: number;
}

class Counter extends Component<CounterProps, StateCounter> {
  constructor (props: CounterProps) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
  }

  decrement = () => {
    this.setState((prevState: StateCounter) => ({ value: prevState.value - 1 }));
  };

  increment = () => {
    this.setState((prevState: StateCounter) => ({ value: prevState.value + 1 }));
  };

  render () {
    return React.createElement('div', null,
      React.createElement('h2', null, 'Counter'),
      React.createElement('p', null, `Value: ${this.state.value}`),
      React.createElement('button', { onClick: this.decrement }, 'Decrement'),
      React.createElement('button', { onClick: this.increment }, 'Increment')
    );
  }
}

export default Counter;
