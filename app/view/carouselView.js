
export default class CarouselView{
  constructor(app, storage){
    this.app = app;
    this.storage = storage;
    this.infoHovers();
  }
  infoHovers(){

    $("#info-hold-property-click").click(function() {
      $("#info-sensitive-show").hide();
      $("#info-operate-property-show").hide();
      $("#info-subcontractors-show").hide();
      $("#info-hold-property-show").toggle();
      $("#info-hold-property-close").click(function(){
        $("#info-hold-property-show").hide();
      });
    });
    $("#info-sensitive-click").click(function() {
      $("#info-hold-property-show").hide();
      $("#info-operate-property-show").hide();
      $("#info-subcontractors-show").hide();
      $("#info-sensitive-show").toggle();
      $("#info-sensitive-close").click(function() {
          $("#info-sensitive-show").hide();
      });
    });
    $("#info-operate-property-click").click(function() {
      $("#info-hold-property-show").hide();
      $("#info-sensitive-show").hide();
      $("#info-subcontractors-show").hide();
      $("#info-operate-property-show").toggle();
      $("#info-operate-property-close").click(function(){
        $("#info-operate-property-show").hide();
      });
    });
    $("#info-subcontractors-click").click(function() {
      $("#info-hold-property-show").hide();
      $("#info-sensitive-show").hide();
      $("#info-operate-property-show").hide();
      $("#info-subcontractors-show").toggle();
      $("#info-subcontractors-close").click(function() {
        $("#info-subcontractors-show").hide()
      });
    });
  }

  getButtons(flkty, storage, service){
    let previousButton1 = document.querySelector('.back1');
    previousButton1.addEventListener( 'click', function(event) {
      event.preventDefault();
      flkty.previous();
      $('html, body').animate({
        scrollTop: $("#page1").offset().top
      }, 1000);
    });

    let previousButton2 = document.querySelector('.back2');
    previousButton2.addEventListener( 'click', function(event) {
       //alert('clicked previous2');
      event.preventDefault();
      flkty.previous();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 1000);
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
      if (($("#amount6").val() != 0) && ($("#amount5").val() == "$0")){
        $("#slider2-error2").show();
        $("#slider3-error2").show();
        isValid =  false;
      }
      if (!isValid) {
        return false;
      }

      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 1000);
    });

    let getReportButton = document.querySelector('.button--report');
    getReportButton.addEventListener( 'click', function(event) {
      $(".Error").hide();
      event.preventDefault();
      storage.ss.setItem('industry', $("#industry").val());
      if ($("#industry").val() == "") {
        $("#IndustryError").show();
        return false;
      }

      flkty.next();
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 1000);
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
      storage.ss.setItem('emailName', sName);
      storage.ss.setItem('emailAddress', sEmail);

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

      flkty.next();
      $('html, body').animate({
          scrollTop: $("#success-page").offset().top
      }, 1000);
      service.compileData(storage);
   });
  }

}
