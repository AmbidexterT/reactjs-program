import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue || 0,
        };
    }

    decrement = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
    };

    increment = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    };

    render() {
        return React.createElement('div', null,
            React.createElement('h2', null, 'Counter'),
            React.createElement('p', null, `Value: ${this.state.value}`),
            React.createElement('button', { onClick: this.decrement }, 'Decrement'),
            React.createElement('button', { onClick: this.increment }, 'Increment')
        );
    }
}

export default Counter;
