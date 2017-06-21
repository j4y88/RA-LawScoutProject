import Carousel from '../view/carouselView'

export default class Storage {
      constructor(app = new App){
        this.ss = window.sessionStorage;
        this.carousel = app.carousel;
      }


      createDefaultStorage(){
        console.log("inside storage creation");
        var elements = document.querySelectorAll("#form1 input")

        for (var i = 0, element; element = elements[i++];) {
          if (element.value === "")
          console.log(element);

          this.ss.setItem(element.id, element.value);
          element.addEventListener("change", this.updateStorageValue)
          console.log($(element));
          console.log(this.ss);
        }
      }

    static updateStorageValue(key ,value){
        window.sessionStorage.setItem(key, value);
    }

}
