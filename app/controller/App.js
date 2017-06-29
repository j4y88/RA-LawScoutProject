import Storage from "../model/storage";
import Service from "./service";
import Carousel from "./carousel";


export default class App {
    constructor()
    {
        this.Storage = new Storage(this);
        this.Service = new Service();
        this.Carousel = new Carousel(this, this.Storage, this.Service);
    }
}
