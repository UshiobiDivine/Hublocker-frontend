import React, { useState } from "react";
import Select from "react-select";
import "../css/CustomSelect.css";

const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    appearance: "none",
    borderRadius: "0",
    

  }),
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px solid grey",
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected ? "grey" : "rgb(218, 218, 218)",
    // padding: 10,
    width: 300,
    fontSize: 13,
  }),
};

export default function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(selectedOption) {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  return (
    <div className="select">
      {/* <select class="standard-select">
        <option class="option" value="Option 1">
          Closest
        </option>
        <option class="option" value="Option 2">
          Lowest Price
        </option>
      </select> */}
      <Select options={actions} onChange={handleChange} styles={customStyles} />
    </div>
  );
}
