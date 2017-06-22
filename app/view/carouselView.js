export default class CarouselView{
  constructor(){
    console.log("carousel view constructor");
    this.logoAnimate();
  }
  logoAnimate(){
    let logo = document.querySelector('#logo-animate');
    logo.addEventListener( 'mouseover', function() {
      $('#logo-animate').switchClass("logo-base", "logo-clicked", 2000, "linear");
      document.getElementById('logo').style.display="none";
      document.getElementById('foundedby').style.display="block";
    });
    logo.addEventListener( 'mouseleave', function() {
      $('#logo-animate').switchClass("logo-clicked", "logo-base", 2000, "linear");
      document.getElementById('logo').style.display="block";
      document.getElementById('foundedby').style.display="none";
    });
  }
  getButtons(flkty){
    console.log("getting buttons");
    let previousButton1 = document.querySelector('.back1');
    previousButton1.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
      // window.scrollTo(0, 0)

    });

    let previousButton2 = document.querySelector('.back2');
    previousButton2.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
      // window.scrollTo(0, 0)

    });
    // next

    let nextButton = document.querySelector('.button--next');
    nextButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      // window.scrollTo(0, 0)
    });

    let getReportButton = document.querySelector('.button--report');
    getReportButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      // window.scrollTo(0, 0)

    });

    let doneButton = document.querySelector('.button--done');
    doneButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      // window.scrollTo(0, 0)

    });
  }

}
