export default class CarouselView{
  constructor(){
    console.log("carousel view constructor");
  }

getButtons(flkty){
console.log("getting buttons");
let previousButton1 = document.querySelector('.back1');
previousButton1.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.previous();
});

let previousButton2 = document.querySelector('.back2');
previousButton2.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.previous();
});
// next

let nextButton = document.querySelector('.button--next');
nextButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});

let getReportButton = document.querySelector('.button--report');
getReportButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});

let doneButton = document.querySelector('.button--done');
doneButton.addEventListener( 'click', function(event) {
  event.preventDefault();
  flkty.next();
});
}

}
