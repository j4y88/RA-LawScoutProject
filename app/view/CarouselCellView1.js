export default class CarouselCellView1 {
    constructor(app){
        console.log("CarouselCellView1");
        this.app = app;
        //this.carousel = this.app.Carousel;
    }

    buttons(){
      let nextButton = document.querySelector('.button--next');
      nextButton.addEventListener( 'click', function(event) {
        event.preventDefault();
        this.app.Carousel.flkty.next();
      });
      }
}
