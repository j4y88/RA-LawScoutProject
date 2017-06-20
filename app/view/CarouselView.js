import CarouselCellView1 from './CarouselCellView1';
import CarouselCellView2 from './CarouselCellView2';
import CarouselCellView3 from './CarouselCellView3';
import CarouselCellView4 from './CarouselCellView4';

export default class CarouselView {
  constructor(ccv1, ccv2, ccv3, ccv4){
    this.ccv1 = ccv1;
    this.ccv2 = ccv2;
    this.ccv3 = ccv3;
    this.ccv4 = ccv4;
    console.log('creating Carousel View');
  }

  getButtons(){
          let nextButton = document.querySelector('.button--next');
          nextButton.addEventListener( 'click', function(event) {
            event.preventDefault();
            this.app.Carousel.flkty.next();
          });

    // this.ccv1.buttons();
    // this.ccv2.buttons();
    // this.ccv3.buttons();
    // this.ccv4.buttons();
  }

}
