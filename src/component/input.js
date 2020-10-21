import React from "react";
class Result extends React.Component {
  render() {
    return <div className="reseult">{this.props.result || 0}</div>;
  }
}
export default Result;
