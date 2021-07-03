import React from "react";
import loca from "../images/loca.jpeg";
import '../css/Location.css'

function Location() {
  return (
    <div>
      <img className="imgg" src={loca} alt="" />
      <div>22A Adeola Odeku Street, VI, Lagos</div>
      <div className="rating">ratinggg</div>
      <div className="distance">5 miles away</div>
    </div>
  );
}

export default Location;
