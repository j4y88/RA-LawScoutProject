// import Carousel from '../controller/carousel'

export default class Storage {
      constructor(app){
        this.app = app;
        this.ss = window.sessionStorage;
        this.carousel = this.app.Carousel;
        this.createDefaultStorage();
      }
//check if session storage is available
//on clicking of button on bottom of each page, set session values to keys?

      createDefaultStorage(){

        console.log("inside storage creation");

        //for sliders:
        let elements = document.querySelectorAll("#form1 .slider-num");
        for (let i = 0, element; element = elements[i++];) {
          this.ss.setItem(element.id, 0);
          element.addEventListener("change", this.updateStorageValueSlider(element.id, element.value));
        }

        //for radio buttons:
        let radioButtons = document.querySelectorAll("[type='radio']");
        for (let i = 0, element; element = radioButtons[i++];) {
          console.log(element);

          let id = element.id;
          let parentDiv = $('#'+id+'').closest('div').click(function(){
            if ($('#'+id+'').parents().hasClass('zSelected')) {
              // console.log(id);
              window.sessionStorage.setItem(id, "selected");
            }
              else{
                window.sessionStorage.setItem(id, "not selected");
              }
            });
            // this.updateStorageValueRadio(id));
          if ($('#'+id+'').parents().hasClass('zSelected')) {
            window.sessionStorage.setItem(id, "selected");
          }
        }

        //for dropdown industry list:
        let dropDown = document.querySelectorAll("#form1 select");
        for (let i = 0, element; element = dropDown[i++];) {
          element.addEventListener("change", this.updateStorageValueSelect(element.id, element.value));
        }
      }


      updateStorageValueSlider(key, value){
        this.ss.setItem(key, value);
      }

      updateStorageValueSelect(key, value){
        this.ss.setItem(key, value);
      }

      updateStorageValueRadio(id){
        // if (document.getElementById(key).type == 'radio'){
          // if ($('#'+key+'').hasClass('zSelected')){
          //   this.ss.setItem(key, "selected");
          // }

      console.log("changed radio value");

      if ($('#'+id+'').parents().hasClass('zSelected')) {
        console.log(id);
        this.ss.setItem(id, "selected");

      }
      else{
        this.ss.setItem(id, "not selected");
      }
          // this.ss.setItem(key, value);
      }
      // updateStorageValue(key ,value){
      //   console.log("changed storage value");
      //   if (document.getElementById(key).type == 'radio'){
      //     console.log("CHANGING RADIO");
      //     if ($('#'+ key+'').hasClass('zSelected')){
      //       this.ss.setItem(key, "selected");
      //     }
      //     else{
      //       this.ss.setItem(key, "not selected");
      //     }
      //   }
      //   else{
      //     this.ss.setItem(key, value);
      //   }
      // }
}
