import CarouselView from '../view/carouselView';

export default class Carousel{
  constructor(){
    console.log('creating Carousel controller');
    this.cv = new CarouselView();
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
    this.cv.getButtons(flkty);

  }
}
