export default class CarouselCellView2 {
    constructor(){
        console.log("CarouselCellView2");
    }

  buttons(flkty){
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
    }
}
