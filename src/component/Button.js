import React from "react";
import "./Button.css";
const specialClass = (child) => {
  if (isNaN(child) && (child === "AC" || child === "+/-" || child === "%")) {
    return "labn_color";
  } else if (isNaN(child) && child != ".") {
    return "dblue";
  } else {
    return null;
  }
};

class Button extends React.Component {
  handelSendValue = () => {
    if (this.props.children === "x") {
      //   alert("J,kmkf");
      return this.props.onClick("*");
    }

    return this.props.onClick(this.props.children);
  };
  render() {
    return (
      <button
        className={`button_container ${specialClass(this.props.children)}`}
        onClick={() => this.handelSendValue()}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
