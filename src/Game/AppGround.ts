import { MathUtils, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

export class AppGround extends Mesh {
  geometry;
  material;
  mesh;
  constructor(width: number, height: number) {
    super();

    this.geometry = new PlaneGeometry(width, height);
    this.material = new MeshBasicMaterial({ color: "grey", wireframe: false });

    this.mesh = new Mesh(this.geometry, this.material);
    this.rotation.x += MathUtils.degToRad(-90);
  }
}
