import CarouselView from '../view/carouselView';

export default class Carousel{
  constructor(app, storage, service){
    console.log('creating Carousel controller');
    this.app = app;
    this.storage = storage;
    this.service = service;
    this.cv = new CarouselView(this.app, this.storage, this.service);
    this.createCarousel();
  }
  createCarousel(){
    console.log("createcarousel function");
    let carousel = document.querySelector('.main-carousel');
    let flkty = new Flickity( carousel, {
      prevNextButtons: false,
      pageDots: false,
      draggable: false,
      // adaptiveHeight: true
    });
    this.cv.getButtons(flkty, this.storage, this.service);

  }
}
