import React from 'react'
import { Link } from 'react-router-dom'
import TomatoLogo from './white-tomato-icon.png'
import './Nav.css'

const Nav = ({ updateMovieSelection }) => {
  return (
    <header>
      <Link to={'/'} className="title" onClick={() => updateMovieSelection(false)}>
            <img alt="tomato logo" className="tomato-logo" src={TomatoLogo}/>
            Rancid Tomatillos
      </Link>
    </header>)
}

export default Nav
