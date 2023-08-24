import React, { useState } from 'react';
import mock from './mock';
import '../assets/css/SearchBar.css';


function HomePageComponent() {
    const [selectedCity, setSelectedCity] = useState('');
    const [locations, setLocations] = useState([]);
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
  
      if (mock[event.target.value]) {
        setLocations(mock[event.target.value]);
      } else {
        setLocations([]);
      }
    };
  
    return (
      <div className="home-page">
        <h2>Locatii Pet Friendly </h2>
        <input
          type="text"
          placeholder="Enter city..."
          value={selectedCity}
          onChange={handleCityChange}
        />
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              {location.name} - {location.type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HomePageComponent;