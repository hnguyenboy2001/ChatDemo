import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Card({
  activeItem,
  label,
  avatarSrc,
  pathItem,
  activeOnline,
}) {
  const [active, setActive] = useState(activeItem);
  useEffect(() => {
    setActive(activeItem);
  }, [activeItem]);
  return (
    <div className={clsx("Card", { ActiveItem: active })}>
      <Link className="Card--Link" to={pathItem}>
        <div className="Card--Avatar">
          <img
            className="Avatar--Img"
            src={avatarSrc}
            alt={`${label} avatar.png`}
          />
        </div>
        <div className={clsx("Card--Signal", { ActiveSignal: activeOnline })}>
          <div className="Signal__active"></div>
        </div>
        <div className="Card--Info">
          <p id="Card--Label">{label}</p>
        </div>
      </Link>
    </div>
  );
}
