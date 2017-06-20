export default class CarouselCellView3 {
    constructor(){
        console.log("CarouselCellView3");
    }
    buttons(){

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
