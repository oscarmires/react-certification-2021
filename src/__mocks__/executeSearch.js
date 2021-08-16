import { items } from '../mock/youtube-videos-mock.json';

export default function executeSearch(keyword) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      keyword == 'wizeline'
        ? resolve(items)
        : reject({
            error: 'not found',
          });
    });
  });
}
