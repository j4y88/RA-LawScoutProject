
export default class CarouselView{
  constructor(app, storage, service){
    console.log("carousel view constructor");
    this.app = app;
    this.storage = storage;
    this.service = service;
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
    let logo = document.querySelector('#logo-animate');
    logo.addEventListener( 'click', this.addClickToExpandLogo, false);
  }

  addClickToExpandLogo(){
      $('#logo-animate').removeClass("showFirstLogo", function(){
        $('#logo').fadeIn( function (){
          $('#logo-animate').switchClass("logo-base", "logo-clicked", 2000, "linear", function(){
             $('#logo').fadeOut( function (){
               console.log("remove listener");
               let logo = document.querySelector('#logo-animate');
               //this remove listener isn't working. On click, animation path logo shows
               logo.removeEventListener( 'click', this.addClickToExpandLogo);
              //  logo.addEventListener( 'click', this.addClickToShrinkLogo, false);
            });
          });
        });
      });
    }


  addClickToShrinkLogo(){
    console.log("shrinking");
    //reverse the addClickToExpandLogo steps to return logo to initial views
  }

  getButtons(flkty, storage, service){
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
      //input validation
      //then collate form info, make AJAX, then either go to final success page,
      //or show error
      flkty.next();
      $('html, body').animate({
          scrollTop: $("#success-page").offset().top
      }, 400);
      service.compileData(storage);
   });
  }

}
