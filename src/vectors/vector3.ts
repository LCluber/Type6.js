import {Vector} from './vector';

export class Vector3 extends Vector {
  public x: number = 0.0;
  public y: number = 0.0;
  public z: number = 0.0;

  constructor(x?: number, y?: number, z?: number) {
    super();
    this.setScalar(x, y, z);
  }

  public clone(): Vector3 {
    return new Vector3(this.x,this.y,this.z);
  }

  public cross(v: Vector3 ): Vector3 {
    let x = this.x, y = this.y, z = this.z;
    this.x =  y * v.z - z * v.y;
    this.y =  z * v.x - x * v.z;
    this.z =  x * v.y - y * v.x;
    return this;
  }

};
