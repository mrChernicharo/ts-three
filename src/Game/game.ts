import { AppScene } from "./AppScene";
import { AppRenderer } from "./AppRenderer";
import { AppCamera } from "./AppCamera";
import { AppCube } from "./AppCube";
import { AppPole } from "./AppPole";
import { DirectionalLight } from "three";
import { Resizer } from "./Resizer";
import { Loop } from "./Loop";
import { AppGround } from "./AppGround";
import { AppOrbitControls } from "./AppOrbitControls";

export class Game {
  scene: AppScene;
  renderer: AppRenderer;
  camera: AppCamera;
  controls: AppOrbitControls;
  loop;
  lights;
  constructor(domContainer: HTMLDivElement) {
    this.camera = new AppCamera().init();
    this.renderer = new AppRenderer().init();
    this.scene = new AppScene().init();

    this.controls = new AppOrbitControls(this.camera, domContainer);

    ///=============================================================///

    const cube = new AppCube(-10, 2, 20);
    const cube2 = new AppCube(3, 2, 50);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.add(cube);
    this.loop.add(cube2);

    ///=============================================================///

    this.lights = new DirectionalLight("white", 1.8);

    const ground = new AppGround(200, 400);
    ground.makeGrid();

    const [poleA, poleB, poleC] = [
      new AppPole(-40, 20, -140),
      new AppPole(90, 20, -90),
      new AppPole(40, 20, 80),
    ];

    this.scene.add(this.lights, ground, poleA, poleB, poleC);

    ///=============================================================///

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
