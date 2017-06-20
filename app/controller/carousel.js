import App from "./App";
import CarouselView from "../view/CarouselView";

export default class Carousel{
  constructor(app, carouselView ){
    console.log('creating Carousel controller');
    this.app = app;
    this.carouselView = carouselView;

  }

  createCarousel() {
    console.log("creating carousel");
    // let utils = window.fizzyUIUtils;
    let carousel = document.querySelector('.main-carousel');
    let flkty = new Flickity( carousel, {
      prevNextButtons: false,
      pageDots: false,
      draggable: false
    });

    this.carouselView.getButtons(flkty);
  }


}
