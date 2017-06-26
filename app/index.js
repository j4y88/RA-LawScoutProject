// import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './controller/App';
//import Zinput from './js/zinput.js';

require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');

let app = new App();
app.init();
let slider = new Slider();

$( document ).ready(function() {
  console.log("on ready");
});


 

