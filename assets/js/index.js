import { resize } from './functions.js';
import { App } from './App.js';


document.addEventListener("DOMContentLoaded", (e) => {

  let app = new App();
  app.init();

  window.onresize = resize;
  resize();

});
