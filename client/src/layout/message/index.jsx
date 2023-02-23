import React from "react";
import "./index.css";
export default class MessageLayout extends React.Component {
  render() {
    return <div className="MessageLayout">{this.props.Label}</div>;
  }
  
}
