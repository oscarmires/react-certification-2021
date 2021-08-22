import React, { useEffect } from 'react';

import { SearchResultsGrid } from '../../components';
import { HomeArea } from './Home.components';
import YouTube from '../../util/YouTube';
import { useIsClientLoaded } from '../../global-context';

function HomePage({ YouTubeData, setCurrentPage, fetchRelatedVideos }) {
  const { setIsClientLoaded } = useIsClientLoaded();

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
      <HomeArea>
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
