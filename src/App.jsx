import React, { useState } from 'react';
import Search from './Search';
import Map from './Map';
import Title from './Title';
import axios from 'axios';

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN;

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  async function getLocation() {
    let url = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`;
    try {
      const response = await axios.get(url);
      const locationData = response.data[0]; // Assuming the first result is the most relevant
      setLocation(locationData);
      setError(null);
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
    if (!city) {
      setError('Please enter a city name.');
      return;
    }
    getLocation();
  }

  return (
    <>
      <Search handleSubmit={handleSubmit} handleNewCity={handleNewCity} />
      <Title location={location} />
      {location.lat && location.lon && (
        <div className="location-details">
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      <Map location={location} accessToken={accessToken} />
    </>
  );
}

export default App;
