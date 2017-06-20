import App from "./App";
import CarouselView from "../view/CarouselView";

export default class Carousel{
  constructor(app){
    console.log('creating Carousel controller');
    this.app = app;
    // this.carouselView = carouselView;
    // this.createCarousel()
  }

  createCarousel() {
    console.log("creating carousel");
    let utils = window.fizzyUIUtils;
    let carousel = document.querySelector('.main-carousel');
    let flkty = new Flickity( carousel, {
      prevNextButtons: false,
      contain: true,
      pageDots: false,
      draggable: false
    });

    this.getButtons(flkty);
  }

  getButtons(flkty){
    let nextButton = document.querySelector('.button--next');
    nextButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
    });
    let previousButton1 = document.querySelector('.back1');
    previousButton1.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
    });
    let getReportButton = document.querySelector('.button--report');
    getReportButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
    });
    let previousButton2 = document.querySelector('.back2');
    previousButton2.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
    });
    let doneButton = document.querySelector('.button--done');
    doneButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
    });
  }
}
