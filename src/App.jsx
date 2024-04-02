import React, { useState } from 'react';
import Search from './Search';
import Map from './Map';
import Title from './Title';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import './index.css'; 

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN;

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  async function getLocation() {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    let url = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`;
    try {
      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {
        const locationData = response.data[0];
        setLocation(locationData);
        setError(null); 
      } else {
        setError("No results found. Please try a different location.");
      }
    } catch (error) {
      console.error("Error getting location information", error);
      setError("Failed to fetch location data. Please try again.");
    }
  }

  function handleNewCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation();
  }

  return (
    <div className="app-container">
      <Search handleSubmit={handleSubmit} handleNewCity={handleNewCity} />
      <Title location={location} />
      {error && <ErrorMessage message={error} />}
      {location.lat && location.lon && (
        <>
          <div className="location-details">
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lon}</p>
          </div>
          <Map location={location} accessToken={accessToken} />
        </>
      )}
    </div>
  );
}

export default App;
