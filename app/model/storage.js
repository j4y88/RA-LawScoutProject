// import Carousel from '../controller/carousel'

export default class Storage {
      constructor(app){
        this.app = app;
        this.ss = window.sessionStorage;
        this.carousel = this.app.Carousel;
        this.createDefaultStorage();
      }
//check if session storage is available

      createDefaultStorage(){

        console.log("inside storage creation");
        //for prop and incorp numbers:
        let taxes = document.querySelectorAll(".slider-total-num");
        for (let i = 0, tax; tax= taxes[i++];) {
          this.ss.setItem(tax.id, 0);
          tax.addEventListener("change", this.updateStorageValueTaxSlider(tax.id, tax.value));
        }
        //for sliders:
        let elements = document.querySelectorAll("#form1 .slider-num");
        for (let i = 0, element; element = elements[i++];) {
          // if(this.ss.length <= 0){
          this.ss.setItem(element.id, 0);
          console.log(element);
        // }
          element.addEventListener("change", this.updateStorageValueSlider(element.id, element.value));
        }

        //for radio buttons:
        let radioButtons = document.querySelectorAll("[type='radio']");
        for (let i = 0, element; element = radioButtons[i++];) {
          let ss = this.ss;
          let id = element.id;
          let parentDiv = $('#'+id+'').closest('div').click({ss: this.ss, id:id}, this.updateStorageValueRadio);
            console.log(element);
            if ($('#'+id+'').parents().hasClass('zSelected')) {
              ss.setItem(id, "selected");
            }else{
              ss.setItem(id, "not selected");
            }
        }


        //for dropdown industry list:
        let dropDown = document.querySelectorAll("#form1 select");
        for (let i = 0, element; element = dropDown[i++];) {
          element.addEventListener("change", this.updateStorageValueSelect(element.id, element.value));
          if(this.ss.length <= 0){
          }
        }

        //for email stuff:
        let emailInfo = document.querySelectorAll("#emailName, #emailAddress");
        for (let i = 0, field; field = emailInfo[i++];) {
          field.addEventListener("change", this.updateStorageValueEmail(field.id, field.value));
          if(this.ss.length <= 0){
            this.ss.setItem(field.id, "");
          }
        }


      }

      updateStorageValueTaxSlider(key, value){
        //on page load check session storage and apply ".checked" class
        //to whichever switches were last selected in the session
        //function should be called from view file where value is determined
        this.ss.setItem(key, value);
      }
      updateStorageValueSlider(key, value){
        //on page load check session storage and apply ".checked" class
        //to whichever switches were last selected in the session
        //function should be called from view file where value is determined
        this.ss.setItem(key, value);
      }

      updateStorageValueSelect(key, value){
        this.ss.setItem(key, value);
        console.log(this.ss);
      }

      updateStorageValueRadio(e){
        let ss = e.data.ss;
        let id = e.data.id;
        // console.log(ss);
        if ($('#'+id+'').parents().hasClass('zSelected')) {
          ss.setItem(id, "selected");
          console.log(id);
          console.log(id.length);
          if(id.length == 8){
            let idRoot = id.substring(0,6);
            let idToggle = idRoot.concat("Yes");
            ss.setItem(idToggle, "");
            console.log(ss);
          }
          else if(id.length == 9){
            let idRoot = id.substring(0,6);
            console.log(idRoot);
            let idToggle = idRoot.concat("No");
            console.log(idToggle);
            ss.setItem(idToggle, "");
            console.log(ss);
          }
        }
      }
      updateStorageValueEmail(key, value){
        this.ss.setItem(key, value);
      }

}
