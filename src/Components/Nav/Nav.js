import React, { useState } from 'react';
import '../main.css';
import logo from '../../img/seahagcafe.png';

export default function Nav() {

    const [isActive, setActive] = useState("false");

    const toggleMenuSelector = () => {
        setActive(!isActive);
    }

    return (
        <div className="header">
        <label htmlFor="navToggle" className={isActive ? "navToggleLabel" : "navToggleLabel change"} onClick={toggleMenuSelector}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </label>
      <a className="logoAnchor" href="/">
        <img src={logo} alt="Sea Hag Cafe Logo" href="/" className="logo" />
      </a>
      <input type="checkbox" id="navToggle" className="navToggle" />
      <nav>
        <ul>
          <li><a href="/blog" onClick={toggleMenuSelector}>Blog</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
    </div>
    )
};
