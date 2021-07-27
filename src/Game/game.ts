import { AppScene } from "./AppScene";
import { AppRenderer } from "./AppRenderer";
import { AppCamera } from "./AppCamera";

export class Game {
  scene;
  renderer;
  camera;
  constructor(domContainer: HTMLDivElement) {
    console.log("game contructor!", domContainer);
    this.camera = new AppCamera().get();
    this.renderer = new AppRenderer().get();
    this.scene = new AppScene().get();
    // this.loop = new Loop();

    domContainer.append(this.renderer.domElement);
  }

  start() {
    this.renderer.render(this.scene, this.camera);
    console.log("game start!");
    // this.loop.start()
  }

  stop() {
    // this.loop.stop();
  }
}
