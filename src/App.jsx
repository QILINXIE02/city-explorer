import React, { useState } from 'react';
import Search from './Search';
import Map from './Map';
import Title from './Title';

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN; 

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  async function getLocation() {
    let url = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Unable to fetch location data');
      }
      let jsonData = await response.json();
      let locationData = jsonData[0];
      setLocation(locationData);
      setError(null);
    } catch(error) {
      console.error("Error getting location information", error);
      setError(error.message);
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
    <>
      <Search handleSubmit={handleSubmit} handleNewCity={handleNewCity} />
      <Title location={location} />
      {error && <p>{error}</p>}
      <Map location={location} accessToken={accessToken} />
    </>
  );
}

export default App;
