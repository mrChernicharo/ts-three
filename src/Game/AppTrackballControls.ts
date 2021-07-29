import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { AppCamera } from "./AppCamera";

export class AppTrackballControls extends TrackballControls {
  constructor(camera: AppCamera, domElement?: HTMLElement) {
    super(camera, domElement);
  }
}
