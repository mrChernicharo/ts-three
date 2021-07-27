import { PerspectiveCamera } from "three";

export class AppCamera {
  camera;
  constructor() {
    this.camera = new PerspectiveCamera(
      35, // fov = Field Of View
      1, // aspect ratio (dummy value)
      0.1, // near clipping plane
      100 // far clipping plane
    );

    this.camera.position.set(0, 10, 10);
  }

  get() {
    return this.camera;
  }
}
