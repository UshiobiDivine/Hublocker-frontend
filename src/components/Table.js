import React, { createContext, useState, useEffect } from "react";
import classes from "../css/Table.module.css";


const LockerContext = React.createContext();


export default function MyTable() {
  const [loadedLocations, setloadedlocatess] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    fetch(`http://localhost:8080/api/locker/${searchTerm}`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setloadedlocatess(data);
        console.log(data);
        console.log(data.locates);
        
        setloadedlocatess(data);
      });
  }, [searchTerm]);

  return (
    <div className={classes.containerSup}>
      <input
        type="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {loadedLocations.map((locates, key) => (
        <div className={classes.container} key={locates.id}>
          <div className={classes.item}>{locates.size}</div>
          <div className={classes.item}>{locates.price}</div>
          <div className={classes.item}>{locates.firstRentPay}</div>
          <div className={classes.item}>
            {locates.quantityAvailable} Available
          </div>
          <div className={classes.rent}>{locates.location.locationName}</div>
        </div>
      ))}
    </div>
  );
}

