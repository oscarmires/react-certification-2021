import React from 'react';
import { Navbar, Results } from '../../components';
import { HomeArea } from './Home.components';
import { items } from '../../mock/youtube-videos-mock.json';

function HomePage({ handleTheme }) {
  return (
    <>
      <Navbar data-testid="navbar" handleTheme={handleTheme} />
      <HomeArea>
        <h1>React Challenge</h1>
        <Results resultItems={items} />
      </HomeArea>
    </>
  );
}

export default HomePage;
