import React, { useState } from "react";
// import "./Dropdown.css"; // Import the CSS file for styling

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const items = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
    { label: "Item 4", value: "item4" },
    { label: "Item 5", value: "item5" }
  ];

  const handleSelectionChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <h2>Dropdown Menu</h2>
      <select
        className="dropdown-select"
        value={selectedItem}
        onChange={handleSelectionChange}
      >
        <option value="">Select an item</option>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
