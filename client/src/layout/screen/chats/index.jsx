import React from "react";
import "./index.css";
import Card from "./components/Card";

import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../App";

export default function ChatsScreen({ label }) {
  const valueProvider = useContext(AppContext);
  const dataUser = valueProvider.dataUser;
  const friends = dataUser.friendsList;
  const socket = valueProvider.socket;

  const [selected, setSelected] = useState(
    [true].concat(Array(friends.length - 1).fill(false))
  );

  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    socket.emit("getOnlineFriend-client", friends);
    socket.on("getOnlineFriend-server", (onlineFriends) => {
      setOnlineFriends(onlineFriends);
    });
    console.log("repet");
  }, [socket, friends]);

  return (
    <div className="ChatsScreen">
      <div className="Header">
        <h1 className="Header--Label">{label}</h1>
      </div>
      <div className="Container">
        {friends.map((friendName, index) => {
          return (
            <div key={index} className="ChatsScreen--Item">
              <button
                className="ChatsScreen--Buton"
                onClick={handelItemClick(index)}
              >
                <Card
                  activeItem={selected[index]}
                  label={friendName}
                  hrefItem={"#"}
                  pathItem={"/chats"}
                  avatarSrc={
                    "https://genk.mediacdn.vn/2020/1/7/photo-1-1578368300431366420427.jpg"
                  }
                  activeOnline={onlineFriends.includes(friendName)}
                ></Card>
              </button>
            </div>
          );
        })}
      </div>
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
