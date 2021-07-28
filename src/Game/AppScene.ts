import { Scene, Color } from "three";

class AppScene {
  private scene;
  constructor() {
    this.scene = new Scene();
    this.scene.background = new Color("black");
  }

  get() {
    return this.scene;
  }
}
export { AppScene };
