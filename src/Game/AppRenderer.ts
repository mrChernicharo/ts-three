import { WebGL1Renderer } from "three";

export class AppRenderer {
  private renderer;
  constructor() {
    this.renderer = new WebGL1Renderer({ antialias: true });
    this.renderer.physicallyCorrectLights = true;
  }
  init() {
    return this.renderer;
  }

  render() {
    //   this.renderer.render()
  }
}
