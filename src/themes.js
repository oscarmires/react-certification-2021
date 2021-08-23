import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1 {
    height: 100px;
    font-size: 40px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.textColor};
  }

  h2 {
    color: ${(props) => props.theme.textColor}
  }

  p {
    color: ${(props) => props.theme.textColor}
  }
`;

export const lightTheme = {
  /* global */
  backgroundColor: '#eee',
  textColor: '#111',
  boxBackgroundColor: 'white',
  shadowColor: 'rgba(50, 50, 50, 0.2)',

  /* header */
  headerBackgroundColor: '#555',
  searchBarBackgroundColor: '#444',
  searchBarOnHOver: '#666',

  /* Cards */
  boxOnHover: '#eee',

  /* menu button */
  btnBurgerFill: '#fff',
  btnOnHover: '#666',

  /* VideoListItems */
  itemOnHover: '#ddd',
  borderColor: '#ccc',

  /* Account popup */
  accPopUpBackgroundColor: 'white',

  /* button */
  regularBackgroundColor: 'gray',
  regularOutlineColor: 'gray',
  regularTextColor: 'white',
  regularHoverColor: '#898989',

  primaryBackgroundColor: '#ddb01c',
  primaryOutlineColor: '#ddb01c',
  primaryHoverColor: '#e8bd33',
  primaryTextColor: 'white',

  dangerBackgroundColor: '#f7e1e1',
  dangerOutlineColor: '#e21f1f',
  dangerHoverColor: '#d3c2c2',

  /* login form */
  loginFormTextColor: '#111',
  loginFormBackgroundColor: '#eee',
  loginFormOnHOver: '#ddd',

  /* menu */
  menuSectionBorder: '#ddd',
};

export const darkTheme = {
  /* global */
  backgroundColor: '#222',
  textColor: '#eee',
  boxBackgroundColor: '#333',
  shadowColor: 'rgba(10, 10, 10, 0.2)',

  /* header */
  headerBackgroundColor: '#333',
  searchBarBackgroundColor: '#2A2A2A',
  searchBarOnHOver: '#444',

  /* Cards */
  boxOnHover: '#444',

  /* menu button */
  btnBurgerFill: '#eee',
  btnOnHover: '#444',

  /* VideoListItems */
  itemOnHover: '#444',
  borderColor: '#444',

  /* Account popup */
  accPopUpBackgroundColor: '#444',

  /* button */
  regularBackgroundColor: 'gray',
  regularOutlineColor: 'gray',
  regularTextColor: 'white',
  regularHoverColor: '#898989',

  primaryBackgroundColor: '#756f49',
  primaryOutlineColor: '#ffde0c',
  primaryHoverColor: '#89814b',
  primaryTextColor: '#ffde0c',

  dangerBackgroundColor: '#6b4c4c',
  dangerOutlineColor: '#ff6363',
  dangerHoverColor: '#7f5a5a',

  /* login form */
  loginFormTextColor: '#fff',
  loginFormBackgroundColor: '#2A2A2A',
  loginFormOnHOver: '#333',

  /* menu */
  menuSectionBorder: '#555',
};
