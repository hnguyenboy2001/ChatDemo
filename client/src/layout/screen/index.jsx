import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ChatsScreen from "./chats";

export default function ScreenLayout() {
  return (
    <div className="ScreenLayout">
      <Routes>
        {/* This is screen Chats */}
        <Route
          path="/chats"
          element={<ChatsScreen label={"Chats"}></ChatsScreen>}
        />

        {/* This is screen People */}
        <Route path="/groups" element={<div>Groups</div>} />

        {/* This is screen Request */}
        <Route path="/request" element={<div>Request</div>} />
      </Routes>
    </div>
  );
}
