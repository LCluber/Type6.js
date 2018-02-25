
import {Trigonometry} from '../trigonometry';
import {Utils} from '../utils';
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
    this.m[ 0] = Utils.validate(x1);
    this.m[ 1] = Utils.validate(x2);
    this.m[ 2] = Utils.validate(x3);
    this.m[ 3] = 0.0;
    this.m[ 4] = Utils.validate(y1);
    this.m[ 5] = Utils.validate(y2);
    this.m[ 6] = Utils.validate(y3);
    this.m[ 7] = 0.0;
    this.m[ 8] = Utils.validate(z1);
    this.m[ 9] = Utils.validate(z2);
    this.m[10] = Utils.validate(z3);
    this.m[11] = 0.0;
    this.m[12] = Utils.validate(t1);
    this.m[13] = Utils.validate(t2);
    this.m[14] = Utils.validate(t3);
    this.m[15] = 1.0;
  }
  
  public copy(matrix4x3: Matrix4x3 ): void {
    let m = matrix4x3.m;
    this.make(  m[ 0],  m[ 1],  m[ 2],
                m[ 4],  m[ 5],  m[ 6],
                m[ 8],  m[ 9],  m[10],
                m[12],  m[13],  m[14]
              );
  }

  public toString(): string {
    return  '('
      +  this.m[ 0] + ',' + this.m[ 1] + ',' + this.m[ 2] + ',' + this.m[ 3] + ';'
      + this.m[ 4] + ',' + this.m[ 5] + ',' + this.m[ 6] + ',' + this.m[ 7] + ';'
      + this.m[ 8] + ',' + this.m[ 9] + ',' + this.m[10] + ',' + this.m[11] + ';'
      + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
  }

  public identity(): void {
    this.make(  1.0,  0.0,  0.0,
                0.0,  1.0,  0.0,
                0.0,  0.0,  1.0,
                0.0,  0.0,  0.0
              );
  }

  public scale(vector3: Vector3): void {
    this.make(  vector3.x, 0.0, 0.0,
                0.0, vector3.y, 0.0,   
                0.0, 0.0, vector3.z,
                0.0, 0.0, 0.0
              );
  }

  public rotateX(angle: number): void {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  1.0,  0.0,  0.0,
                0.0,  cos,  sin,
                0.0, -sin,  cos,
                0.0,  0.0,  0.0
              );
  }

  public rotateY(angle: number): void {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  cos,  0.0, -sin,
                0.0,  1.0,  0.0,
                sin,  0.0,  cos,
                0.0,  0.0,  0.0
              );
  }

  public rotateZ(angle: number): void {
    var cos = Trigonometry.cosine(angle);
    var sin = Trigonometry.sine(angle);
    this.make(  cos,  sin,  0.0,
               -sin,  cos,  0.0,
                0.0,  0.0,  1.0,
                0.0,  0.0,  0.0
              );
  }

  public translate(vector3: Vector3): void {
    this.make(  1.0,        0.0,        0.0,
                0.0,        1.0,        0.0,
                0.0,        0.0,        1.0,
                vector3.x, vector3.y, vector3.z
              );
  }

  public multiply(matrix4x3: Matrix4x3): void {
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
  }

  public lookAtRH(eye: Vector3, target: Vector3, up: Vector3): void {
  
    this.zAxis.subtractVectors(eye, target).normalize(); // The "forward" vector.
    this.xAxis.crossVectors(up,this.zAxis).normalize(); // The "right" vector.
    this.yAxis.crossVectors(this.zAxis,this.xAxis);// The "up" vector.
  
    // Create a view matrix from the right, up, forward and eye position vectors
    this.make( this.xAxis.x, this.yAxis.x, this.zAxis.x,
               this.xAxis.y, this.yAxis.y, this.zAxis.y,
               this.xAxis.z, this.yAxis.z, this.zAxis.z,
              -this.xAxis.dotProduct(eye), -this.yAxis.dotProduct(eye), -this.zAxis.dotProduct(eye)
              );
	}

  // /**
  // * Create an identity matrix
  // * @since 0.3.0
  // * @method
  // * @param {float} [x1 = 0.0] x1
  // * @param {float} [x2 = 0.0] x2
  // * @param {float} [x3 = 0.0] x3
  // * @param {float} [y1 = 0.0] y1
  // * @param {float} [y2 = 0.0] y2
  // * @param {float} [y3 = 0.0] y3
  // * @param {float} [z1 = 0.0] z1
  // * @param {float} [z2 = 0.0] z2
  // * @param {float} [z3 = 0.0] z3
  // * @param {float} [t1 = 0.0] t1
  // * @param {float} [t2 = 0.0] t2
  // * @param {float} [t3 = 0.0] t3
  // * @returns {Matrix4x3}
  // */
  // createIdentity: function() {
  //   var _this   = Object.create(this);
  //   _this.identity();
  //   return _this;
  // },

  // public fromArray(matrix4x3: Matrix4x3): void {
  //   _this.m = new Float32Array(16);
  //   _this.make( m[ 0],  m[ 1],  m[ 2],
  //               m[ 3],  m[ 4],  m[ 5],
  //               m[ 6],  m[ 7],  m[ 8],
  //               m[ 9],  m[10],  m[11]
  //             );
  //   return _this;
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

  


  // zero: function(){
  //   this.make(  0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

  // /**
  // * Export the matrice into an array
  // * @since 0.3.0
  // * @method
  // * @returns {array(2)} an array of floats with array[0] as x and array[1] as y.
  // */
  // toArray: function(){
  //   return this.m;
  // },


  // /**
  // * Scale the matrix.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // scale: function(vector3) {
  //   return this.create(
  //               vector3.getX(),  0.0,              0.0,              0.0,
  //               0.0,              vector3.getY(),  0.0,              0.0,
  //               0.0,              0.0,              vector3.getZ(),  0.0,
  //               0.0,              0.0,              0.0,              1.0
  //             );
  // },

  // /**
  // * Rotate the matrix on the X axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateX : function(angle){
  //   var cos = TYPE6.Trigonometry.cosine(angle);
  //   var sin = TYPE6.Trigonometry.sine(angle);
  //   return this.create(
  //               1.0,  0.0,  0.0,  0.0,
  //               0.0,  cos,  sin,  0.0,
  //               0.0, -sin,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

  // /**
  // * Rotate the matrix on the Y axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateY : function(angle){
  //   var cos = TYPE6.Trigonometry.cosine(angle);
  //   var sin = TYPE6.Trigonometry.sine(angle);
  //   return this.create(
  //               cos,  0.0, -sin,  0.0,
  //               0.0,  1.0,  0.0,  0.0,
  //               sin,  0.0,  cos,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

  // /**
  // * Rotate the matrix on the Z axis.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // rotateZ : function(angle){
  //   var cos = TYPE6.Trigonometry.cosine(angle);
  //   var sin = TYPE6.Trigonometry.sine(angle);
  //   return this.create(
  //               cos,  sin,  0.0,  0.0,
  //              -sin,  cos,  0.0,  0.0,
  //               0.0,  0.0,  1.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

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

};
