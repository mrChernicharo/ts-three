import { BoxBufferGeometry, Mesh, MeshToonMaterial } from "three";

export class AppPole extends Mesh {
  constructor(x: number, y: number, z: number) {
    super();

    this.material = new MeshToonMaterial({ color: "grey" });
    this.geometry = new BoxBufferGeometry(1, 40, 1);

    new Mesh(this.geometry, this.material);

    this.position.set(x, y, z);
  }
}
