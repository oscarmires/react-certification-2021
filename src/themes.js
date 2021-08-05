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

  /* Cards */
  boxOnHover: '#eee',

  /* button */
  btnBurgerFill: '#fff',
  btnOnHover: 'gray',
};

export const darkTheme = {
  /* global */
  backgroundColor: '#222',
  textColor: '#eee',
  boxBackgroundColor: '#333',
  shadowColor: 'rgba(10, 10, 10, 0.2)',

  /* header */
  headerBackgroundColor: '#333',

  /* Cards */
  boxOnHover: '#444',

  /* button */
  btnBurgerFill: '#eee',
  btnOnHover: '#444',
};
