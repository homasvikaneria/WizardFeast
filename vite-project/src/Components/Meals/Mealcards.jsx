import React from 'react';
import './Meals.css';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ details }) => {
  return (
    <div className="meals">
      {!details ? (
       "no meal found"
      ) : (
        details.map((curItem) => {
          return (
            <div className="mealImg" key={curItem.idMeal}>
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p className="meal-name">{curItem.strMeal}</p>
              <p className="meal-area">{curItem.strArea}</p>
              <p className="meal-id">ID: {curItem.idMeal}</p>
              <NavLink to={`/${curItem.idMeal}`} ><button className="meal-btn">More</button></NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Mealcards;
