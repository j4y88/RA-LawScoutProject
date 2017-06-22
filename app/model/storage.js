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
        let elements = document.querySelectorAll("#form1 input");
        let dropDown = document.querySelectorAll("#form1 select");
        //VT: not sure how to query select to radio button inputs
        //so that their changed values are set to SS,
        //we are using element IDs as SS keys,
        //should we make IDs such as "RadioQ1Yes" and "RadioQ1No" and say
        //"if .type is 'radio' then set value to SS key as "selected"?

        for (let i = 0, element; element = dropDown[i++];) {
          element.addEventListener("change", this.updateStorageValue(element.id, element.value));
        }


        for (let i = 0, element; element = elements[i++];) {
          this.ss.setItem(element.id, element.value);
          element.addEventListener("change", this.updateStorageValue(element.id, element.value));
        }
      }

      updateStorageValue(key ,value){
        console.log("changed storage value");
        this.ss.setItem(key, value);
        //VT: It looks as if I have a blank key is SS with a value of "no",
        //I'm not sure where that is coming from.  
      }

}
