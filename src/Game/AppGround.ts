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
  width: number;
  height: number;
  edges;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
    this.edges = {
      top: this.height / 2,
      bottom: -this.height / 2,
      left: -this.width / 2,
      right: this.width / 2,
    };

    this.geometry = new PlaneGeometry(width, height);
    this.material = new MeshBasicMaterial({ color: "#242424", wireframe: false });

    new Mesh(this.geometry, this.material);

    // this.rotation.x += MathUtils.degToRad(-90);
    // this.rotation.z -= Math.PI / 2;
    this.rotation.x -= Math.PI / 2;
  }

  makeGrid() {
    const tileSize = 20;
    const material = new LineBasicMaterial({ color: "green" });

    for (let i = this.edges.left; i <= this.edges.right; i += tileSize) {
      const pointA = new Vector3(i, this.edges.bottom, 0.05);
      const pointB = new Vector3(i, this.edges.top, 0.05);

      this.drawLine(pointA, pointB, material);
    }
    for (let j = this.edges.bottom; j <= this.edges.top; j += tileSize) {
      const pointA = new Vector3(this.edges.left, j, 0.05);
      const pointB = new Vector3(this.edges.right, j, 0.05);

      this.drawLine(pointA, pointB, material);
    }
  }

  drawLine(pointA: Vector3, pointB: Vector3, material: Material): void {
    const geometry = new BufferGeometry().setFromPoints([pointA, pointB]);
    const line = new Line(geometry, material);
    this.add(line);
  }
}
