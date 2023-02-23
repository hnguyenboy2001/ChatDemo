import React from "react";
import "./Item.css";
export default function Item({ hrefItem, Icon }) {
  return (
    <div className="Item">
      {/* hrefItem to link page */}
      <a href={hrefItem}>{Icon}</a>
    </div>
  );
}

Item.defaultProps = {
  hrefItem: "https://www.geeksforgeeks.org/reactjs-defaultprops/",
  Icon: function () {
    return <p>....</p>;
  },
};
