import React from 'react';
import { withTheme } from 'styled-components';

const Burger = ({ className, theme }) => (
  <button className={className}>
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={theme.btnBurgerFill}
        d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
      />
    </svg>
  </button>
);

export default withTheme(Burger);
