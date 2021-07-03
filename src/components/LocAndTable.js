import React, { useState } from "react";
import classes from "../css/LocAndTable.module.css";
import Location from "./Location";
import Table from "./Table";
import Select from "react-select";

const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px solid grey",
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected ? "grey" : "rgb(218, 218, 218)",
    // padding: 10,
    width: 300,
    fontSize: 13,
    borderColor: null,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};

function LocAndTable() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(selectedOption) {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  return (
    <div className={classes.container}>
      <div className={classes.item1}>
        <Location />
      </div>
      <div className={classes.item2}>
        <div className={classes.item22}>
          <div className={classes.select}>
            <Select
              value={selectedOption.value}
              onChange={handleChange}
              options={options}
              styles={customStyles}
            />
          </div>
          <div className={classes.atag}>
            <a href="#">View the guide size</a>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default LocAndTable;
