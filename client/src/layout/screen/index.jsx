import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export default function ScreenLayout() {
  return (
    <div className="ScreenLayout">
      <Routes>
        {/* This is screen Chats */}
        <Route path="/chats" element={<div>Chats</div>} />

        {/* This is screen People */}
        <Route path="/people" element={<div>People</div>} />

        {/* This is screen Request */}
        <Route path="/request" element={<div>Request</div>} />
      </Routes>
    </div>
  );
}
