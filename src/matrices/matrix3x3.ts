import {Trigonometry} from '../trigonometry';
import {Vector2} from '../vectors/vector2';

export class Matrix3x3 {

  private m: Float32Array;

  constructor(  x1?:number, x2?:number, x3?:number,
                y1?:number, y2?:number, y3?:number,
                t1?:number, t2?:number, t3?:number
              ) {
    this.m = new Float32Array(9);
    this.make(  x1, x2, x3,
                y1, y2, y3,
                t1, t2, t3
              );
  }

  private make( x1?:number, x2?:number, x3?:number,
                y1?:number, y2?:number, y3?:number,
                t1?:number, t2?:number, t3?:number
              ): void {
    this.m[ 0] = x1||0.0;
    this.m[ 1] = x2||0.0;
    this.m[ 2] = x3||0.0;
    this.m[ 3] = y1||0.0;
    this.m[ 4] = y2||0.0;
    this.m[ 5] = y3||0.0;
    this.m[ 6] = t1||0.0;
    this.m[ 7] = t2||0.0;
    this.m[ 8] = t3||0.0;
  }

  public copy(matrix3x3: Matrix3x3 ): Matrix3x3 {
    let m = matrix3x3.m;
    this.make(  m[ 0],  m[ 1],  m[ 2],
                m[ 3],  m[ 4],  m[ 5],
                m[ 6],  m[ 7],  m[ 8]
              );
    return this;
  }

  public toArray(): Float32Array {
    return this.m;
  }

  public toString(): string {
    return '(' +  this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ';' +
                  this.m[3] + ',' + this.m[4] + ',' + this.m[5] + ';' +
                  this.m[6] + ',' + this.m[7] + ',' + this.m[8] + ')';
  }

  public identity(): Matrix3x3 {
    this.make(  1.0,  0.0,  0.0,
                0.0,  1.0,  0.0,
                0.0,  0.0,  1.0
              );
    return this;
  }

  public scale(vector2: Vector2): Matrix3x3 {
    this.make(  vector2.x, 0.0, 0.0,
                0.0, vector2.y, 0.0,
                0.0, 0.0, 1.0
              );
    return this;
  }

  public rotate(angle: number): Matrix3x3 {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  cos,  sin, 0.0,
                -sin,  cos, 0.0,
                0.0,  0.0,  1.0
              );
    return this;
  }

  public translate(vector2: Vector2): Matrix3x3 {
    this.make(  1.0,        0.0,        0.0,
                0.0,        1.0,        0.0,
                vector2.x, vector2.y,   1.0
              );
    return this;
  }

  public multiply(matrix3x3: Matrix3x3): Matrix3x3 {
    let m1 = this.m;
    let m2 = matrix3x3.m;
    this.make(m1[0]*m2[0] + m1[3]*m2[1] + m1[6]*m2[2],
              m1[1]*m2[0] + m1[4]*m2[1] + m1[7]*m2[2],
              m1[2]*m2[0] + m1[5]*m2[1] + m1[8]*m2[2],

              m1[0]*m2[3] + m1[3]*m2[4] + m1[6]*m2[5],
              m1[1]*m2[3] + m1[4]*m2[4] + m1[7]*m2[5],
              m1[2]*m2[3] + m1[5]*m2[4] + m1[8]*m2[5],

              m1[0]*m2[6] + m1[3]*m2[7] + m1[6]*m2[8],
              m1[1]*m2[6] + m1[4]*m2[7] + m1[7]*m2[8],
              m1[2]*m2[6] + m1[5]*m2[7] + m1[8]*m2[8]
            );
    return this;
  }

};
