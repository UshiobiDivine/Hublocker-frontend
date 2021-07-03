import React, { useState } from "react";
import "../css/Banner.css";
import loc1 from "../images/loc1.jpg";
import SelectBox from "./Selectbox";
import Select from "react-select";

const options = [
  { value: "closest", label: "Closest" },
  { value: "lowest price", label: "Lowest Price" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid grey",
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected ? "grey" : "rgb(218, 218, 218)",
    // padding: 10,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 230,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function Banner(props) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(selectedOption) {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  return (
    <div>
      <div className="banner">
        <img className="img" src={loc1} alt="" />
      </div>

      <div className="banner-down">
        <h3>6 Open Lockers Available</h3>

        <div className="banner-in">
          <h3>Sort By</h3>

          <span>
            <Select
              value={selectedOption.value}
              onChange={handleChange}
              options={options}
              styles={customStyles}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
