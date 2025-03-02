// import React from 'react'
// import { useState } from 'react';
// import Cocktailcard from './Cocktailcard';
// import Navbar from '../Navbar/Navbar';

// const Cocktail = () => {

//   const [data, setData] = useState();
//   const [search, setSearch] = useState('');


//   const handleInput = (event) => {
//     setSearch(event.target.value)
//   }


//   const myfunction = async () => {
//     const get = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
//     const jsonData = await get.json()  //json mai convert kar rahe hai await isliye likha ki wait karo jab tak data json mai ho raha convert 
//     // console.log(jsonData .drinks)
//     setData(jsonData.drinks)

//   }

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <div className='searchBar'>
//           <input
//             type="text"
//             placeholder='Enter Drink Name!!'
//             onChange={handleInput}
//           //   value={Search}
//           />
//           <button onClick={myfunction}>Search</button>
//         </div>
//       </div>
//       <div>
//         <Cocktailcard details={data} />
//       </div>
//     </div>

//   )
// }

// export default Cocktail

// import React, { useState, useEffect } from 'react';
// import Cocktailcard from './Cocktailcard';
// import Navbar from '../Navbar/Navbar';

// const Cocktail = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');

//   // Fetch default drinks on component mount
//   useEffect(() => {
//     const fetchDefaultDrinks = async () => {
//       const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
//       const jsonData = await response.json();
//       setData(jsonData.drinks || []); // Set default drinks
//     };

//     fetchDefaultDrinks();
//   }, []);

//   const handleInput = (event) => {
//     setSearch(event.target.value);
//   };

//   const searchDrinks = async () => {
//     if (!search.trim()) {
//       alert("Please enter a drink name to search.");
//       return;
//     }
//     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
//     const jsonData = await response.json();
//     setData(jsonData.drinks || []); // Update with search results
//   };

//   const fetchRandomDrink = async () => {
//     const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
//     const jsonData = await response.json();
//     setData([jsonData.drinks[0]]); // Set state to a single random drink
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <div className='searchBar'>
//           <input
//             type="text"
//             placeholder='Enter Drink Name!!'
//             onChange={handleInput}
//           />
//           <button onClick={searchDrinks}>Search</button>
//           <button onClick={fetchRandomDrink}>Random</button>
//         </div>
//       </div>
//       <div>
//         <Cocktailcard details={data} />
//       </div>
//     </div>
//   );
// };

// export default Cocktail;



import React, { useState, useEffect } from 'react';
import Cocktailcard from './Cocktailcard';
import Navbar from '../Navbar/Navbar';

const Cocktail = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // List of popular drinks
  const defaultDrinks = ['Margarita', 'Mojito', 'Daiquiri', 'Pina Colada', 'Gin Fizz'];

  // Fetch multiple popular drinks
  useEffect(() => {
    const fetchDefaultDrinks = async () => {
      const drinks = [];
      for (const drink of defaultDrinks) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
        const json = await response.json();
        if (json.drinks) {
          drinks.push(...json.drinks);
        }
      }
      setData(drinks);
    };

    fetchDefaultDrinks();
  }, []);

  // Update search input value
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  // Search for drinks
  const searchDrinks = async () => {
    if (!search.trim()) {
      alert('Please enter a drink name to search.');
      return;
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const json = await response.json();
    setData(json.drinks || []);
  };

  // Fetch two random drinks
  const fetchTwoRandomDrinks = async () => {
    const randomDrinks = [];
    for (let i = 0; i < 2; i++) {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const json = await response.json();
      if (json.drinks) {
        randomDrinks.push(json.drinks[0]);
      }
    }
    setData(randomDrinks);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Drink Name!!"
            onChange={handleInput}
          />
          <button onClick={searchDrinks}>Search</button>
          <button onClick={fetchTwoRandomDrinks}>Random</button>
        </div>
      </div>
      <div>
        <Cocktailcard details={data} />
      </div>
    </div>
  );
};

export default Cocktail;
