import { Camera, PerspectiveCamera } from "three";

export class AppCamera extends PerspectiveCamera {
  camera;
  constructor() {
    super();

    new PerspectiveCamera(
      50, // fov = Field Of View
      1, // aspect ratio (dummy value)
      0.5, // near clipping plane
      3000 // far clipping plane
    );

    this.position.set(0, 60, -200);

    this.lookAt(0, 0, 0);
  }

  init() {
    return this;
  }
}
