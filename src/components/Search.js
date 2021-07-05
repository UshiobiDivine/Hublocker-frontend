import _ from "lodash";
import "../css/Search.css";
import React from "react";
import { Segment, Input, Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const getOptions = (number, prefix = "Choice ") =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }));

const SearchBar = () => (
  
  <Dropdown
    className="Dropdown"
    placeholder="State"
    search
    selection
    options={options}
    openOnFocus={false}
  />
);

export default SearchBar;
