import { BoxBufferGeometry, MathUtils, Mesh, MeshBasicMaterial, Vector3 } from "three";

export class AppCube extends Mesh {
  material;
  geometry;
  mesh: Mesh;
  constructor(x: number, y: number, z: number) {
    super();
    // this.pos = { x, y, z };
    this.material = new MeshBasicMaterial({ color: "orangered" });
    this.geometry = new BoxBufferGeometry(4, 4, 4);

    this.mesh = new Mesh(this.geometry, this.material);

    this.position.set(x, y, z);
  }

  init(): AppCube {
    return this;
  }

  tick(delta: number) {
    const radiansPerSecond = MathUtils.degToRad(30);
    this.rotation.y += radiansPerSecond * delta;

    this.position.x += delta;
  }
}
