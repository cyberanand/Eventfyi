// components/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Enter your pincode" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
