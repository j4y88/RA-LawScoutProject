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
        var elements = document.querySelectorAll("#form1 input");
        for (var i = 0, element; element = elements[i++];) {
          if (element.value === "")
          // console.log(element);
          this.ss.setItem(element.id, element.value);
          element.addEventListener("change", this.updateStorageValue(element.id, element.value))
          // console.log($(element));
          // console.log(this.ss);
        }
      }

      updateStorageValue(key ,value){
        console.log("changed storage value");
        window.sessionStorage.setItem(key, value);
      }

}
