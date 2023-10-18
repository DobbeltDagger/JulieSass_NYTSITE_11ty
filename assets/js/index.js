import { resize } from './functions.js';

//////////////////////////////////////////////////////
// DOM loaded
document.addEventListener("DOMContentLoaded", (e) => {

  // get the menu burger
  let burgerBtn = document.getElementById('burger');
  burgerBtn.addEventListener('click', (e)=> {
    console.log("burger was clicked!")
    e.preventDefault();

    document.getElementById('mobileNavWrapper').classList.toggle("hide");
    document.getElementById('burgerIcon').classList.toggle('hide');
    document.getElementById('crossIcon').classList.toggle('hide');
  });

  window.onresize = resize;
  resize();

});
