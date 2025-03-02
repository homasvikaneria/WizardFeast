import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'; // Import Navbar component
import './Bank.css'

function Bank() {
  // Initialize states and selectedState with useState
  // const [selectedState, setSelectedState] = useState("");  // For storing selected state
  // const [States, setStates] = useState([]);  // For storing list of states

  // const [selectedDistrict, setselectedDistrict] = useState("");
  // const [District, setDistrict] = useState("");

  // const [selectedCity, setselectedCity] = useState("");
  // const [City, setCity] = useState([]);

  // const [selectedCentre, setselectedCentre] = useState("");
  // const [Centre, setCentre] = useState([]);

  // const [selectedBranch, setselectedBranch] = useState("");
  // const [Branch, setBranch] = useState([]);




  // // useEffect to fetch state data when component mounts
  // useEffect(() => {
  //   const fetchState = async () => {
  //     try {
  //       const response = await fetch('https://bank-apis.justinclicks.com/API/V1/STATE/');
  //       const jsonData = await response.json();
  //       setStates(jsonData);  // Set the fetched data into the States array
  //     } catch (error) {
  //       console.error("Error fetching states:", error);
  //     }
  //   };

  //   fetchState();  // Call the function to fetch data
  // }, []);  // Empty dependency array ensures this runs only once when the component mounts

  // // Handle the state selection from dropdown
  // const handleStateChange = (event) => {
  //   setSelectedState(event.target.value);
  // };






  // useEffect(() => {
  //   const fetchDistrict = async () => {
  //     try {
  //       const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}`);
  //       const jsonData = await response.json();
  //       setDistrict(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching District:", error);
  //     }
  //   }

  //   fetchDistrict();
  // }, [selectedState]);

  // const handleDistrictChange = (event) => {
  //   setselectedDistrict(event.target.value);
  // }






  // useEffect(() => {
  //   const fetchCity = async () => {
  //     try {
  //       const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}`);
  //       const jsonData = await response.json();
  //       setCity(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching City:", error);
  //     }
  //   }
  //   fetchCity();
  // }, [selectedDistrict]);

  // const handleCityChange = (event) => {
  //   setselectedCity(event.target.value);
  // }


  // useEffect(() => {
  //   const fetchCentre = async () => {
  //     try {
  //       const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}`);
  //       const jsonData = await response.json();
  //       setCentre(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching Centre:", error);
  //     }
  //   }
  //   fetchCentre();
  // }, [selectedCity]);
  // const handleCentreChange = (event) => {
  //   setselectedCentre(event.target.value);
  // }




  // useEffect(() => {
  //   const fetchBranch = async () => {
  //     try {
  //       const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCentre}`);
  //       const jsonData = await response.json();
  //       setBranch(jsonData);
  //       console.log(jsonData);

  //     } catch (error) {
  //       console.error("Error fetching Branch:", error);
  //     }
  //   }
  //   fetchBranch();
  // }, [selectedCentre]);

  // const handleBranchChange = (event) => {
  //   setselectedBranch(event.target.value);
  // }



  return (
    <div>
      <Navbar />
      {/* <div className='State'>
        <h2>Select a State</h2>
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {States && States.length > 0 ? (
            States.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))
          ) : (
            <option disabled>No states available</option>
          )}
        </select>
      </div>
      <div className='District'>
        <h2>Select a District</h2>
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">Select District</option>
          {District && District.length > 0 ? (
            District.map((District, index) => (
              <option key={index} value={District}>{District}</option>
            ))
          ) : (
            <option disabled>No District available</option>
          )}
        </select>
      </div>
      <div className='City'>
        <h2>Select a City</h2>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          {City && City.length > 0 ? (
            City.map((City, index) => (
              <option key={index} value={City}>{City}</option>
            ))
          ) : (
            <option disabled>No City available</option>
          )}
        </select>
      </div>

      <div className='Centre'>
        <h2>Select a Centre</h2>
        <select value={selectedCentre} onChange={handleCentreChange}>
          <option value="">Select Centre</option>
          {Centre && Centre.length > 0 ? (
            Centre.map((Centre, index) => (
              <option key={index} value={Centre}>{Centre}</option>
            ))
          ) : (
            <option disabled>No Centre available</option>
          )}
        </select>
      </div>

      <div className='Branch'>
        <h2>Select a Branch</h2>
        <select value={selectedBranch} onChange={handleBranchChange}>
          <option value="">Select Branch</option>
          {Branch && Branch.length > 0 ? (
            Branch.map((Branch, index) => (
              <option key={index} value={Branch}>{Branch}</option>
            ))
          ) : (
            <option disabled>No Branch available</option>
          )}
        </select>
      </div>

      <div className="passbook">
        <h2>Bank Passbook</h2>
        <div className="passbook-details">
          <p><strong>State:</strong> {selectedState || "N/A"}</p>
          <p><strong>District:</strong> {selectedDistrict || "N/A"}</p>
          <p><strong>City:</strong> {selectedCity || "N/A"}</p>
          <p><strong>Centre:</strong> {selectedCentre || "N/A"}</p>
          <p><strong>Branch:</strong> {selectedBranch || "N/A"}</p>
        </div>
      </div> */}
      <p>Work in progress</p>
    </div>
  );
}

export default Bank;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar'; // Navbar Component
// import './Bank.css'; // Bank styles

// function Bank() {
//   // State Variables
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedCentre, setSelectedCentre] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState('');
//   const [ifscCode, setIfscCode] = useState('');
//   const [States, setStates] = useState([]);
//   const [District, setDistrict] = useState([]);
//   const [City, setCity] = useState([]);
//   const [Centre, setCentre] = useState([]);
//   const [Branch, setBranch] = useState([]);
//   const [bankDetailsByIfsc, setBankDetailsByIfsc] = useState(null);
//   const [isIFSCSearch, setIsIFSCSearch] = useState(true);

//   // Fetch States
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await fetch('https://bank-apis.justinclicks.com/API/V1/STATE/');
//         const jsonData = await response.json();
//         setStates(jsonData || []);
//       } catch (error) {
//         console.error('Error fetching states:', error);
//       }
//     };
//     fetchStates();
//   }, []);

//   // Fetch Districts
//   useEffect(() => {
//     const fetchDistricts = async () => {
//       try {
//         if (selectedState) {
//           const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}`);
//           const jsonData = await response.json();
//           setDistrict(jsonData || []);
//         }
//       } catch (error) {
//         console.error('Error fetching districts:', error);
//       }
//     };
//     fetchDistricts();
//   }, [selectedState]);

//   // Fetch Cities
//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         if (selectedDistrict) {
//           const response = await fetch(`
//             https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}
//           `);
//           const jsonData = await response.json();
//           setCity(jsonData || []);
//         }
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };
//     fetchCities();
//   }, [selectedDistrict]);

//   // Fetch Centres
//   useEffect(() => {
//     const fetchCentres = async () => {
//       try {
//         if (selectedCity) {
//           const response = await fetch(`
//             https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}
//           `);
//           const jsonData = await response.json();
//           setCentre(jsonData || []);
//         }
//       } catch (error) {
//         console.error('Error fetching centres:', error);
//       }
//     };
//     fetchCentres();
//   }, [selectedCity]);

//   // Fetch Branches
//   useEffect(() => {
//     const fetchBranches = async () => {
//       try {
//         if (selectedCentre) {
//           const response = await fetch(`
//             https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCentre}
//           `);
//           const jsonData = await response.json();
//           setBranch(jsonData || []);
//         }
//       } catch (error) {
//         console.error('Error fetching branches:', error);
//       }
//     };
//     fetchBranches();
//   }, [selectedCentre]);

//   // Fetch Bank Details by IFSC Code
//   const fetchBankDetailsByIfsc = async () => {
//     if (!ifscCode) {
//       alert('Please enter a valid IFSC code');
//       return;
//     }
//     try {
//       const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifscCode}`);
//       const jsonData = await response.json();
//       setBankDetailsByIfsc(jsonData || null);
//     } catch (error) {
//       console.error('Error fetching bank details by IFSC:', error);
//     }
//   };

//   // Handlers
//   const handleStateChange = (e) => setSelectedState(e.target.value);
//   const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
//   const handleCityChange = (e) => setSelectedCity(e.target.value);
//   const handleCentreChange = (e) => setSelectedCentre(e.target.value);
//   const handleBranchChange = (e) => setSelectedBranch(e.target.value);

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         {/* Left Column */}
//         <div className="left-column">
//           <div className="search-toggle">
//             <button onClick={() => setIsIFSCSearch(true)} className={isIFSCSearch ? 'selected' : ''}>
//               Search by IFSC
//             </button>
//             <button onClick={() => setIsIFSCSearch(false)} className={!isIFSCSearch ? 'selected' : ''}>
//               Search by State/District
//             </button>
//           </div>

//           {/* Search by IFSC */}
//           {isIFSCSearch ? (
//             <div className="form-section">
//               <h2>Enter IFSC Code</h2>
//               <input
//                 type="text"
//                 value={ifscCode}
//                 onChange={(e) => setIfscCode(e.target.value)}
//                 placeholder="Enter IFSC Code"
//               />
//               <button onClick={fetchBankDetailsByIfsc}>Get Bank Details</button>
//             </div>
//           ) : (
//             <div className="form-grid">
//               <div className="State">
//                 <h2>Select State</h2>
//                 <select value={selectedState} onChange={handleStateChange}>
//                   <option value="">Select State</option>
//                   {States.map((state, index) => (
//                     <option key={index} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="District">
//                 <h2>Select District</h2>
//                 <select value={selectedDistrict} onChange={handleDistrictChange}>
//                   <option value="">Select District</option>
//                   {District.map((district, index) => (
//                     <option key={index} value={district}>
//                       {district}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Similar for City, Centre, and Branch */}
//             </div>
//           )}
//         </div>

//         {/* Right Column */}
//         <div className="right-column">
//           <div className="passbook-details">
//             <h2>Bank Passbook</h2>
//             <p>
//               <strong>State:</strong> {selectedState || 'N/A'}
//             </p>
//             <p>
//               <strong>District:</strong> {selectedDistrict || 'N/A'}
//             </p>
//             <p>
//               <strong>City:</strong> {selectedCity || 'N/A'}
//             </p>
//             <p>
//               <strong>Centre:</strong> {selectedCentre || 'N/A'}
//             </p>
//             <p>
//               <strong>Branch:</strong> {selectedBranch || 'N/A'}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Bank;