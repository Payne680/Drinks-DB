import React, { useContext } from 'react';
import MyContext from '../context';
import './Drinks.css';

function Drinks() {
  const { data } = useContext(MyContext);
  return (
    <div className="main">
      <header className="header">
        <h1 className="header__h1">Drinks Available!!</h1>
      </header>
      <div className="drinks_display">
        {data.map((drinks) => {
          return (
            <div key={drinks.name} className="drink_card">
              <img src={drinks.src} alt="drinks" className="images" />
              <h2>{drinks.name}</h2>
              <p>{drinks.description}</p>
              <ul>
                <li>{drinks.ingredients}</li>
              </ul>
              <p>{drinks.userId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Drinks;
