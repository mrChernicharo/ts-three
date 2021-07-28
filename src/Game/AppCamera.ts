import { Camera, PerspectiveCamera } from "three";

export class AppCamera extends Camera {
  camera;
  constructor() {
    super();
    this.camera = new PerspectiveCamera(
      35, // fov = Field Of View
      1, // aspect ratio (dummy value)
      0.1, // near clipping plane
      100 // far clipping plane
    );

    this.camera.position.set(0, 40, 100);

    this.camera.rotateX(Math.PI * 1.85);
  }

  get() {
    return this.camera;
  }
}
