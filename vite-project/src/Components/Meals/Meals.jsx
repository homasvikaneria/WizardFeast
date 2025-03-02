// import Navbar from '../Navbar/Navbar'; // Import Navbar component
// import Mealcards from './Mealcards';
// import './Meals.css'
// import React, { useState ,useEffect} from 'react';

// function Meals() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedArea, setSelectedArea] = useState("");
//   const [Data, setData] = useState("");
//   const [Search, setSearch] = useState("")

//   const categories = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pork", "Seafood", "Side", "Vegan", "Vegetarian", "Breakfast", "Goat"];
//   const areas = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pork", "Seafood", "Side", "Vegan", "Vegetarian", "Breakfast", "Goat"];


//   useEffect(() => {
//     const fetchDefaultMeals = async () => {                                                         // Fetch default meals when the component mounts
//       const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//       const jsonData = await response.json();
//       setData(jsonData.meals || []);
//     };

//     fetchDefaultMeals();
//   }, []);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleAreaChange = (e) => {
//     setSelectedArea(e.target.value);
//   };

//   const handleInput = (e) => {
//     setSearch(e.target.value)
//   };

//   const myFun = async () => {
//     const query = Search.trim();
//     if (query === "") {
//       // Fetch default meals if the search field is empty
//       const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//       const jsonData = await response.json();
//       setData(jsonData.meals || []);
//     } else {
//       // Fetch meals based on the search query
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//       const jsonData = await response.json();
//       setData(jsonData.meals || []);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='main'>
//         <div className='container'>
//           <div className='searchBar'>
//             <input
//               type="text"
//               placeholder='Enter Dish Name'
//               onChange={handleInput}
//               value={Search}
//             />
//             <button onClick={myFun}>Search</button>
//           </div>
//         </div>

//         <div className="center-container">
//           <div className="dropdown-container">
//             <label htmlFor="categoryDropdown">Choose a category:</label>
//             <select
//               id="categoryDropdown"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//             >
//               <option value="">--Select Category--</option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="dropdown-container">
//             <label htmlFor="areaDropdown">Choose an area:</label>
//             <select
//               id="areaDropdown"
//               value={selectedArea}
//               onChange={handleAreaChange}
//             >
//               <option value="">--Select Area--</option>
//               {areas.map((area, index) => (
//                 <option key={index} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <Mealcards details={Data} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Meals;
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Mealcards from './Mealcards';
import './Meals.css';

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // Fetch default meals
    const fetchDefaultMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const jsonData = await response.json();
      setData(jsonData.meals || []);
    };

    // Fetch categories dynamically
    const fetchCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const jsonData = await response.json();
      setCategories(jsonData.meals.map((item) => item.strCategory) || []);
    };

    // Fetch areas dynamically
    const fetchAreas = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const jsonData = await response.json();
      setAreas(jsonData.meals.map((item) => item.strArea) || []);
    };

    fetchDefaultMeals();
    fetchCategories();
    fetchAreas();
  }, []);

  // Fetch data based on dropdown changes
  useEffect(() => {
    const fetchFilteredMeals = async () => {
      let query = '';

      if (selectedCategory) {
        query = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
      } else if (selectedArea) {
        query = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`;
      } else {
        query = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      }

      const response = await fetch(query);
      const jsonData = await response.json();
      setData(jsonData.meals || []);
    };

    fetchFilteredMeals();
  }, [selectedCategory, selectedArea]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedArea(""); // Clear the area selection if category is changed
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedCategory(""); // Clear the category selection if area is changed
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    const query = Search.trim();
    if (query === "") {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const jsonData = await response.json();
      setData(jsonData.meals || []);
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const jsonData = await response.json();
      setData(jsonData.meals || []);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='container'>
          <div className='searchBar'>
            <input
              type="text"
              placeholder='Enter Dish Name'
              onChange={handleInput}
              value={Search}
            />
            <button onClick={myFun}>Search</button>
          </div>
        </div>

        <div className="center-container">
          <div className="dropdown-container">
            <label htmlFor="categoryDropdown">Choose a category:</label>
            <select
              id="categoryDropdown"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">--Select Category--</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown-container">
            <label htmlFor="areaDropdown">Choose an area:</label>
            <select
              id="areaDropdown"
              value={selectedArea}
              onChange={handleAreaChange}
            >
              <option value="">--Select Area--</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Mealcards details={Data} />
        </div>
      </div>
    </div>
  );
}

export default Meals;
