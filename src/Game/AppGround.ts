import {
  Line,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  LineBasicMaterial,
  PlaneGeometry,
  Vector3,
  BufferGeometry,
  Material,
} from "three";

export class AppGround extends Mesh {
  geometry: PlaneGeometry;
  material: Material;
  mesh: Mesh;
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;

    this.geometry = new PlaneGeometry(width, height);
    this.material = new MeshBasicMaterial({ color: "#242424", wireframe: false });

    this.mesh = new Mesh(this.geometry, this.material);
    // this.rotation.x += MathUtils.degToRad(-90);
    this.rotation.x -= Math.PI / 2;
  }

  makeGrid() {
    const tileSize = 20;
    const material = new LineBasicMaterial({ color: "green" });

    for (let i = -this.width / 2; i <= this.width / 2; i += tileSize) {
      const pointA = new Vector3(i, -this.height / 2, 0.05);
      const pointB = new Vector3(i, this.height / 2, 0.05);

      const line = this.drawLine(pointA, pointB, material);
      this.add(line);
    }
    for (let j = -this.height / 2; j <= this.height / 2; j += tileSize) {
      const pointA = new Vector3(-this.width / 2, j, 0.05);
      const pointB = new Vector3(this.width / 2, j, 0.05);

      const line = this.drawLine(pointA, pointB, material);
      this.add(line);
    }
  }

  drawLine(pointA: Vector3, pointB: Vector3, material: Material): Line {
    const geometry = new BufferGeometry().setFromPoints([pointA, pointB]);
    return new Line(geometry, material);
  }
}
