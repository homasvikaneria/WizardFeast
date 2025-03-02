import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus'; // Import About Us component
import Meals from './Components/Meals/Meals'; // Import Meals component
import Cocktail from './Components/Cocktail/Cocktail'; // Import Cocktail component
import HarryPotter from './Components/HarryPotter/HarryPotter'; // Import HarryPotter component
import Bank from './Components/Bank/Bank'; // Import Bank component
import Mealinfo from './Components/Meals/Mealinfo';
import Cocktailinfo from './Components/Cocktail/Cocktailinfo';
import MongodbConnection from './Components/mongodb/mongodbconnection';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Aboutus />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/harrypotter" element={<HarryPotter />} />
        <Route path="/extra" element={<MongodbConnection />} />
        <Route path="/bank" element={<Bank />} />
        <Route path='/:mealid' element={<Mealinfo/>}/>
        <Route path='/v1/:drinkid' element={<Cocktailinfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
