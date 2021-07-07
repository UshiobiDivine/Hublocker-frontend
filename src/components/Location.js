import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import loca from "../images/loca.jpeg";
import "../css/Location.css";

function Location(props) {
  // const [loadedLocations, setloadedLocations] = useState([]);

  // useEffect(async () => {
  //   fetch("http://localhost:8080/api/locker/Lekki", {
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // setLoadedMeetup(data);
  //       // setIsLoading(false);
  //     });
  // }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      {/* {props.lockers.map((lock) => { */}
        <div className="cont">
          <img className="imgg" src={loca} alt="" />
          <div>lock.location.locationName</div>
          <div className="rating">
            {" "}
            {/* <Rating icon="star" defaultRating={3} maxRating={5} /> */}
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={18}
              activeColor="rgb(211, 3, 3)"
              // isHalf={true}
              value={5}
            />
          </div>
          <div className="distance">5 miles away</div>
          <div>{`${Object.entries(props.lockers).map((yyy)=>{return yyy.price})}`}</div>
        </div>;
      {/* })} */}
    </div>
  );
}

export default Location;
