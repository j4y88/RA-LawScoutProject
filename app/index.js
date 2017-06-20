/**
 * Created by Edward_J_Apostol on 2017-04-28.
 */

//import 'font-awesome/scss/font-awesome.scss';
//import './font-awesome.config';

// font-awesome test implementation
//require("./css/font-awesome.min.css");

// strange, this is how webpack currently works with sass to import stylesheets
require('./main.scss');
function submitButton(){
  console.log("clicked submit");
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


}

// this ensures that index.html is updated with webpack
let indexer = require('file-loader?name=../dist/index.html!./index.html');

console.log("copied index.html");
import main from './js/main.js';
import App from './App';

let app = new App();
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

  // submitButton();

});

 $("#slider1").slider({
      value: 1500,
        min: 500,
        max: 10000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    $("#slider2").slider({
      value: 1500,
        min: 500,
        max: 10000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    $("#slider3").slider({
      value: 1500,
        min: 500,
        max: 10000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    update();

});

  function update() {
       let $amount1 = $("#slider1").slider("values", 0);
       let $amount2 = $("#slider2").slider("values", 0);
       let $amount3 = $("#slider3").slider("values", 0);
       let $amount4 = $amount1 + $amount2 + $amount3;
       $("#amount1").val($amount1);
       $("#amount2").val($amount2);
       $("#amount3").val($amount3);
       $("#amount4").val($amount4);
       $("#amount5").val($amount4);
  }
