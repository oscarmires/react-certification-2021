import { useEffect } from 'react';

const YouTube = {
  gapiLoadClient(setIsClientLoaded) {
    const loadClient = () => {
      window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);
      return window.gapi.client
        .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(
          function () {
            console.log('GAPI client loaded for API');
            setIsClientLoaded(true);
          },
          function (err) {
            console.error('Error loading GAPI client for API', err);
          }
        );
    };
    window.gapi.load('client', loadClient);
  },

  executeSearch: async function (keyword) {
    try {
      const response = await window.gapi.client.youtube.search.list({
        part: 'snippet',
        type: 'video',
        maxResults: 25,
        q: keyword,
      });

      return response.result.items;
    } catch (error) {
      console.log(error);
    }
    return [];
  },

  getRelatedVideos: async function (videoId) {
    try {
      const response = await window.gapi.client.youtube.search.list({
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video',
        maxResults: 35,
      });

      return response.result.items;
    } catch (error) {
      console.log(error);
    }
    return [];
  },

  useYouTubePlayer(videoId) {
    useEffect(() => {
      // a. This code loads the IFrame Player API code asynchronously.
      const existingScript = document.getElementById('iframe-script');

      if (existingScript) {
        // if YT api already loaded
        document.head.removeChild(existingScript);
        onYouTubeIframeAPIReady();
      }

      let tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'iframe-script';

      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // b. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      // eslint-disable-next-line
      function onYouTubeIframeAPIReady() {
        window.player = new window.YT.Player('player', {
          videoId: videoId,
          events: {
            onReady: onPlayerReady,
          },
        });
      }

      // c. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      window.onPlayerReady = onPlayerReady;

      // eslint-disable-next-line
    }, []);
  },
};

export default YouTube;
