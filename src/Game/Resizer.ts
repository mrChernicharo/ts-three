export class Resizer {
  constructor(container: Element, camera: any, renderer: any) {
    this.setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      this.setSize(container, camera, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  onResize() {
    console.log("resizing");
  }

  setSize(container: any, camera: any, renderer: any) {
    camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
  }
}
