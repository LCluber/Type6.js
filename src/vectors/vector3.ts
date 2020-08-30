import {Vector} from './vector';

export class Vector3 extends Vector {
  public x: number;
  public y: number;
  public z: number;

  constructor(x?: number, y?: number, z?: number) {
    super();
    this.x = x ?? 0.0;
    this.y = y ?? 0.0;
    this.z = z ?? 0.0;
  }

  public set(x:number, y:number, z:number): Vector3 {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
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
