import { Clock, Quaternion } from "three";
import { AppCamera } from "./AppCamera";
import { AppCube } from "./AppCube";

const clock = new Clock();

class Loop {
  camera: AppCamera;
  scene;
  renderer;
  updatables: AppCube[];
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
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  add(item: any) {
    this.updatables.push(item);
    console.log(this.updatables);
    this.scene.add(item);
  }

  tick() {
    const delta = clock.getDelta();
    // console.log(`The last frame rendered in ${delta * 1000} milliseconds`);

    for (const object of this.updatables) {
      //   console.log(delta, this.updatables, object);
      object.tick(delta);
    }
  }
}

export { Loop };
