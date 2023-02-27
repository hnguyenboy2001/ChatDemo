import React from "react";
import "./index.css";
import Item from "./components/Item";
import { HiChatAlt2, HiChat, HiUserGroup } from "react-icons/hi";
import "./index.css";
import { useState, useContext } from "react";
import { HomeContext } from "../../App";

export default function MenuLayout() {
  const [selected, setSelected] = useState([true, false, false]);
  const handeLogout = useContext(HomeContext);
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
          label={"Group"}
          hrefItem={"#"}
          Icon={<HiUserGroup />}
          pathItem={"/groups"}
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

      <button
        onClick={() => {
          handeLogout(false);
        }}
      >
        Logout
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
