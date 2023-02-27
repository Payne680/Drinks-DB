/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fa fa-bars" id="btn" />
        <i className="fa fa-times" id="cancel" />
      </label>
      <h1>Drinks DB </h1>
      <div className="sidebar">
        <header>Categories</header>
        <ul>
          <li>
            <a href="whiskey">
              <i className="fa-solid fa-whiskey-glass-ice" /> Whiskey
            </a>
          </li>
          <li>
            <a href="champagne">Champagne</a>
          </li>
          <li>
            <a href="jin">Jin</a>
          </li>
          <li>
            <a href="coke">Cocktail</a>
          </li>
          <li>
            <a href="beer">
              <i className="fa-duotone fa-beer-mug" /> Beer
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
