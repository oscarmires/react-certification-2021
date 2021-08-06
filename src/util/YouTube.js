export function gapiLoadClient() {
  const loadClient = () => {
    window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);
    return window.gapi.client
      .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(
        function () {
          console.log('GAPI client loaded for API');
        },
        function (err) {
          console.error('Error loading GAPI client for API', err);
        }
      );
  };
  window.gapi.load('client', loadClient);
}

export const executeSearch = async function (keyword) {
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
    return null;
  }
};
