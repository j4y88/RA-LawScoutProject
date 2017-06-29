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
        //for prop and incorp numbers:
        let taxes = document.querySelectorAll(".slider-total-num");
        for (let i = 0, tax; tax = taxes[i++];) {
          this.ss.setItem(tax.id, 0);
          tax.addEventListener("change", this.updateStorageValueTaxSlider(tax.id, tax.value));
        }
        //for sliders:
        let elements = document.querySelectorAll("#form1 .slider-num");
        for (let i = 0, element; element = elements[i++];) {
          this.ss.setItem(element.id, 0);
          element.addEventListener("change", this.updateStorageValueSlider(element.id, element.value));
        }
        //for radio buttons:
        let radioButtons = document.querySelectorAll("[type='radio']");
        for (let i = 0, element; element = radioButtons[i++];) {
          let ss = this.ss;
          let id = element.id;
          let parentDiv = $('#'+id+'').closest('div').click({ss: this.ss, id:id}, this.updateStorageValueRadio);
            if ($('#'+id+'').parents().hasClass('zSelected')) {
              ss.setItem(id, "selected");
            }else{
              ss.setItem(id, "not selected");
            }
        }
      }
      updateStorageValueTaxSlider(key, value){
        this.ss.setItem(key, value);
      }
      updateStorageValueSlider(key, value){
        this.ss.setItem(key, value);
      }
      updateStorageValueRadio(e){
        let ss = e.data.ss;
        let id = e.data.id;
        if ($('#'+id+'').parents().hasClass('zSelected')) {
          ss.setItem(id, "selected");
          if(id.length == 8){
            let idRoot = id.substring(0,6);
            let idToggle = idRoot.concat("Yes");
            ss.setItem(idToggle, "");
          }
          else if(id.length == 9){
            let idRoot = id.substring(0,6);
            let idToggle = idRoot.concat("No");
            ss.setItem(idToggle, "");
          }
        }
      }

}
