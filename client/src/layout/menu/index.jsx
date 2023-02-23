import React from "react";
import "./index.css";
import Item from "./components/Item";
import { HiChat } from "react-icons/hi";

export default class MenuLayout extends React.Component {
  render() {
    const iconSize = "25px"
    return (
      <div className="MenuLayout">
        {this.props.Label}
        <Item
          hrefItem={"https://cvnl.app/"}
          Icon={<HiChat size={iconSize} color={"black"} />}
        ></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    );
  }
}
