import React from "react";
import "./Button.css";

const specialClass = (child) => {
  if (isNaN(child) && (child === "AC" || child === "+/-" || child === "%")) {
    return "labn_color";
  } else if (isNaN(child) && child != ".") {
    return "dblue";
  } else {
    return "";
  }
};

class Button extends React.Component {
  render() {
    return (
      <div
        className="group_btn"
        style={{ backgroundColor: `${this.props.backgroundColor}` }}
      >
        <div className="row">
          <button
            name="AC"
            className={`button_container ${specialClass("AC")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            AC
          </button>
          <button
            name="+/-"
            className={`button_container ${specialClass("+/-")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            */-
          </button>
          <button
            name="%"
            className={`button_container ${specialClass("%")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            %
          </button>
          <button
            name="/"
            className={`button_container ${specialClass("/")}`}
            onClick={(e) => {
              this.props.onClick(e.target.name);
            }}
          >
            /
          </button>
        </div>
        <div className="row">
          <button
            name="1"
            className={`button_container ${specialClass("1")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            1
          </button>
          <button
            name="2"
            className={`button_container ${specialClass("2")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            2
          </button>
          <button
            name="3"
            className={`button_container ${specialClass("3")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            3
          </button>
          <button
            name="+"
            className={`button_container ${specialClass("+")}`}
            onClick={(e) => {
              this.props.onClick(e.target.name);
            }}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            name="4"
            className={`button_container ${specialClass("4")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            4
          </button>
          <button
            name="5"
            className={`button_container ${specialClass("5")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            5
          </button>
          <button
            name="6"
            className={`button_container ${specialClass("6")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            6
          </button>
          <button
            name="-"
            className={`button_container ${specialClass("-")}`}
            onClick={(e) => {
              this.props.onClick(e.target.name);
            }}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            name="7"
            className={`button_container ${specialClass("7")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            7
          </button>
          <button
            name="8"
            className={`button_container ${specialClass("8")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            8
          </button>
          <button
            name="9"
            className={`button_container ${specialClass("9")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            9
          </button>
          <button
            name="*"
            className={`button_container ${specialClass("*")}`}
            onClick={(e) => {
              this.props.onClick(e.target.name);
            }}
          >
            X
          </button>
        </div>
        <div className="row">
          <button
            name="0"
            className={`button_container ${specialClass("0")}`}
            id="btn_zer0"
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            0
          </button>
          <button
            name="."
            className={`button_container ${specialClass(".")}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            .
          </button>

          <button
            name="="
            className={`button_container ${specialClass("=")}`}
            onClick={(e) => {
              this.props.onClick(e.target.name);
            }}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Button;
