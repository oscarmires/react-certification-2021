import { JSDOM } from 'jsdom';
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.window.scroll = (x, y) => {
  document.documentElement.scrollTop = y;
};
