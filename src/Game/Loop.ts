import { Clock, Quaternion } from "three";
import { AppCamera } from "./AppCamera";

const clock = new Clock();

class Loop {
  camera: AppCamera;
  scene;
  renderer;
  updatables: any[];
  constructor(camera: any, scene: any, renderer: any) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      // this.camera.rotateX(0.005);

      const quat = new Quaternion(0, 0, -0.01);
      this.camera.applyQuaternion(quat);
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
