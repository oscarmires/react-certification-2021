/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from '../../themes';
import HomePage from '../../pages/Home/Home.page';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const enableDarkTheme = (isDarkThemeEnabled) => {
    isDarkThemeEnabled ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomePage handleTheme={enableDarkTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
