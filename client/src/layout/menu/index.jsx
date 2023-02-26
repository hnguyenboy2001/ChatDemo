import React from "react";
import "./index.css";
import Item from "./components/Item";
import { HiChatAlt2, HiChat, HiUserGroup } from "react-icons/hi";
import "./index.css";
import { useState } from "react";

export default function MenuLayout() {
  const [selected, setSelected] = useState([true, false, false]);
  return (
    <div className="MenuLayout">
      {/*Chats Item*/}
      <button className="Menu--Item" onClick={handelItemClick(0)}>
        <Item
          activeItem={selected[0]}
          label={"Chats"}
          hrefItem={"#"}
          Icon={<HiChatAlt2 />}
          pathItem={"/chats"}
        ></Item>
      </button>

      {/*People Item*/}
      <button className="Menu--Item" onClick={handelItemClick(1)}>
        <Item
          activeItem={selected[1]}
          label={"People"}
          hrefItem={"#"}
          Icon={<HiUserGroup />}
          pathItem={"/people"}
        ></Item>
      </button>

      {/*Request Item*/}
      <button className="Menu--Item" onClick={handelItemClick(2)}>
        <Item
          activeItem={selected[2]}
          label={"Request"}
          hrefItem={"#"}
          Icon={<HiChat />}
          pathItem={"/request"}
        ></Item>
      </button>
    </div>
  );
  function handelItemClick(index) {
    return () => {
      // const newSelected = selected.map((_, i) => i === index);
      // setSelected(newSelected);
      setSelected((prevSelected) => {
        return prevSelected.map((value, i) => i === index);
      });
    };
  }
}

MenuLayout.defaultProps = {
  Label: null,
};
