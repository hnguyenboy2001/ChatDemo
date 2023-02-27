import React from "react";
import "./index.css";
import Card from "./components/Card";
import { useState } from "react";

export default function ChatsScreen() {
  const [selected, setSelected] = useState([true, false]);
  return (
    <div className="ChatsScreen">
      <button className="ChatsScreen--Item" onClick={handelItemClick(0)}>
        <Card
          activeItem={selected[0]}
          label={"User 1"}
          hrefItem={"#"}
          pathItem={"/chats"}
          avatarSrc={
            "https://genk.mediacdn.vn/2020/1/7/photo-1-1578368300431366420427.jpg"
          }
        ></Card>
      </button>

      <button className="ChatsScreen--Item" onClick={handelItemClick(1)}>
        <Card
          activeItem={selected[1]}
          label={"User 2"}
          hrefItem={"#"}
          pathItem={"/chats"}
        ></Card>
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
