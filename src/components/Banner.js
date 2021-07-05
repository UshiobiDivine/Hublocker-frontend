import React, { useState } from "react";
import "../css/Banner.css";
import loc1 from "../images/loc1.jpg";
import CustomSelect from "./CustomSelect";

function Banner() {
  return (
    <div className="container-banner">
      <div className="banner">
        <div className="find-a-locker">Find a Locker</div>
        <div className="see">
          <input
            className="input"
            type="search"
            placeholder="Enter City or State"
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
  );
}

export default Banner;
