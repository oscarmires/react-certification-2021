import React from 'react';

const Burger = ({ className }) => (
  <button className={className}>
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
      />
    </svg>
  </button>
);

export default Burger;
