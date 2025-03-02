import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Meals.css';
import Navbar from '../Navbar/Navbar'; // Import Navbar component

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        if (jsonData.meals && jsonData.meals.length > 0) {
          setInfo(jsonData.meals[0]);
        } else {
          setInfo(null);
        }
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  return (
    <>
    <Navbar />
      {!info ? (
        <p>Loading...</p>
      ) : (
        <div className="recipe-card">
          <img src={info.strMealThumb} alt={info.strMeal} className="recipe-image" />
          <div className="recipe-details">
            <h2>{info.strMeal}</h2>
            <p><strong>Category:</strong> {info.strCategory}</p>
            <p><strong>Area:</strong> {info.strArea}</p>
            <div className="instructions">
              <p><strong>Instructions:</strong></p>
              <p>{info.strInstructions}</p>
            </div>
          </div>
        </div>
      )}
    </> 
  );
};

export default Mealinfo;