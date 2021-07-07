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

  return (
    <div>
      <div className="cont">
        <img className="imgg" src={props.lockers.imageUrl} alt="" />
        <div>{props.lockers.locationName}</div>
        <div className="rating">
          {" "}
          {/* <Rating icon="star" defaultRating={3} maxRating={5} /> */}
          <ReactStars
            count={5}
            onChange={() => ratingChanged(rate)}
            size={18}
            activeColor="rgb(211, 3, 3)"
            // isHalf={true}
            value={5}
          />
        </div>
        <div className="distance">{props.lockers.distance} miles away</div>
      </div>
    </div>
  );
}

export default Location;
