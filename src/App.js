import React from "react";
import Button from "./component/Button";
import Result from "./component/input";
import ButtonColor from "./component/btn_color";
// import MouseTracker from "./component/MouseTracker";

class App extends React.Component {
  state = {
    backgroundColor: "#fff",
    colors: ["#212638", "#34509E", "#8490FF", "#FFFFFF"],
    isLoggin: false,
    result: "",
    displayNumber: "",
    operator: "",
  };
  reset = () => {
    this.setState({
      displayNumber: "0",
      result: "",
      operator: "",
    });
  };

  equalBtn = (num = "=") => {
    const { displayNumber, operator, result } = this.state; //خلص اكبرنا
    let newresult = "";

    if (num != "=") {
      const num1 = Number(result);
      const num2 = Number(num);
      switch (operator) {
        case "+":
          newresult = num1 + num2;
          break;
        case "-":
          newresult = num1 - num2;
          break;
        case "*":
          newresult = num1 * num2;
          break;
        case "/":
          newresult = num1 / num2;
          break;
        case "%":
          newresult = num1 % num2;
          break;
      }
      this.setState({
        displayNumber: num,
        operator: "",
        result: newresult, //--------------------------------------------
      });
    } else {
      this.setState({
        displayNumber: this.state.result,
        operator: "",
        result: "",
      });
    }
  };

  // try {
  //   this.setState({
  //     // result: math.evaluate(this.state.result),
  //     result: eval(this.state.result),
  //   });
  // } catch (e) {
  //   this.setState({
  //     result:
  //       "error!! click on the button CE then write :) and Keep your smile please ",
  //   });
  // }

  changeSign = () => {
    this.setState({
      result: -1 * Number(this.state.result),
      displayNumber: -1 * Number(this.state.displayNumber),
    });
  };
  addNumber = (num) => {
    //()inefficient
    if (num !== ")" || num !== "(") {
      //تحديد الانبت
      if (this.state.operator !== "") {
        return this.equalBtn(num);
      } else if (this.state.result != "" && this.state.displayNumber) {
        this.setState({
          displayNumber: this.state.displayNumber + num,
          result: this.state.displayNumber + num,

          // showNow: this.state.input,
        });
        return;
      }

      this.setState({
        displayNumber: this.state.displayNumber + num,
        result: this.state.displayNumber + num,
        // showNow: this.state.input,
      });
    }
  };

  addOperator = (target) => {
    const fetchOper = target;
    this.setState({
      operator: fetchOper,
    });
  };

  //onClick Function
  onClick = (target) => {
    if (target === "=") {
      this.equalBtn(); //- return
    } else if (target === "AC") {
      this.reset();
    } else if (target === "+/-") {
      this.changeSign();
    } else if (
      target === "+" ||
      target === "-" ||
      target === "/" ||
      target === "*" ||
      target === "%"
    ) {
      this.addOperator(target);
    } else {
      this.addNumber(target);
    }
  };

  //handleBackground
  handleBackground = (color) => {
    this.setState({
      backgroundColor: color,
    });
  };

  // Screen
  screenLogIN = () => {
    return <p>Hello Elham</p>;
  };
  screenCalculator = () => {
    return (
      <div className="main">
        <div className="container">
          <Result result={this.state.displayNumber} />
          <Button
            onClick={this.onClick}
            backgroundColor={this.state.backgroundColor}
          />
        </div>

        <ButtonColor
          colors={this.state.colors}
          onClick={this.handleBackground}
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        {/* {this.state.isLoggin ? this.screenCalculator() : this.screenLogIN()} */}
        {this.screenCalculator()}
      </div>
    );
  }
}

export default App;
