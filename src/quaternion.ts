// WIP
import { Vector3 } from './vectors/vector3';
import { Trigonometry } from './trigonometry';

export class Quaternion {
  public angle: number; //angle in radians
  public vector: Vector3;
  private vCv1: Vector3;
  private vCv2: Vector3;
  private v: Vector3;

  constructor(angle: number, vector: Vector3) {
    angle *= 0.5;
    this.vector = new Vector3();
    this.vCv1 = new Vector3();
    this.vCv2 = new Vector3();
    this.v = new Vector3();
    this.angle = Trigonometry.cosine(angle);
    let scalar = Trigonometry.sine(angle);
    this.vector.copy(vector).scale(scalar);
  }

  // public toArray(): number[] {
  //   let array = this.vector.toArray();
  //   array.push(this.angle);
  //   return array;
  // }

  public toString(): string {
    return '(x = ' + this.vector.x + '; y = ' + this.vector.y + '; z = ' + this.vector.z + '; w = ' + this.angle + ')';
  }

  public copy(q: Quaternion): Quaternion {
    this.vector.copy(q.vector);
    this.angle = q.angle;
    return this;
  }

  public conjugate(): Quaternion {
    this.vector.opposite();

    return this;
  }

  public multiply(q: Quaternion): Quaternion {

    // const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		// const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		// this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		// this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		// this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		// this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

    this.v.copy(q.vector).scale(this.angle);
    this.angle = this.angle * q.angle + this.vector.dotProduct(q.vector);
    this.vCv1.copy(this.vector).cross(q.vector);
    this.vector.scale(q.angle).add(this.v).add(this.vCv1);
    return this;
  }

  public multiplyVector(vector: Vector3): Vector3 {
    this.vCv1.copy(this.vector).cross(vector);
    this.vCv2.copy(this.vector).cross(this.vCv1);
    this.v.copy(vector).addScaledVector(this.vCv1, 2*this.angle).addScaledVector(this.vCv2, 2);
    return this.v;
  }

}

