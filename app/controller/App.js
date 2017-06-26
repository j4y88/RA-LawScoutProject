import Storage from "../model/storage";
import Service from "./service";
import Carousel from "./carousel";


export default class App {
    constructor()
    {
        console.log("Creating the App");
        this.Storage = new Storage(this);
        this.Service = new Service();
        this.Carousel = new Carousel(this, this.Storage, this.Service);

    }
    init(){
      console.log("in app init");
    }
}
