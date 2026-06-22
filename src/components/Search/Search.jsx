import React, { useState, useEffect, useRef } from 'react';
import './search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref to detect clicks outside the component
  const searchContainerRef = useRef(null);

  // Handle the API fetch with debouncing
  useEffect(() => {
    // If the input is empty, clear results and close dropdown
    if (query.trim() === '') {
      setResults([]);
      setIsDropdownOpen(false);
      return;
    }

    // Set up the debounce timer
    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`;
        const response = await fetch(url);
        const data = await response.json();
        
        setResults(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setIsLoading(false);
      }
    }, 400); // Waits 400ms after the user stops typing

    // Cleanup function: clears the timeout if the user types again before 400ms
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Handle clicking outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLocation = (location) => {
    setQuery(location.display_name); // Fill input with selected location
    setIsDropdownOpen(false); // Close dropdown
    
    // Here is where you capture the exact coordinates!
    // console.log("Selected Latitude:", location.lat);
    // console.log("Selected Longitude:", location.lon);
  };

  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    setIsDropdownOpen(false);
  };

  return (
    <div className="search-container" ref={searchContainerRef}>
      <div className="location-input-wrapper">
        <input
          type="text"
          className="location-input"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            className="clear-search-button"
            onClick={handleClearSearch}
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
      </div>
      <button className="search-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Search
      </button>
      
      {/* Only render the dropdown if it's open and there's a query */}
      {isDropdownOpen && query && (
        <ul className="results-list">
          {isLoading && <li className="list-item loading">Loading...</li>}
          
          {!isLoading && results.length === 0 && (
            <li className="list-item no-results">No locations found</li>
          )}
          
          {!isLoading && results.map((location) => (
            <li 
              key={location.place_id} 
              className="list-item"
              onClick={() => handleSelectLocation(location)}
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
