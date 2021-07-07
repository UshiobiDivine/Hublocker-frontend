import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import loca from "../images/loca.jpeg";
import "../css/Location.css";

function Location(props) {
  const [rate, setRate] = useState(0);

  var ratess = parseInt(props.lockers.rating);
  console.log(rate);

  useEffect(() => {
    setRate(ratess);
  }, [ratess]);

  const ratingChanged = (newrate) => {
    setRate(newrate);
    console.log(newrate);
  };

  const lockerIsEmpty = (props.lockers.length===0) ? true : false;

  console.log(lockerIsEmpty, props.lockers)

  return (
    <div>
      <div className="cont">
        <img className="imgg" src={ lockerIsEmpty ? loca : props.lockers.imageUrl} alt="" />
        <div>{props.lockers.locationName}</div>
        <div className="rating">
          {lockerIsEmpty ? <div>Available Lockers in all Locations</div> : <ReactStars
            count={5}
            // onChange={() => ratingChanged(rate)}
            size={18}
            activeColor="rgb(211, 3, 3)"
            value={5}
          />}
          
        </div>
        <div className="distance">{ lockerIsEmpty ?"": `${props.lockers.distance} miles away` }</div>
      </div>
    </div>
  );
}

export default Location;
