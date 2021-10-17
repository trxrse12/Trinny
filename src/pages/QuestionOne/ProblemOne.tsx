import React, { Component } from "react";
import Button from "@material-ui/core/Button";

interface IProps {
}

interface IState {
  label: string;
  counter: number;
}

export class ProblemOne extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      label: "I've been clicked: ",
      counter: 0,
    };
  }
  render() {
    const handleOnClick: any = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    return (
      <div style={{ marginTop: 48 }}>
        <Button variant="contained" onClick={handleOnClick}>
          {this.state.label} {this.state.counter} times
        </Button>
      </div>
    );
  }
}
