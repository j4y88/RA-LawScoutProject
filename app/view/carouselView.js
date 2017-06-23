export default class CarouselView{
  constructor(){
    console.log("carousel view constructor");
    this.logoAnimate();
    this.infoHovers();
  }
  infoHovers(){
    $('#info-hold-property-click').hover(function(){$('#info-hold-property-show').fadeIn()}, function(){ $('#info-hold-property-show').fadeOut()});
    $('#info-sensitive-click').hover(function(){$('#info-sensitive-show').fadeIn()}, function(){ $('#info-sensitive-show').fadeOut()});
    $('#info-operate-property-click').hover(function(){$('#info-operate-property-show').fadeIn()}, function(){ $('#info-operate-property-show').fadeOut()});
    $('#info-subcontractors-click').hover(function(){$('#info-subcontractors-show').fadeIn()}, function(){ $('#info-subcontractors-show').fadeOut()});
  }

  logoAnimate(){
    let logo = document.querySelector('#logo-start');
    logo.addEventListener( 'click', function() {
      $('#logo-start').fadeOut("fast", function(){
        $('#logo').fadeIn( function (){
          $('#logo-animate').switchClass("logo-base", "logo-clicked", 2000, "linear", function(){
            $('#logo').fadeOut( function (){
              document.getElementById('poweredBy').style.display="block";
              let poweredBy = document.querySelector('#logo-animate');
              //VT: crazy things happen when I try to shrink the logo back to start-state:
              // poweredBy.addEventListener('click', function(){
              //   $('#logo-animate').switchClass("logo-clicked", "logo-base", 2000, "linear")
              //     $('#poweredBy').fadeOut();
              //     $('#logo-start').fadeIn();
              //   });
            });
          });
        });
      });
    });
  }
  getButtons(flkty){
    console.log("getting buttons");
    let previousButton1 = document.querySelector('.back1');
    previousButton1.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
      $('html, body').animate({
        scrollTop: $("#page1").offset().top
      }, 400);
    });

    let previousButton2 = document.querySelector('.back2');
    previousButton2.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 400);
    });

    // next

    let nextButton = document.querySelector('.button--next');
    nextButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 400);
    });

    let getReportButton = document.querySelector('.button--report');
    getReportButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 400);

    });

    let doneButton = document.querySelector('.button--done');
    doneButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.next();
      $('html, body').animate({
          scrollTop: $("#success-page").offset().top
      }, 400);

    });
  }

}
