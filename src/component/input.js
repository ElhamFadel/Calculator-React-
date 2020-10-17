import React from "react";
export default class Input extends React.Component {
  state = {
    style: {
      position: "relative",
      top: "50px",
      left: "30%",
      "font-size": "1.7rem",
    },
  };
  render() {
    return (
      <div className="result" style={this.state.style}>
        {this.props.input}
      </div>
    );
  }
}
