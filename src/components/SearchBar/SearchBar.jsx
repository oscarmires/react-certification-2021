import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

import { SearchInput, Bar } from './SearchBar.components';
import YouTube from '../../util/YouTube';
import { useActiveDropdown, useSearchKeyword } from '../../global-context';

const SearchBar = ({ updateVideos }) => {
  const { setSearchKeyword } = useSearchKeyword();
  const { setActiveDropdown } = useActiveDropdown();
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');

  const closeDropdowns = (e) => {
    setActiveDropdown('');
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      const searchResults = await YouTube.executeSearch(e.target.value);
      history.push('/');
      setSearchKeyword(inputValue);
      setInputValue('');
      updateVideos(searchResults);
      document.getElementById('search-input').blur();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Bar onClick={closeDropdowns}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="grey"
      >
        <path d="M20.207 18.793L16.6 15.184a7.027 7.027 0 1 0-1.416 1.416l3.609 3.609a1 1 0 0 0 1.414-1.416zM6 11a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5z" />
      </svg>
      <SearchInput
        id="search-input"
        data-testid="search-input"
        type="text"
        placeholder="Search"
        onKeyDown={handleEnter}
        value={inputValue}
        onChange={handleChange}
      />
    </Bar>
  );
};

export default SearchBar;
