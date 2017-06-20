import Carousel from "./carousel";
// import CarouselView from "../view/carouselView";


export default class App {
    constructor()
    {
        console.log("Creating the App");
        this.Carousel = new Carousel();
    }

    init(){
      console.log("in app init");
    }
}
