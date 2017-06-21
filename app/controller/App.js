import Carousel from "./carousel";
import Storage from "../model/storage";



export default class App {
    constructor()
    {
        console.log("Creating the App");
        this.Carousel = new Carousel();
        this.Storage = new Storage(this);
    }

    init(){
      console.log("in app init");
    }
}
