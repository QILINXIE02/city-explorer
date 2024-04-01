import React, { useState } from 'react';

const Search = ({ handleSubmit, handleNewCity }) => {
  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type a City Name"
        onChange={handleNewCity}
      />
      <button className="btn btn-outline-secondary" type="submit">Explore!</button>
    </form>
  );
}

export default Search;