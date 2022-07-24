import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state hook for the dark modewhose inital state is true
  const [darkMode, setDarkMode] = useState()
  // ternary operation to check if darkMode is true and change the class name to that
  const appClass = darkMode ? "App dark" : "App light"
  
  // toggles dark mode between true and false
  const handleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  return (
    // class name sets the CSS styles
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{darkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
