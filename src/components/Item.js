import React, { useState } from "react";

function Item({ name, category }) {
  const [itemInCart, setItemInCart] = useState()
  const itemClass = itemInCart ? 'in-cart' : ''

  const handleAdd = () => {
    itemInCart ? setItemInCart(false) : setItemInCart(true)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{itemInCart ? 'Remove' : 'Add'} to Cart</button>
    </li>
  );
}

export default Item;
