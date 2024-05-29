import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  function handleClick() {
    setIsAdded(!isAdded);
  }

  const buttonText = isAdded ? "Remove from Cart" : "Add to Cart";
  const liClassName = isAdded ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
