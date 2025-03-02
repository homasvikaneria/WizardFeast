// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar'; // Import Navbar component
// import './HarryPotter.css'

// function HarryPotter() {
//   const [selectedLang, setSelectedLang] = useState('en'); // Default language is English
//   const [selectedCategory, setSelectedCategory] = useState('houses'); // Default category is 'spells'
//   const [data, setData] = useState([]); // Holds the fetched data for each category
//   const [loading, setLoading] = useState(false); // To show loading indicator
//   const [error, setError] = useState(null); // To handle errors from the API

//   // Available categories and languages
//   const categories = [
//     { code: 'houses', name: 'Houses' },
//     { code: 'characters', name: 'Characters' },
//     { code: 'books', name: 'Books' },
//     { code: 'spells', name: 'Spells' }
//   ];

//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'es', name: 'Spanish' },
//     { code: 'fr', name: 'French' },
//     { code: 'it', name: 'Italian' },
//     { code: 'pt', name: 'Portuguese' }
//   ];

//   // Handle category change from dropdown
//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     setData([]); // Clear previous data
//     fetchData(category); // Fetch new data based on selected category
//   };

//   // Handle language change from dropdown
//   const handleLanguageChange = (event) => {
//     const language = event.target.value;
//     setSelectedLang(language); // Set the selected language
//     setData([]); // Clear previous data
//     fetchData(selectedCategory, language); // Fetch data based on new language
//   };

//   // Fetch data based on selected category and language
//   const fetchData = async (category, language = selectedLang) => {
//     setLoading(true); // Start loading
//     setError(null); // Reset any previous errors
//     try {
//       const response = await fetch(`https://potterapi-fedeperin.vercel.app/${language}/${category}`);
//       const result = await response.json();
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       setData(result); // Set the fetched data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data, please try again later.');
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   useEffect(() => {
//     fetchData(selectedCategory, selectedLang); // Fetch data when component loads
//   }, [selectedCategory, selectedLang]);

//   return (
//     <div className="harry-potter-container">
//       <Navbar />
//       <div className='category-dropdown-container'>

//         {/* Language Dropdown */}
//         <div className="category-dropdown">
//           <label htmlFor="language-dropdown">Choose a language:</label>
//           <select
//             id="language-dropdown"
//             value={selectedLang}
//             onChange={handleLanguageChange}
//           >
//             {languages.map(language => (
//               <option key={language.code} value={language.code}>
//                 {language.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Category Dropdown */}
//         <div className="category-dropdown">
//           <label htmlFor="category-dropdown">Choose a category:</label>
//           <select
//             id="category-dropdown"
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//           >
//             {categories.map(category => (
//               <option key={category.code} value={category.code}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div >

//       {/* Error Handling */}
//       {error && <p className="error-message">{error}</p>}

//       {/* Loading Indicator */}
//       {loading && <p>Loading...</p>}

//       {/* Data Display Section */}
//       <div className="data-container">
//         {/* Display Spells */}
//         {selectedCategory === 'spells' && !loading && (
//           <div className="spell-cards-container">
//   {data.length > 0 ? (
//     data.map((spell, index) => (
//       <div
//         key={index}
//         className={`spell-card theme-${index % 5 + 1}`}
//       >
//         <div className="spell-card-content">
//           <h3 className="spell-name">{spell.spell}</h3>
//           <p className="spell-description">{spell.use}</p>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p>No spells found.</p>
//   )}
// </div>





//         )}

//         {/* Display Books */}
//         {selectedCategory === 'books' && !loading && (
//           <div className="book-cards-container">
//             {data.length > 0 ? (
//               data.map((book, index) => (
//                 <div key={index} className="book-card">
//                   <h4>{book.title}</h4>
//                   <p className="book-coverpage">{book.cover || 'Unknown'}</p>
//                   <p className="book-author">Author: {book.author || 'Unknown'}</p>
//                   <p className="book-year">Year: {book.year || 'N/A'}</p>
//                   <p className="book-Part">Part: {book.number || 'N/A'}</p>
//                   <p className="book-tittle">Part: {book.title || 'N/A'}</p>
//                   <p className="book-original-title">Original Title: {book.originalTitle || 'N/A'}</p>
//                   <p className="book-release-date">Release Date: {book.releaseDate || 'N/A'}</p>
//                   <p className="book-description">Description: {book.description || 'No description available'}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No books found.</p>
//             )}
//           </div>
//         )}

//         {/* Display Characters */}
//         {selectedCategory === 'characters' && !loading && (
//           <div className="character-list">
//             {data.length > 0 ? (
//               data.map((character, index) => (
//                 <div key={index} className="character-card">
//                   <img src={character.image || 'default-image-url.png'} alt={character.fullName || 'No image available'} />
//                   <h3>{character.fullName || 'Unknown'}</h3>

//                 </div>
//               ))
//             ) : (
//               <p>No characters found.</p>
//             )}
//           </div>
//         )}

//         {/* Display Houses */}
//         {selectedCategory === 'houses' && !loading && (
//           <div className="house-list">
//             {data.length > 0 ? (
//               data.map((house, index) => (
//                 <div key={index} className={`house-card ${house.house.toLowerCase()}`}>
//                   {house.emoji && <div className="house-emoji">{house.emoji}</div>}
//                   <div className="house-name">{house.house}</div>
//                   {house.animal && <div className="house-animal">Animal: {house.animal}</div>}
//                   {house.founder && <div className="house-founder">Founder: {house.founder}</div>}
//                 </div>
//               ))
//             ) : (
//               <div className="no-houses">
//                 <p>No houses found.</p>
//               </div>
//             )}
//           </div>


//         )}
//       </div>
//     </div >
//   );
// }

// export default HarryPotter;

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './HarryPotter.css';

function HarryPotter() {
  const [selectedLang, setSelectedLang] = useState('en'); // Default language is English
  const [selectedCategory, setSelectedCategory] = useState('houses'); // Default category is 'houses'
  const [data, setData] = useState([]); // Holds the fetched data for each category
  const [loading, setLoading] = useState(false); // To show loading indicator
  const [error, setError] = useState(null); // To handle errors from the API
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Holds the selected character for the modal
  const [showCharacterModal, setShowCharacterModal] = useState(false); // Controls modal visibility
  const [showBookModal, setShowBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Handle book click to open modal
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowBookModal(true);
  };

  // Close modal
  const closeBookModal = () => {
    setShowBookModal(false);
    setSelectedBook(null);
  };


  const categories = [
    { code: 'houses', name: 'Houses' },
    { code: 'characters', name: 'Characters' },
    { code: 'books', name: 'Books' },
    { code: 'spells', name: 'Spells' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
  ];

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setData([]); // Clear previous data
    fetchData(category); // Fetch new data based on selected category
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLang(language); // Set the selected language
    setData([]); // Clear previous data
    fetchData(selectedCategory, language); // Fetch data based on new language
  };

  const fetchData = async (category, language = selectedLang) => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    try {
      const response = await fetch(`https://potterapi-fedeperin.vercel.app/${language}/${category}`);
      const result = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      setData(result); // Set the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data, please try again later.');
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchData(selectedCategory, selectedLang); // Fetch data when component loads
  }, [selectedCategory, selectedLang]);

  const openCharacterModal = (character) => {
    setSelectedCharacter(character);
    setShowCharacterModal(true);
  };

  const closeCharacterModal = () => {
    setSelectedCharacter(null);
    setShowCharacterModal(false);
  };

  return (
    <div className="harry-potter-container">
      <Navbar />
      <div className="category-dropdown-container">
        <div className="category-dropdown">
          <label htmlFor="language-dropdown">Choose a language:</label>
          <select
            id="language-dropdown"
            value={selectedLang}
            onChange={handleLanguageChange}
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        <div className="category-dropdown">
          <label htmlFor="category-dropdown">Choose a category:</label>
          <select
            id="category-dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.code} value={category.code}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>


      {selectedCategory === 'books' && !loading && (
        <div className="book-cards-container">
          {data.length > 0 ? (
            data.map((book, index) => (
              <div
                key={index}
                className="book-card"
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.cover || 'default-cover-url.png'}
                  alt={book.title || 'Book Cover'}
                  className="book-image"
                />
              </div>
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>
      )}

      {/* Modal for Book Details */}
      {showBookModal && selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content book-modal-content">
            <button className="close-button" onClick={closeBookModal}>
              &times;
            </button>
            <div className="modal-book-container">
              {/* Left: Book Image */}
              <div className="book-modal-image">
                <img
                  src={selectedBook.cover || 'default-cover-url.png'}
                  alt={selectedBook.title || 'Book Cover'}
                />
              </div>
              {/* Right: Book Details */}
              <div className="book-modal-details">
                <h2>{selectedBook.title || 'Unknown Title'}</h2>
                <p><strong>Part:</strong> {selectedBook.number || 'N/A'}</p>
                <p><strong>Original Title:</strong> {selectedBook.originalTitle || 'N/A'}</p>
                <p><strong>Release Date:</strong> {selectedBook.releaseDate || 'N/A'}</p>
                <p><strong>Description:</strong> {selectedBook.description || 'No description available'}</p>
              </div>
            </div>
          </div>
        </div>
      )}




      {/* Display Spells */}
      {selectedCategory === 'spells' && !loading && (
        <div className="spell-cards-container">
          {data.length > 0 ? (
            data.map((spell, index) => (
              <div
                key={index}
                className={`spell-card theme-${index % 5 + 1}`}
              >
                <div className="spell-card-content">
                  <h3 className="spell-name">{spell.spell}</h3>
                  <p className="spell-description">{spell.use}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No spells found.</p>
          )}
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading...</p>}

      <div className="data-container">
        {selectedCategory === 'characters' && !loading && (
          <div className="character-list">
            {data.length > 0 ? (
              data.map((character, index) => (
                <div
                  key={index}
                  className="character-card"
                  onClick={() => openCharacterModal(character)}
                >
                  <img src={character.image || 'default-image-url.png'} alt={character.fullName || 'No image available'} />
                  <h3>{character.fullName || 'Unknown'}</h3>
                </div>
              ))
            ) : (
              <p>No characters found.</p>
            )}
          </div>
        )}
      </div>

      {selectedCategory === 'houses' && !loading && (
        <div className="house-list">
          {data.length > 0 ? (
            data.map((house, index) => (
              <div key={index} className={`house-card ${house.house.toLowerCase()}`}>
                {house.emoji && <div className="house-emoji">{house.emoji}</div>}
                <div className="house-name">{house.house}</div>
                {house.animal && <div className="house-animal">Animal: {house.animal}</div>}
                {house.founder && <div className="house-founder">Founder: {house.founder}</div>}
              </div>
            ))
          ) : (
            <div className="no-houses">
              <p>No houses found.</p>
            </div>
          )}
        </div>


      )}

      {showCharacterModal && selectedCharacter && (
        <div className="modal-character-overlay">
          <div className="modal-character-content">
            <button className="close-character-button" onClick={closeCharacterModal}>
              &times;
            </button>
            <img src={selectedCharacter.image || 'default-image-url.png'} alt={selectedCharacter.fullName || 'Character'} />
            <h2>{selectedCharacter.fullName || 'Unknown'}</h2>
            <p>
              <strong>Real Name:</strong> {selectedCharacter.interpretedBy || 'Unknown'}
            </p>
            <p>
              <strong>Nickname:</strong> {selectedCharacter.nickname || 'Unknown'}
            </p>
            <p>
              <strong>House:</strong> {selectedCharacter.hogwartsHouse || 'Unknown'}
            </p>
            <p>
              <strong>Birthday:</strong> {selectedCharacter.birthdate || 'N/A'}
            </p>


          </div>
        </div>
      )}

    </div>
  );
}

export default HarryPotter;
