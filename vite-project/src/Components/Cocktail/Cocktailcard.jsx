import React from 'react'
import { NavLink } from 'react-router-dom';
import './Cocktail.css'




const Cocktailcard = ({ details }) => {
    console.log("Details received in Cocktailcard:", details);
  
    return (
      <div className="drink">
        {!details || !Array.isArray(details) || details.length === 0 ? (
          <p>No drinks available</p>
        ) : (
          details.map((curItem) => (
            <div className="DrinkImg" key={curItem.idDrink}>
              <img className='cocktail-image' src={curItem.strDrinkThumb} alt={curItem.strDrink} />
              <p className="drink-name">{curItem.strDrink}</p>
              <p className="drink-type">{curItem.strCategory}</p>
              <NavLink to={`/v1/${curItem.idDrink}`}>
              <button className="meal-btn">View details</button>
              </NavLink>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Cocktailcard;
  

// export default Cocktailcard
