
export default class CarouselView{
  constructor(app, storage){
    //console.log("carousel view constructor");
    this.app = app;
    this.storage = storage;
    // this.service = service;
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
               //console.log("remove listener");
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
    //console.log("shrinking");
    //reverse the addClickToExpandLogo steps to return logo to initial views
  }

  getButtons(flkty, storage, service){
    //console.log("getting buttons");
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
       //alert('clicked previous2');
      event.preventDefault();
      flkty.previous();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 400);
    });

    let nextButton = document.querySelector('.button--next');
    nextButton.addEventListener( 'click', function(event) {
      event.preventDefault();
      $(".Error").hide();
      var isValid = true;
      if ($("#amount1").val() == "$0") {
        $("#slider1-error").show();
        isValid = false;
      }
      if ($("#amount2").val() == "$0") {
        $("#slider2-error").show();
        isValid =  false;
      }
      if ($("#amount3").val() == "$0") {
        $("#slider3-error").show();
        isValid =  false;
      }
      if (($("#amount6").val() == 0) && ($("#amount2").val() != "$0")){
        $("#slider2-error2").show();
        isValid =  false;
      }
      if (($("#amount6").val() == 0) && ($("#amount3").val() != "$0")){
        $("#slider3-error2").show();
        isValid =  false;
      }
      if (!isValid) {
        return false;
      }

      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 400);
    });

    let getReportButton = document.querySelector('.button--report');
    getReportButton.addEventListener( 'click', function(event) {
      $(".Error").hide();
      event.preventDefault();
      if ($("#industry").val() == "") {
        $("#IndustryError").show();
        return false;
      }

      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 400);
    });

    let doneButton = document.querySelector('.button--done');
    doneButton.addEventListener( 'click', function(event) {
        $(".Error").hide();
      event.preventDefault();
      var isValid = true;
      var emailValidateRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      var emailValidateName = /^[A-Za-z\s]+$/;
      var sName = $('#emailName').val();
      var sEmail = $('#emailAddress').val();
        if ($.trim(sName).length == 0) {
          $("#email-name-required").show();
          isValid = false;
        }  else if ($.trim(sName).length <= 2) {
          $("#EmailNameError").show();
          isValid = false;
        } else if (!emailValidateName.test(sName)) {
          $("#EmailNameError").show();
          isValid = false;
        }
        if (sEmail == "") {
          $("#EmailAddressRequired").show();
          isValid = false;
        } else if (!emailValidateRegEx.test(sEmail)) {
        $("#EmailAddressError").show();
        isValid = false;
      }

      if (!isValid) {
        return false;
      }

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
