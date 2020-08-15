
import {Trigonometry} from '../trigonometry';
import {Vector3} from '../vectors/vector3';

export class Matrix4x4 {

  private m: Float32Array;
  //utility vectors for lookAtRH method
  // private xAxis: Vector3;
  // private yAxis: Vector3;
  // private zAxis: Vector3;

  constructor(  x1?:number, x2?:number, x3?:number, x4?:number,
                y1?:number, y2?:number, y3?:number, y4?:number,
                z1?:number, z2?:number, z3?:number, z4?:number,
                t1?:number, t2?:number, t3?:number, t4?:number
              ) {
    this.m = new Float32Array(16);
    //utility vectors for lookAtRH method
    // this.xAxis = new Vector3();
    // this.yAxis = new Vector3();
    // this.zAxis = new Vector3();
    this.make(  x1, x2, x3, x4,
                y1, y2, y3, y4,
                z1, z2, z3, z4,
                t1, t2, t3, t4
              );
  }

  private make( x1?:number, x2?:number, x3?:number, x4?:number,
                y1?:number, y2?:number, y3?:number, y4?:number,
                z1?:number, z2?:number, z3?:number, z4?:number,
                t1?:number, t2?:number, t3?:number, t4?:number
              ): void {
    this.m[ 0] = x1||0.0;
    this.m[ 1] = x2||0.0;
    this.m[ 2] = x3||0.0;
    this.m[ 3] = x4||0.0;
    this.m[ 4] = y1||0.0;
    this.m[ 5] = y2||0.0;
    this.m[ 6] = y3||0.0;
    this.m[ 7] = y4||0.0;
    this.m[ 8] = z1||0.0;
    this.m[ 9] = z2||0.0;
    this.m[10] = z3||0.0;
    this.m[11] = z4||0.0;
    this.m[12] = t1||0.0;
    this.m[13] = t2||0.0;
    this.m[14] = t3||0.0;
    this.m[15] = t4||0.0;
  }

  public copy(matrix4x4: Matrix4x4 ): Matrix4x4 {
    let m = matrix4x4.m;
    this.make(  m[ 0],  m[ 1],  m[ 2], m[ 3],
                m[ 4],  m[ 5],  m[ 6], m[ 7],
                m[ 8],  m[ 9],  m[10], m[11],
                m[12],  m[13],  m[14], m[15]
              );
    return this;
  }

  public toArray(): Float32Array{
    return this.m;
  }

  public toString(): string {
    return '('
      +  this.m[ 0] + ',' + this.m[ 1] + ',' + this.m[ 2] + ',' + this.m[ 3] + ';'
      + this.m[ 4] + ',' + this.m[ 5] + ',' + this.m[ 6] + ',' + this.m[ 7] + ';'
      + this.m[ 8] + ',' + this.m[ 9] + ',' + this.m[10] + ',' + this.m[11] + ';'
      + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
  }

  public identity(): Matrix4x4 {
    this.make(  1.0,  0.0,  0.0,  0.0,
                0.0,  1.0,  0.0,  0.0,
                0.0,  0.0,  1.0,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
    return this;
  }

  public scale(vector3: Vector3): Matrix4x4 {
    this.make(  vector3.x, 0.0, 0.0, 0.0,
                0.0, vector3.y, 0.0, 0.0,
                0.0, 0.0, vector3.z, 0.0,
                0.0, 0.0, 0.0,        1.0
              );
    return this;
  }

  public rotateX(angle: number): Matrix4x4 {
    let cos = Trigonometry.cosine(angle);
    let sin = Trigonometry.sine(angle);
    this.make(  1.0,  0.0,  0.0,  0.0,
                0.0,  cos,  sin,  0.0,
                0.0, -sin,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
    return this;
  }

  public rotateY(angle: number): Matrix4x4 {
    let cos = Trigonometry.cosine(angle);
    let sin = Trigonometry.sine(angle);
    this.make(  cos,  0.0, -sin,  0.0,
                0.0,  1.0,  0.0,  0.0,
                sin,  0.0,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
    return this;
  }

  public rotateZ(angle: number): Matrix4x4 {
    let cos = Trigonometry.cosine(angle);
    let sin = Trigonometry.sine(angle);
    this.make(  cos,  sin,  0.0,  0.0,
               -sin,  cos,  0.0,  0.0,
                0.0,  0.0,  1.0,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
    return this;
  }

  public translate(vector3: Vector3): Matrix4x4 {
    this.make(  1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                vector3.x, vector3.y, vector3.z, 1.0
              );
    return this;
  }

  public multiply(matrix4x4: Matrix4x4): Matrix4x4 {
    let m1 = this.m;
    let m2 = matrix4x4.m;
    this.make(m1[0]*m2[ 0] + m1[4]*m2[ 1] + m1[ 8]*m2[2],
              m1[1]*m2[ 0] + m1[5]*m2[ 1] + m1[ 9]*m2[2],
              m1[2]*m2[ 0] + m1[6]*m2[ 1] + m1[10]*m2[2],
              0.0,

              m1[0]*m2[ 4] + m1[4]*m2[ 5] + m1[ 8]*m2[6],
              m1[1]*m2[ 4] + m1[5]*m2[ 5] + m1[ 9]*m2[6],
              m1[2]*m2[ 4] + m1[6]*m2[ 5] + m1[10]*m2[6],
              0.0,

              m1[0]*m2[ 8] + m1[4]*m2[ 9] + m1[ 8]*m2[10],
              m1[1]*m2[ 8] + m1[5]*m2[ 9] + m1[ 9]*m2[10],
              m1[2]*m2[ 8] + m1[6]*m2[ 9] + m1[10]*m2[10],
              0.0,

              m1[0]*m2[12] + m1[4]*m2[13] + m1[ 8]*m2[14] + m1[12],
              m1[1]*m2[12] + m1[5]*m2[13] + m1[ 9]*m2[14] + m1[13],
              m1[2]*m2[12] + m1[6]*m2[13] + m1[10]*m2[14] + m1[14],
              1.0
            );
    return this;
  }

  public perspective(fovy:number, aspect:number, znear:number, zfar:number): Matrix4x4 {
    // var top = znear * Math.tan(fovy * Math.PI / 360.0);
    // var bottom = -top;
    // var left = bottom * aspect;
    // var right = top * aspect;
    //
    // var X = 2*znear/(right-left);
    // var Y = 2*znear/(top-bottom);
    // var A = (right+left)/(right-left);
    // var B = (top+bottom)/(top-bottom);
    // var C = -(zfar+znear)/(zfar-znear);
    // var D = -2*zfar*znear/(zfar-znear);
    //
    // this.make(X,0,0,0, 0,Y,0,0, A,B,C,-1, 0,0,D,0);

    let f = Math.tan(Trigonometry.halfpi - 0.5 * fovy * Trigonometry.pi / 180);
    let rangeInv = 1.0 / (znear - zfar);

    this.make( f/aspect, 0.0, 0.0, 0.0,
               0.0, f, 0.0,  0.0,
               0.0, 0.0, (znear+zfar)*rangeInv,-1.0,
               0.0, 0.0, znear*zfar*rangeInv*2, 0.0
            );
    return this;

  }

  public orthographic(left:number, right:number, top:number, bottom:number, near:number, far:number ): Matrix4x4 {

    //var te = this.elements;
    var w = right - left;
    var h = top - bottom;
    var p = far - near;

    var x = ( right + left ) / w;
    var y = ( top + bottom ) / h;
    var z = ( far + near ) / p;

    this.make(  2/w, 0.0, 0.0,  0.0,
                0.0, 2/h, 0.0,  0.0,
                0.0, 0.0, -2/p, 0.0,
                -x,  -y,  -z,   1.0
             );

    return this;

  }
}
