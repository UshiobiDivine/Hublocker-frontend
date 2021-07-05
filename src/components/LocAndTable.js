import React, { useState } from "react";
import classes from "../css/LocAndTable.module.css";
import Location from "./Location";
import Table from "./Table";
import Select from "react-select";
// import classes from "../css/CustomSelectTwo.module.css";


function LocAndTable() {

  return (
    <div className={classes.container}>
      <div className={classes.item1}>
        <Location />
      </div>
      <div className={classes.item2}>
        <div className={classes.item22}>
          <div>
            <select style={{ width: "280px" }} class= {classes.standardSelect}>
              <option class={classes.option} value="Option 1">
                Small
              </option>
              <option value="" disabled selected hidden>Featured</option>
              <option class={classes.option} value="Option 2">
                Medium
              </option>
              <option class={classes.option} value="Option 2">
                Large
              </option>
            </select>
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
