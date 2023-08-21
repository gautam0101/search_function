import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import './App.css';

const App = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await response.json();
      setFilteredResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Book Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResult results={filteredResults} />
    </div>
  );
};

export default App;
