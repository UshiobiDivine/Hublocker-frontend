import React, { createContext, useState, useEffect } from "react";
import classes from "../css/Table.module.css";
import { Link } from "react-router-dom";

export default function MyTable(props) {
  const vals = Object.values(props.lockers);

  return (
    <div className={classes.containerSup}>
      {vals.map((locates, key) => (
        <div className={classes.container} key={locates.id}>
          <div className={classes.item}>{locates.size}</div>
          <div className={classes.item}>{locates.price}</div>
          <div className={classes.item}>{locates.firstRentPay}</div>
          <div className={classes.item}>
            {locates.quantityAvailable} Available
          </div>

          <Link to="/rent">
            <div className={classes.rent}>Rent Now</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
