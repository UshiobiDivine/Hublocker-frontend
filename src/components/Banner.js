import React, { useState, useContext, useEffect } from "react";
import "../css/Banner.css";
import loc1 from "../images/loc1.jpg";
import CustomSelect from "./CustomSelect";
import LockerContext from "../store/location-context";
import Location from "./Location";
import Table from "./Table";
import classes from "../css/LocAndTable.module.css";
import LocationApis from "../apis/LocationApi";

function Banner() {
  const [loadedLocations, setloadedLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {

    const data = await LocationApis.getAllLockersByLocation(searchTerm);
    console.log(data);
    setloadedLocations(data)

  }, [searchTerm]);

  // console.log(`IN THE BAAAANNNNNEEEERR LOADED-LOCATION IS ${loadedLocations}`)

  let vals =  [];

  loadedLocations.forEach(element => {

    if (element.location.locationName.startsWith(searchTerm)) {
      console.log(element.location.locationName)
      vals=element.location;
    } else {
      vals = []
      // console.log(element.location);
    }
    
  });


  return (
    <>
      <div className="container-banner">
        <div className="banner">
          <div className="find-a-locker">Find a Locker</div>
          <div className="see">
            <input
              className="input"
              type="search"
              placeholder="Enter City or State"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />

            <div className="find">
              <div className="find22">
                <div className="findloc">Find Locker</div>
                <div className="rent">One Naira For First Rent</div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-down">
          <h3>6 Open Lockers Available</h3>
          <div className="banner-in">
            <h3>Sort By</h3>

            <span>
              <CustomSelect />
            </span>
          </div>
        </div>
      </div>
{}

      <div className={classes.container}>
        <div className={classes.item1}>


          <Location lockers={vals}/>


        </div>
        <div className={classes.item2}>
          <div className={classes.item22}>
            <div>
              <select style={{ width: "280px" }} class={classes.standardSelect}>
                <option class={classes.option} value="Option 1">
                  Small
                </option>
                <option value="" disabled selected hidden>
                  Featured
                </option>
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
            {/* <div>{datum}</div> */}
          </div>
          <Table lockers={loadedLocations}/>
        </div>
      </div>
      {/* })} */}
    </>
  );
}

export default Banner;
