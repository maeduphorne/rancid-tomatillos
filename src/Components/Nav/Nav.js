import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({updateMovieSelection}) => {

  return (
    <header>
      <Link to={"/"} className="title" onClick={() => updateMovieSelection(false)}>
      Rancid Tomatillos
      </Link>
    </header>)

}

export default Nav;
