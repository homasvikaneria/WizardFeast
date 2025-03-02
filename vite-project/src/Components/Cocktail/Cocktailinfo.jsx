import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Cocktail.css'
// import '../Meals/Meals.css';

const Cocktailinfo = () => {
    const { drinkid } = useParams();
    const [Infor, setInfor] = useState(null);

    useEffect(() => {
        const getdrinkinfo = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}`)
                const jsonData = await response.json();
                if (jsonData.drinks) {
                    setInfor(jsonData.drinks[0]);
                } else {
                    console.error("No drink data found");
                }
            } catch (error) {
                console.error("Error fetching drinks data:", error);
            }
        };

        if (drinkid) {
            getdrinkinfo();
        }
    }, [drinkid]);

    return (
        <>
            <Navbar />
            {!Infor ? (
                <p>Loading...</p>
            ) : (
                <div className="drink-card">
                    <img src={Infor.strDrinkThumb} alt={Infor.strDrink} className="drink-image" />
                    <div className="drink-details">
                        <h2>{Infor.strDrink}</h2>
                        <p><strong>Category:</strong> {Infor.strCategory}</p>
                        <div className="instructions">
                            <p><strong>How to make:</strong></p>
                            <p>{Infor.strInstructions}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cocktailinfo;