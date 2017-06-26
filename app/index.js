// import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './controller/App';
import Validate from './js/jquery.validate.js';
//import Zinput from './js/zinput.js';

require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');

let app = new App();
app.init();
let slider = new Slider();
let validate = new Validate();
//let zinput = new Zinput();

$( document ).ready(function() {
  console.log("on ready");
});


 

