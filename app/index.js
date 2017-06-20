// import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './controller/App';

let indexer = require('file-loader?name=../dist/index.html!./index.html');
let app = new App();
app.init();
let slider = new Slider();

require('./main.scss');
function submitButton(){
  console.log("clicked submit");
}
