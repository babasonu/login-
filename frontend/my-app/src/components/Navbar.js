import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h1> </h1>
      <ul className=" nav-ul ">
        <li>
          <Link to="/"> products </Link>
        </li>
        <li>
          <Link to="/add"> add to products </Link>
        </li>

        <li>
          <Link to="/update"> update product </Link>
        </li>
        <li>
          <Link to="/logout"> Logout </Link>
        </li>
        <li>
          <Link to="/profile"> profile </Link>
        </li>
        <li>
          <Link to="/register"> login </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
