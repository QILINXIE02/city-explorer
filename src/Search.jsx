import React from 'react';

const Search = ({ handleSubmit, handleNewCity }) => {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="form-control"
        placeholder="Type a City Name"
        onChange={handleNewCity}
      />
      <button type="submit" className="btn btn-primary">Explore!</button>
    </form>
  );
}

export default Search;
