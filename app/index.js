import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './App';

require('./main.scss');
function submitButton(){
  console.log("clicked submit");
<<<<<<< HEAD
  // ValidateEmail();
  // this.flkty.next();

// document.getElementById('form1').style.display="none";
// document.getElementById('success-page').style.display="block";

  // function onSubmitClicked(e){
  //   e.preventDefault();
  //
  //   console.log("submitting form!");
  //
  //   var x = document.getElementById("form1");
  //
  //   var txt = "";
  //   for (var i = 0; i < x.length; i++) {
  //     txt = txt + x.elements[i].value + "<br>";
  //
  //    }
  //    document.getElementById('demo').innerHTML = txt;
  // }


=======
>>>>>>> bf5941a4128200233caf2c45df95f1f957e4484f
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

let doneButton = document.querySelector('.button--done');
doneButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});
});
