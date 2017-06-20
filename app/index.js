require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');

import main from './js/main.js';
import Slider from './js/slider-ui.js';
//import radio from './zInput.js';
import App from './App';

let app = new App();
let slider = new Slider();

$( document ).ready(function() {

  let utils = window.fizzyUIUtils;
  let carousel = document.querySelector('.main-carousel');
  let flkty = new Flickity( carousel, {
    prevNextButtons: false,
    pageDots: false
  });
  // previous
  let previousButton = document.querySelector('.button--previous');
  previousButton.addEventListener( 'click', function(event) {
    event.preventDefault();
    flkty.previous();
  });
  // next
  let nextButton = document.querySelector('.button--next');
  nextButton.addEventListener( 'click', function(event) {
    event.preventDefault();
    flkty.next();
  });
});
