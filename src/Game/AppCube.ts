import { BoxBufferGeometry, Mesh, MeshBasicMaterial, Object3D, Vector3 } from "three";

export class AppCube extends Object3D {
  material;
  geometry;
  mesh: Mesh;
  constructor(position: Vector3) {
    super();

    this.material = new MeshBasicMaterial({ color: "green" });
    this.geometry = new BoxBufferGeometry(position.x, position.y, position.z);

    this.mesh = new Mesh(this.geometry, this.material);
  }

  get() {
    return this.mesh;
  }
}
