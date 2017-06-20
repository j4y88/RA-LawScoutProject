import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './App';

require('./main.scss');
function submitButton(){
  console.log("clicked submit");
}

let indexer = require('file-loader?name=../dist/index.html!./index.html');



let app = new App();
let slider = new Slider();

$( document ).ready(function() {

let utils = window.fizzyUIUtils;

let carousel = document.querySelector('.main-carousel');
let flkty = new Flickity( carousel, {
  prevNextButtons: false,
  pageDots: false,
  draggable: false
});

// previous
let previousButton1 = document.querySelector('.back1');
previousButton1.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.previous();
});

let previousButton2 = document.querySelector('.back2');
previousButton2.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.previous();
});
// next

let nextButton = document.querySelector('.button--next');
nextButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});

let getReportButton = document.querySelector('.button--report');
getReportButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});
});
