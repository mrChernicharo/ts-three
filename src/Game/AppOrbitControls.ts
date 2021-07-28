import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class AppOrbitControls extends OrbitControls {
  constructor(camera, canvas) {
    super(camera, canvas);

    this.enableDamping = true;
    // this.maxPolarAngle
    this.maxPolarAngle = Math.PI / 2;
  }

  tick() {
    // forward controls.update to our custom .tick method
    this.update();
  }
}
