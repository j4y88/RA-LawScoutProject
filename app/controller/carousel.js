import CarouselView from '../view/carouselView';

export default class Carousel{
  constructor(app, storage, service){
    this.app = app;
    this.storage = storage;
    this.service = service;
    this.cv = new CarouselView(this.app, this.storage)
    this.createCarousel();
  }
  createCarousel(){
    let carousel = document.querySelector('.main-carousel');
    let flkty = new Flickity( carousel, {
      prevNextButtons: false,
      pageDots: false,
      draggable: false,
    });
    this.cv.getButtons(flkty, this.storage, this.service);

  }
}
