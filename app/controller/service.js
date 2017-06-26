// import CarouselView from '../view/carouselView';

export default class Service{
  constructor(){
  }

  compileData(storage){
    console.log("COMPILING");
    let session = storage.ss;
    let sessionArray = [];
    //let compiledString = "";
    for (let key in window.sessionStorage){
      if (session.hasOwnProperty(key)) {
        sessionArray[key] = {name: key, value: session[key]};
      }
    }
    console.log(sessionArray);
    this.editSessionArray(sessionArray);
  }

  editSessionArray(ssArray){
    let editedArray = [];
    for (let key in ssArray){
      if (ssArray[key].value != "not selected"){
        editedArray[key] = ssArray[key].value;
      }
    }
    console.log(editedArray);
  }

}
