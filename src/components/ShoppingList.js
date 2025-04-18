import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  // useState - used on category because that is what changes.

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleChange(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }
  // use filter functionality with tenary operation to find the item selected. 
  // return all if selcted all otherwise giv selected category

  const showItem = items.filter((item) => {
    return (selectedCategory === "All" ? true : item.category ===selectedCategory);
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      {/* displayed the selected category using map function */}
      <ul className="Items">
        {showItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
