import { WebGL1Renderer } from "three";

export class AppRenderer extends WebGL1Renderer {
  constructor() {
    super();
    new WebGL1Renderer({ antialias: true });
    this.physicallyCorrectLights = true;
  }
  init() {
    return this;
  }

  render() {
    //   this.renderer.render()
  }
}
