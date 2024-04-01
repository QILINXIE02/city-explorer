import React, { useState } from 'react';

const Search = ({ handleSubmit, handleNewCity }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type a City Name" onChange={handleNewCity} />
    </form>
  );
}

export default Search;
