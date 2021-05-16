import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Counter extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    return (
      <ButtonGroup size="small">
        <Button onClick={this.handleDecrement}>-</Button>
        <Button>{this.state.counter}</Button>
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default Counter;
