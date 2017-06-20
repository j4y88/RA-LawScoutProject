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


    getButtons(flkty){
      this.ccv1.buttons(flkty);
      this.ccv2.buttons(flkty);
      this.ccv3.buttons(flkty);
      this.ccv4.buttons(flkty);




    }




}
