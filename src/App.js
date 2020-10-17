import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./component/Button";
import Input from "./component/input";
import "./App.css";
import * as Maths from "mathjs";
class App extends Component {
  state = {
    input: "",
  };
  addValueInput = (inpt) => {
    this.setState({
      input: this.state.input + inpt,
    });
  };
  outResult = () => {
    this.setState({
      input: Maths.evaluate(this.state.input),
    });
  };
  clearResult = () => {
    this.setState({ input: 0 });
  };
  hadelSign = () => {
    const nIput = -1 * Number(this.state.input);
    this.setState({
      input: nIput,
    });
  };

  render() {
    return (
      <div className="body">
        <div className="container">
          <Input input={this.state.input} />
          <div className="group-btn">
            <div className="row">
              <Button onClick={() => this.clearResult()}>AC</Button>
              <Button onClick={this.hadelSign} value={this.state.input}>
                +/-
              </Button>
              <Button onClick={this.addValueInput}>%</Button>
              <Button onClick={this.addValueInput}>/</Button>
            </div>
            <div className="row">
              <Button onClick={this.addValueInput}>7</Button>
              <Button onClick={this.addValueInput}>8</Button>
              <Button onClick={this.addValueInput}>9</Button>
              <Button onClick={this.addValueInput}>x</Button>
            </div>
            <div className="row">
              <Button onClick={this.addValueInput}>4</Button>
              <Button onClick={this.addValueInput}>5</Button>
              <Button onClick={this.addValueInput}>6</Button>
              <Button onClick={this.addValueInput}>-</Button>
            </div>
            <div className="row">
              <Button onClick={this.addValueInput}>1</Button>
              <Button onClick={this.addValueInput}>2</Button>
              <Button onClick={this.addValueInput}>3</Button>
              <Button onClick={this.addValueInput}>+</Button>
            </div>
            <div className="row">
              <Button onClick={this.addValueInput}>0</Button>
              <Button onClick={this.addValueInput}>.</Button>
              <Button onClick={() => this.outResult()}>=</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
