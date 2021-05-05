
import {Trigonometry} from '../trigonometry';
import {Vector3} from '../vectors/vector3';

export class Matrix4x3 {

  private m: Float32Array;
  //utility vectors for lookAtRH method
  private xAxis: Vector3;
  private yAxis: Vector3;
  private zAxis: Vector3;

  constructor(  x1?:number, x2?:number, x3?:number,
                y1?:number, y2?:number, y3?:number,
                z1?:number, z2?:number, z3?:number,
                t1?:number, t2?:number, t3?:number
              ) {
    this.m = new Float32Array(16);
    //utility vectors for lookAtRH method
    this.xAxis = new Vector3();
    this.yAxis = new Vector3();
    this.zAxis = new Vector3();
    this.make(  x1, x2, x3,
                y1, y2, y3,
                z1, z2, z3,
                t1, t2, t3
              );
  }

  private make( x1?:number, x2?:number, x3?:number,
                y1?:number, y2?:number, y3?:number,
                z1?:number, z2?:number, z3?:number,
                t1?:number, t2?:number, t3?:number
              ): void {
    this.m[ 0] = x1||0.0;
    this.m[ 1] = x2||0.0;
    this.m[ 2] = x3||0.0;
    this.m[ 3] = 0.0;
    this.m[ 4] = y1||0.0;
    this.m[ 5] = y2||0.0;
    this.m[ 6] = y3||0.0;
    this.m[ 7] = 0.0;
    this.m[ 8] = z1||0.0;
    this.m[ 9] = z2||0.0;
    this.m[10] = z3||0.0;
    this.m[11] = 0.0;
    this.m[12] = t1||0.0;
    this.m[13] = t2||0.0;
    this.m[14] = t3||0.0;
    this.m[15] = 1.0;
  }

  public copy(matrix4x3: Matrix4x3 ): Matrix4x3 {
    let m = matrix4x3.m;
    this.make(  m[ 0],  m[ 1],  m[ 2],
                m[ 4],  m[ 5],  m[ 6],
                m[ 8],  m[ 9],  m[10],
                m[12],  m[13],  m[14]
              );
    return this;
  }

  public toArray(): Float32Array {
    return this.m;
  }

  public toString(): string {
    return  '('
      + this.m[ 0] + ',' + this.m[ 1] + ',' + this.m[ 2] + ',' + this.m[ 3] + ';'
      + this.m[ 4] + ',' + this.m[ 5] + ',' + this.m[ 6] + ',' + this.m[ 7] + ';'
      + this.m[ 8] + ',' + this.m[ 9] + ',' + this.m[10] + ',' + this.m[11] + ';'
      + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
  }

  public identity(): Matrix4x3 {
    this.make(  1.0,  0.0,  0.0,
                0.0,  1.0,  0.0,
                0.0,  0.0,  1.0,
                0.0,  0.0,  0.0
              );
    return this;
  }

  public scale(vector3: Vector3): Matrix4x3 {
    this.make(  vector3.x, 0.0, 0.0,
                0.0, vector3.y, 0.0,
                0.0, 0.0, vector3.z,
                0.0, 0.0, 0.0
              );
    return this;
  }

  public rotateX(angle: number): Matrix4x3 {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  1.0,  0.0,  0.0,
                0.0,  cos,  sin,
                0.0, -sin,  cos,
                0.0,  0.0,  0.0
              );
    return this;
  }

  public rotateY(angle: number): Matrix4x3 {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  cos,  0.0, -sin,
                0.0,  1.0,  0.0,
                sin,  0.0,  cos,
                0.0,  0.0,  0.0
              );
    return this;
  }

  public rotateZ(angle: number): Matrix4x3 {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  cos,  sin,  0.0,
               -sin,  cos,  0.0,
                0.0,  0.0,  1.0,
                0.0,  0.0,  0.0
              );
    return this;
  }

  public translate(vector3: Vector3): Matrix4x3 {
    this.make(  1.0,        0.0,        0.0,
                0.0,        1.0,        0.0,
                0.0,        0.0,        1.0,
                vector3.x, vector3.y, vector3.z
              );
    return this;
  }

  public multiply(matrix4x3: Matrix4x3): Matrix4x3 {
    let m1 = this.m;
    let m2 = matrix4x3.m;
    this.make(m1[0]*m2[ 0] + m1[4]*m2[ 1] + m1[ 8]*m2[2],
              m1[1]*m2[ 0] + m1[5]*m2[ 1] + m1[ 9]*m2[2],
              m1[2]*m2[ 0] + m1[6]*m2[ 1] + m1[10]*m2[2],

              m1[0]*m2[ 4] + m1[4]*m2[ 5] + m1[ 8]*m2[6],
              m1[1]*m2[ 4] + m1[5]*m2[ 5] + m1[ 9]*m2[6],
              m1[2]*m2[ 4] + m1[6]*m2[ 5] + m1[10]*m2[6],

              m1[0]*m2[ 8] + m1[4]*m2[ 9] + m1[ 8]*m2[10],
              m1[1]*m2[ 8] + m1[5]*m2[ 9] + m1[ 9]*m2[10],
              m1[2]*m2[ 8] + m1[6]*m2[ 9] + m1[10]*m2[10],

              m1[0]*m2[12] + m1[4]*m2[13] + m1[ 8]*m2[14] + m1[12],
              m1[1]*m2[12] + m1[5]*m2[13] + m1[ 9]*m2[14] + m1[13],
              m1[2]*m2[12] + m1[6]*m2[13] + m1[10]*m2[14] + m1[14]
            );
    return this;
  }

  public lookAtRH(eye: Vector3, target: Vector3, up: Vector3): Matrix4x3 {

    this.zAxis.set(eye).subtract(target).normalize(); // The "forward" vector.
    this.xAxis.set(up).cross(this.zAxis).normalize(); // The "right" vector.
    this.yAxis.set(this.zAxis).cross(this.xAxis);// The "up" vector.

    // Create a view matrix from the right, up, forward and eye position vectors
    this.make( this.xAxis.x, this.yAxis.x, this.zAxis.x,
               this.xAxis.y, this.yAxis.y, this.zAxis.y,
               this.xAxis.z, this.yAxis.z, this.zAxis.z,
              -this.xAxis.dotProduct(eye), -this.yAxis.dotProduct(eye), -this.zAxis.dotProduct(eye)
              );
    return this;
	}

};
