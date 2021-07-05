import ReactStars from "react-rating-stars-component";
import React from "react";
import loca from "../images/loca.jpeg";
import "../css/Location.css";
import { Rating } from "semantic-ui-react";

function Location() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <img className="imgg" src={loca} alt="" />
      <div>22A Adeola Odeku Street, VI, Lagos</div>
      <div className="rating">
        {" "}
        {/* <Rating icon="star" defaultRating={3} maxRating={5} /> */}
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="rgb(211, 3, 3)"
          // isHalf={true}
          value={5}
        />
      </div>
      <div className="distance">5 miles away</div>
    </div>
  );
}

export default Location;
