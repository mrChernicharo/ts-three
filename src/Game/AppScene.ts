import { Scene, Color } from "three";

class AppScene extends Scene {
  constructor() {
    super();
    new Scene();
    this.background = new Color("black");
  }

  init() {
    return this;
  }
}
export { AppScene };
