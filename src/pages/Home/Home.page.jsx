import React, { useEffect } from 'react';

import { SearchResultsGrid } from '../../components';
import { HomeArea } from './Home.components';
import YouTube from '../../util/YouTube';
import { useActiveDropdown, useIsClientLoaded } from '../../global-context';

function HomePage({ YouTubeData, setCurrentPage, fetchRelatedVideos }) {
  const { setIsClientLoaded } = useIsClientLoaded();
  const { setActiveDropdown } = useActiveDropdown();

  const closeDropdowns = (e) => {
    setActiveDropdown('');
  };

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient(setIsClientLoaded);

    return () => {
      setIsClientLoaded(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <HomeArea onClick={closeDropdowns}>
        <h1>React Challenge</h1>
        <SearchResultsGrid
          resultItems={YouTubeData}
          setCurrentPage={setCurrentPage}
          fetchRelatedVideos={fetchRelatedVideos}
        />
      </HomeArea>
    </>
  );
}

export default HomePage;
