import { Scene, Color } from "three";

class AppScene extends Scene {
  scene;
  constructor() {
    super();
    this.scene = new Scene();
    this.scene.background = new Color("black");
  }

  init() {
    return this.scene;
  }
}
export { AppScene };
