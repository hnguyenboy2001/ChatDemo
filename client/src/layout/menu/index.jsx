import React from "react";
import "./index.css";
import Item from "./components/Item";
import { HiChatAlt2, HiChat, HiUserGroup } from "react-icons/hi";
import "./index.css";

export default class MenuLayout extends React.Component {
  render() {
    return (
      <div className="MenuLayout">
        {this.props.Label}

        {/*Chat with frient Item*/}
        <Item
          hrefItem={"#"}
          Icon={<HiChatAlt2 />}
          activeInit 
        ></Item>

        {/*Group Item*/}
        <Item
          hrefItem={"#"}
          Icon={<HiUserGroup />}
        ></Item>

        {/*Chat spam Item*/}
        <Item
          hrefItem={"#"}
          Icon={<HiChat/>}
        ></Item>
      </div>
    );
  }
}
MenuLayout.defaultProps = {
  Label : null
}
