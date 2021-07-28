import { AppScene } from "./AppScene";
import { AppRenderer } from "./AppRenderer";
import { AppCamera } from "./AppCamera";
import { AppCube } from "./AppCube";
import { DirectionalLight, Vector3 } from "three";
import { Resizer } from "./Resizer";
import { Loop } from "./Loop";

export class Game {
  scene;
  renderer;
  camera;
  loop;
  constructor(domContainer: HTMLDivElement) {
    console.log("game contructor!", domContainer);
    this.camera = new AppCamera().get();
    this.renderer = new AppRenderer().get();
    this.scene = new AppScene().get();
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    const light = new DirectionalLight("white", 8);
    const position = new Vector3(10, 10, 40);

    const cube = new AppCube(position).get();

    // move the light right, up, and towards us
    light.position.set(10, 10, 10);

    this.scene.add(light);
    this.scene.add(cube);

    // this.loop.updatables.push(cube);
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
