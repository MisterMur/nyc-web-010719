import React from 'react';

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
