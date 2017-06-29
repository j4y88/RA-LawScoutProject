// import main from './js/main.js';
import Slider from './js/slider-ui.js';
import App from './controller/App';

require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');

let app = new App();
let slider = new Slider();
