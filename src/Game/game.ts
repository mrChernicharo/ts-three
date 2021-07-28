import { AppScene } from "./AppScene";
import { AppRenderer } from "./AppRenderer";
import { AppCamera } from "./AppCamera";
import { AppCube } from "./AppCube";
import { DirectionalLight } from "three";
import { Resizer } from "./Resizer";
import { Loop } from "./Loop";

export class Game {
  scene;
  renderer;
  camera;
  loop;
  lights;
  constructor(domContainer: HTMLDivElement) {
    this.camera = new AppCamera().init();
    this.renderer = new AppRenderer().init();
    this.scene = new AppScene().init();

    this.loop = new Loop(this.camera, this.scene, this.renderer);

    this.lights = new DirectionalLight("white", 1.8);

    const cube = new AppCube(-10, 10, 20);
    const cube2 = new AppCube(3, 10, 50);

    this.loop.add(cube);
    this.loop.add(cube2);

    // move the this.lights right, up, and towards us
    // this.lights.position.set(10, 10, -10);

    this.scene.add(this.lights);

    domContainer.append(this.renderer.domElement);
    new Resizer(domContainer, this.camera, this.renderer);
  }

  start() {
    console.log("game start!");
    // this.renderer.render(this.scene, this.camera);
    this.loop.start();
  }

  stop() {
    // this.loop.stop();
  }
}
