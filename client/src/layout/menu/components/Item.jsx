import React from "react";
import "./Item.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Item({ activeItem, label, Icon, pathItem }) {
  const [active, setActive] = useState(activeItem);
  const NewIcon = React.cloneElement(
    Icon,
    {
      className: clsx("Icon", { ActiveIcon: active }),
    },
    null
  );
  useEffect(() => {
    setActive(activeItem);
  }, [activeItem]);
  return (
    <div className={clsx("Item", { ActiveItem: active })}>
      <Link className="Item--Link" to={pathItem}>
        {NewIcon}
        <p className="Label">{label}</p>
      </Link>
    </div>
  );
}

Item.defaultProps = {
  hrefItem: "#",
  Icon: function () {
    return <p>....</p>;
  },
};
