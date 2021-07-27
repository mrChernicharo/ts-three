import { Scene, Color } from "three";

export class AppScene {
  private scene;
  constructor() {
    this.scene = new Scene();
    this.scene.background = new Color("skyblue");
  }

  get() {
    return this.scene;
  }
}
