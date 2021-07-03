import React from "react";
import "../css/Search.css";

function Search() {
  return (
    <div className="con">
      <div className="container">
        <div className="item1">
          <input type="search" placeholder="Enter City or State" />
        </div>
        <div className="item2">Find Locker</div>
      </div>
    </div>
  );
}

export default Search;
