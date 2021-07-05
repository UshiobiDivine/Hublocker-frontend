import React, { useState } from "react";
import "../css/CustomSelect.css";

export default function CustomSelect() {
  return (
    <select class="standard-select">
      <option class="option" value="Option 1">
        Closest
      </option>
      <option class="option" value="Option 2">
        Lowest Price
      </option>
    </select>
  );
}
