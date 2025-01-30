import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]); 
  }

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
