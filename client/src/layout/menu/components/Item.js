import React from "react";
import "./Item.css";
import clsx from "clsx";
// import { useState } from "react";

export default function Item({ hrefItem, Icon, activeInit }) {

  const NewIcon = React.cloneElement(
    Icon,
    {
      className: clsx("Icon", { ActiveIcon: activeInit }),
    },
    null
  );

  return (
    <div className={clsx("Item", { ActiveItem: activeInit })}>
      {/* hrefItem to link page */}
      <a onClick={handleItem} href={hrefItem}>
        {NewIcon}
      </a>
    </div>
  );

  function handleItem() {
  }
}

Item.defaultProps = {
  hrefItem: "#",
  Icon: function () {
    return <p>....</p>;
  },
};
