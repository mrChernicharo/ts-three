import { AppScene } from "./AppScene";
import { AppRenderer } from "./AppRenderer";
import { AppCamera } from "./AppCamera";
import { AppCube } from "./AppCube";
import { AppPole } from "./AppPole";
import { DirectionalLight, Light } from "three";
import { Resizer } from "./Resizer";
import { Loop } from "./Loop";
import { AppGround } from "./AppGround";
import { AppOrbitControls } from "./AppOrbitControls";
import { AppTrackballControls } from "./AppTrackballControls";
import { Enemy } from "./Enemy";
import { levelEnd, levelStart } from "../utils/Level";
import { AppFlag } from "./AppFlag";
export class Game {
  scene: AppScene;
  renderer: AppRenderer;
  camera: AppCamera;
  controls: AppOrbitControls;
  loop: Loop;
  lights: Light;
  mouseControls;
  constructor(domContainer: HTMLDivElement) {
    this.camera = new AppCamera().init();
    this.renderer = new AppRenderer().init();
    this.scene = new AppScene().init();

    this.controls = new AppOrbitControls(this.camera, domContainer);
    // this.mouseControls = new AppTrackballControls(this.camera, domContainer);

    ///=============================================================///

    this.loop = new Loop(this.camera, this.scene, this.renderer);

    const loopables = [];

    const cube = new AppCube(-10, 2, 20);
    const cube2 = new AppCube(3, 2, 50);

    const enemy = new Enemy("sphere");
    loopables.push(enemy);
    // const enemy2 = new Enemy("sphere");

    loopables.push(cube);
    loopables.push(cube2);
    // loopables.push(enemy2);

    loopables.forEach((el) => this.loop.add(el));

    ///=============================================================///

    this.lights = new DirectionalLight("white", 1.8);

    const ground = new AppGround(400, 400);
    ground.makeGrid();

    const [poleA, poleB, poleC, poleD] = [
      new AppPole(-40, 20, -140),
      new AppPole(90, 20, -90),
      new AppPole(40, 20, 80),
      new AppPole(-70, 20, 180),
    ];

    const [start, end] = [
      new AppFlag(levelStart.x, levelStart.y, levelStart.z),
      new AppFlag(levelEnd.x, levelEnd.y, levelEnd.z),
    ];

    this.scene.add(this.lights, ground, poleA, poleB, poleC, poleD, start, end);

    ///=============================================================///

    domContainer.append(this.renderer.domElement);
    new Resizer(domContainer, this.camera, this.renderer);
  }

  start() {
    console.log("game start!");
    console.log(this.scene);
    // this.renderer.render(this.scene, this.camera);
    this.loop.start();
  }

  stop() {
    // this.loop.stop();
  }
}
