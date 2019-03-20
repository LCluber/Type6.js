
import {Trigonometry} from '../trigonometry';
import {Utils} from '../utils';
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
    this.m[ 0] = Utils.validate(x1||0.0);
    this.m[ 1] = Utils.validate(x2||0.0);
    this.m[ 2] = Utils.validate(x3||0.0);
    this.m[ 3] = Utils.validate(x4||0.0);
    this.m[ 4] = Utils.validate(y1||0.0);
    this.m[ 5] = Utils.validate(y2||0.0);
    this.m[ 6] = Utils.validate(y3||0.0);
    this.m[ 7] = Utils.validate(y4||0.0);
    this.m[ 8] = Utils.validate(z1||0.0);
    this.m[ 9] = Utils.validate(z2||0.0);
    this.m[10] = Utils.validate(z3||0.0);
    this.m[11] = Utils.validate(z4||0.0);
    this.m[12] = Utils.validate(t1||0.0);
    this.m[13] = Utils.validate(t2||0.0);
    this.m[14] = Utils.validate(t3||0.0);
    this.m[15] = Utils.validate(t4||0.0);
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

  // /**
  // * Create a matrix from an array
  // * @since 0.3.0
  // * @method
  // * @param {array(12)} An array of floats.
  // * @returns {Matrix4x4}
  // */
  // createFromArray : function(m){
  //   var _this = Object.create(this);
  //   _this.m = new Float32Array(16);
  //   _this.make( m[ 0],  m[ 1],  m[ 2],  m[ 3],
  //               m[ 4],  m[ 5],  m[ 6],  m[ 7],
  //               m[ 8],  m[ 9],  m[10],  m[11],
  //               m[12],  m[13],  m[14],  m[15]
  //             );
  //   return _this;
  // },

  // /**
  // * Create an identity matrix
  // * @since 0.3.0
  // * @method
  // * @param {float} [x1 = 0.0] x1
  // * @param {float} [x2 = 0.0] x2
  // * @param {float} [x3 = 0.0] x3
  // * @param {float} [x4 = 0.0] x4
  // * @param {float} [y1 = 0.0] y1
  // * @param {float} [y2 = 0.0] y2
  // * @param {float} [y3 = 0.0] y3
  // * @param {float} [y4 = 0.0] y4
  // * @param {float} [z1 = 0.0] z1
  // * @param {float} [z2 = 0.0] z2
  // * @param {float} [z3 = 0.0] z3
  // * @param {float} [z4 = 0.0] z4
  // * @param {float} [t1 = 0.0] t1
  // * @param {float} [t2 = 0.0] t2
  // * @param {float} [t3 = 0.0] t3
  // * @param {float} [t4 = 0.0] t4
  // * @returns {Matrix4x4}
  // */
  // createIdentity: function() {
  //   var _this   = Object.create(this);
  //   _this.identity();
  //   return _this;
  // },


  // zero: function(){
  //   this.make(  0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

  // /**
  // * returns the matrix as Array.
  // * @since 0.3.0
  // * @method
  // * @private
  // * @returns {array}
  // */
  // toArray: function(){
  //   return this.m;
  // },

  // /**
  // * Rotate the matrix on the X axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateX : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   return this.create(
  //               1.0,  0.0,  0.0,  0.0,
  //               0.0,  cos,  sin,  0.0,
  //               0.0, -sin,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * Rotate the matrix on the Y axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateY : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   return this.create(
  //               cos,  0.0, -sin,  0.0,
  //               0.0,  1.0,  0.0,  0.0,
  //               sin,  0.0,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * Rotate the matrix on the Z axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateZ : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   return this.create(
  //               cos,  sin,  0.0,  0.0,
  //              -sin,  cos,  0.0,  0.0,
  //               0.0,  0.0,  1.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * Translation matrix.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // translate : function(vector3){
  //   return this.create(
  //               1.0,              0.0,              0.0,              0.0,
  //               0.0,              1.0,              0.0,              0.0,
  //               0.0,              0.0,              1.0,              0.0,
  //               vector3.getX(),  vector3.getY(),  vector3.getZ(),  1.0
  //             );
  // },

  // /**
  // * Multiply the matrix.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // multiply: function(m){
  //   return this.create(
  //             this.m[0]*m.m[ 0] + this.m[4]*m.m[ 1] + this.m[ 8]*m.m[ 2],
  //             this.m[1]*m.m[ 0] + this.m[5]*m.m[ 1] + this.m[ 9]*m.m[ 2],
  //             this.m[2]*m.m[ 0] + this.m[6]*m.m[ 1] + this.m[10]*m.m[ 2],
  //             0.0,
  //
  //             this.m[0]*m.m[ 4] + this.m[4]*m.m[ 5] + this.m[ 8]*m.m[ 6],
  //             this.m[1]*m.m[ 4] + this.m[5]*m.m[ 5] + this.m[ 9]*m.m[ 6],
  //             this.m[2]*m.m[ 4] + this.m[6]*m.m[ 5] + this.m[10]*m.m[ 6],
  //             0.0,
  //
  //             this.m[0]*m.m[ 8] + this.m[4]*m.m[ 9] + this.m[ 8]*m.m[10],
  //             this.m[1]*m.m[ 8] + this.m[5]*m.m[ 9] + this.m[ 9]*m.m[10],
  //             this.m[2]*m.m[ 8] + this.m[6]*m.m[ 9] + this.m[10]*m.m[10],
  //             0.0,
  //
  //             this.m[0]*m.m[12] + this.m[4]*m.m[13] + this.m[ 8]*m.m[14] + this.m[12],
  //             this.m[1]*m.m[12] + this.m[5]*m.m[13] + this.m[ 9]*m.m[14] + this.m[13],
  //             this.m[2]*m.m[12] + this.m[6]*m.m[13] + this.m[10]*m.m[14] + this.m[14],
  //             1.0
  //           );
  //
  // },

  // /**
  // * sScale by a vector3
  // * @since 0.3.0
  // * @method
  // * @param {Vector3} vector3 the vector3 to scale by.
  // * @returns {boolean}
  // */
  // scaleBy: function(vector3) {
  //   this.make(  vector3.getX(),  0.0,              0.0,              0.0,
  //               0.0,              vector3.getY(),  0.0,              0.0,
  //               0.0,              0.0,              vector3.getZ(),  0.0,
  //               0.0,              0.0,              0.0,              1.0
  //             );
  // },
  //
  // /**
  // * Rotate the matrix on the X axis
  // * @since 0.3.0
  // * @method
  // * @param {float} angle the angle to rotate by.
  // * @returns {boolean}
  // */
  // rotateXBy : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   this.make(
  //               1.0,  0.0,  0.0,  0.0,
  //               0.0,  cos,  sin,  0.0,
  //               0.0, -sin,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * Rotate the matrix on the Y axis
  // * @since 0.3.0
  // * @method
  // * @param {float} angle the angle to rotate by.
  // * @returns {boolean}
  // */
  // rotateYBy : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   this.make(
  //               cos,  0.0, -sin,  0.0,
  //               0.0,  1.0,  0.0,  0.0,
  //               sin,  0.0,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * Rotate the matrix on the Z axis
  // * @since 0.3.0
  // * @method
  // * @param {float} angle the angle to rotate by.
  // * @returns {boolean}
  // */
  // rotateZBy : function(angle){
  //   var cos = TYPE6JS.Trigonometry.cosine(angle);
  //   var sin = TYPE6JS.Trigonometry.sine(angle);
  //   this.make(  cos,  sin,  0.0,  0.0,
  //              -sin,  cos,  0.0,  0.0,
  //               0.0,  0.0,  1.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },
  //
  // /**
  // * set cosine decimals precision.
  // * @since 0.3.0
  // * @method
  // * @param {Vector3} vector3 the vector to translate by.
  // * @returns {boolean}
  // */
  // translateTo : function(vector3){
  //   this.make(  1.0,              0.0,              0.0,              0.0,
  //               0.0,              1.0,              0.0,              0.0,
  //               0.0,              0.0,              1.0,              0.0,
  //               vector3.getX(),  vector3.getY(),  vector3.getZ(),  1.0
  //             );
  // },



  // /**
  // * Make inverse.
  // * @since 0.3.0
  // * @method
  // * @param {matrix}  the matrix to invert.
  // * @returns {boolean}
  // */
  // makeInverseRigidBody : function(m) {
	// 	// Inv(M) = Inv(Rot*Trans) = Inv(Rot) * Inv(Trans) = Transpose(Rot) * -T
	// 	// Invert translation
	// 	var it0 = -m.m[12];
	// 	var it1 = -m.m[13];
	// 	var it2 = -m.m[14];
  //
	// 	// Calculate the translation
	// 	this.m[12] = m.m[0] * it0 + m.m[1] * it1 + m.m[2] * it2;
	// 	this.m[13] = m.m[4] * it0 + m.m[5] * it1 + m.m[6] * it2;
	// 	this.m[14] = m.m[8] * it0 + m.m[9] * it1 + m.m[10] * it2;
  //
	// 	// Calculate the rotation (transpose)
	// 	this.m[ 0] = m.m[ 0];
	// 	this.m[ 1] = m.m[ 4];
	// 	this.m[ 2] = m.m[ 8];
	// 	this.m[ 4] = m.m[ 1];
	// 	this.m[ 5] = m.m[ 5];
	// 	this.m[ 6] = m.m[ 9];
	// 	this.m[ 8] = m.m[ 2];
	// 	this.m[ 9] = m.m[ 6];
	// 	this.m[10] = m.m[10];
  // },

  // /**
  // * camera view
  // * @since 0.3.0
  // * @method
  // * @param {float} eye value to validate.
  // * @param {float} target value to validate.
  // * @param {float} up value to validate.
  // * @returns {boolean}
  // */
  // lookAtRH : function(eye, target, up){
  //
	// 	var zaxis = eye.subtractRV(target); // The "forward" vector.
	// 	zaxis.normalize();
  //
	// 	var xaxis = up.cross(zaxis); // The "right" vector.
	// 	xaxis.normalize();
  //
	// 	var yaxis = zaxis.cross(xaxis);// The "up" vector.
  //
	// 	//var ex = new Vector3(xaxis.x, xaxis.y, xaxis.z); //-Vector3.Dot(xAxis, eye);
  //       //var ey = new Vector3(yaxis.x, yaxis.y, yaxis.z); //-Vector3.Dot(yAxis, eye);
  //       //var ez = new Vector3(zaxis.x, zaxis.y, zaxis.z); //-Vector3.Dot(zAxis, eye);
  //
	// 	// Create a 4x4 view matrix from the right, up, forward and eye position vectors
	// 	this.make(	xaxis.x,		yaxis.x,		zaxis.x,		0.0,
  //            		xaxis.y,		yaxis.y,		zaxis.y,		0.0,
  //            		xaxis.z,		yaxis.z,		zaxis.z,		0.0,
  //      				-xaxis.dot(eye), -yaxis.dot(eye), -zaxis.dot(eye), 1.0);
	// },

}

// makePerspective: function ( fov, aspect, near, far ) {
//
//   var ymax = near * Math.tan( _Math.DEG2RAD * fov * 0.5 );
//   var ymin = - ymax;
//   var xmin = ymin * aspect;
//   var xmax = ymax * aspect;
//
//   return this.makeFrustum( xmin, xmax, ymin, ymax, near, far );
//
// },

// makeOrthographic: function ( left, right, top, bottom, near, far ) {
//
//   var te = this.elements;
//   var w = 1.0 / ( right - left );
//   var h = 1.0 / ( top - bottom );
//   var p = 1.0 / ( far - near );
//
//   var x = ( right + left ) * w;
//   var y = ( top + bottom ) * h;
//   var z = ( far + near ) * p;
//
//   te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
//   te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
//   te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
//   te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;
//
//   return this;
//
// },
