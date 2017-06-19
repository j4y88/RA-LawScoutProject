/**
 * Created by Edward_J_Apostol on 2017-04-28.
 */

//import 'font-awesome/scss/font-awesome.scss';
//import './font-awesome.config';

// font-awesome test implementation
//require("./css/font-awesome.min.css");

// strange, this is how webpack currently works with sass to import stylesheets
require('./main.scss');
console.log("implemented sasser");

// this ensures that index.html is updated with webpack
var indexer = require('file-loader?name=../dist/index.html!./index.html');
console.log("copied index.html");
import main from './js/main.js'
import App from './App';

let app = new App();
main();
console.log(app);
console.log("reading index.js complete...");
