import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <div>
        {/* <img src="" alt="here">Logo</img> */}
        <div className="nav-logo">
          <div>HUBLOCKER</div>
          <div>OCEANGRSMITH</div>
        </div>
      </div>

      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item"></li>

        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">Find a Locker</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">Size Guide</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">Locations</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">Help Center</div>
          </Link>
        </li>

        <li className="nav-item"></li>

        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="acc">My Account</div>
          </Link>
        </li>
        <li className="nav-item">
          <div className="acc">080-188-0872</div>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onclick={closeMenu}>
            <div className="pay">PAY YOUR BILL</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
