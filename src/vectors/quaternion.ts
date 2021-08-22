
import {Vector} from './vector';
import {Vector3} from './vector3';

export class Quaternion extends Vector{
  public x: number = 0.0;
  public y: number = 0.0;
  public z: number = 0.0;
  public w: number = 0.0;

  constructor(x?: number, y?: number, z?: number, w?: number) {
    super();
    this.setScalar(x, y, z, w);
  }

  public conjugate(): Quaternion {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;
  }

  public multiply(q: Quaternion): Quaternion {

    const qax = this.x, qay = this.y, qaz = this.z, qaw = this.w;
		const qbx = q.x, qby = q.y, qbz = q.z, qbw = q.w;

		this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

    return this;
  }

  public multiplyByVector(v: Vector3): Vector3 {

    const qx = this.x, qy = this.y, qz = this.z, qw = this.w;
		const vx = v.x, vy = v.y, vz = v.z;

		this.x =  qw * vx + qy * vz - qz * vy;
		this.y =  qw * vy + qz * vx - qx * vz;
		this.z =  qw * vz + qx * vy - qy * vx;
    this.w = -qx * vx - qy * vy - qz * vz;

    return this.v;
  }

}

