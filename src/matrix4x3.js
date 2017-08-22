
/**
* @class
* @classdesc A class that represents a four dimensions Matrix.
*/
TYPE6.Matrix4x3 = {
  /**
  * @since 0.3.0
  * @access private
  */
  m : new Float32Array(16),


  /**
  * Create a matrix
  * @since 0.3.0
  * @method
  * @param {float} [x1 = 0.0] x1
  * @param {float} [x2 = 0.0] x2
  * @param {float} [x3 = 0.0] x3
  * @param {float} [y1 = 0.0] y1
  * @param {float} [y2 = 0.0] y2
  * @param {float} [y3 = 0.0] y3
  * @param {float} [z1 = 0.0] z1
  * @param {float} [z2 = 0.0] z2
  * @param {float} [z3 = 0.0] z3
  * @param {float} [t1 = 0.0] t1
  * @param {float} [t2 = 0.0] t2
  * @param {float} [t3 = 0.0] t3
  * @returns {Matrix4x3}
  */
  create: function(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
    var _this   = Object.create(this);
    _this.m = new Float32Array(16);
    _this.make( x1, x2, x3,
                y1, y2, y3,
                z1, z2, z3,
                t1, t2, t3
              );
    return _this;
  
  },

  /**
  * Create a matrix from an array
  * @since 0.3.0
  * @method
  * @param {array(12)} An array of floats.
  * @returns {Matrix4x3}
  */
  createFromArray : function(m){
    var _this = Object.create(this);
    _this.m = new Float32Array(16);
    _this.make( m[ 0],  m[ 1],  m[ 2],
                m[ 3],  m[ 4],  m[ 5],
                m[ 6],  m[ 7],  m[ 8],
                m[ 9],  m[10],  m[11]
              );
    return _this;
  },
  
  copy : function(matrix4x3){
    var m = matrix4x3.toArray();
    this.make(  m[ 0],  m[ 1],  m[ 2],
                m[ 4],  m[ 5],  m[ 6],
                m[ 8],  m[ 9],  m[10],
                m[12],  m[13],  m[14]
              );
  },

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


  /**
  * make a matrix.
  * @since 0.3.0
  * @method
  * @private
  * @param {float} [x1 = 0.0] x1
  * @param {float} [x2 = 0.0] x2
  * @param {float} [x3 = 0.0] x3
  * @param {float} [y1 = 0.0] y1
  * @param {float} [y2 = 0.0] y2
  * @param {float} [y3 = 0.0] y3
  * @param {float} [z1 = 0.0] z1
  * @param {float} [z2 = 0.0] z2
  * @param {float} [z3 = 0.0] z3
  * @param {float} [t1 = 0.0] t1
  * @param {float} [t2 = 0.0] t2
  * @param {float} [t3 = 0.0] t3
  * @returns {boolean}
  */
  make: function(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3){
    this.m[ 0] = this.valueValidation(x1);
    this.m[ 1] = this.valueValidation(x2);
    this.m[ 2] = this.valueValidation(x3);
    this.m[ 3] = 0.0;
    this.m[ 4] = this.valueValidation(y1);
    this.m[ 5] = this.valueValidation(y2);
    this.m[ 6] = this.valueValidation(y3);
    this.m[ 7] = 0.0;
    this.m[ 8] = this.valueValidation(z1);
    this.m[ 9] = this.valueValidation(z2);
    this.m[10] = this.valueValidation(z3);
    this.m[11] = 0.0;
    this.m[12] = this.valueValidation(t1);
    this.m[13] = this.valueValidation(t2);
    this.m[14] = this.valueValidation(t3);
    this.m[15] = 1.0;
  },
  
  /**
  * returns the matrix as Array.
  * @since 0.3.0
  * @method
  * @private
  * @returns {array}
  */
  toArray: function(){
    return this.m;
  },

  /**
  * export the matrix as a string
  * @since 0.3.0
  * @method
  * @returns {string}
  */
  toString: function () {
    return '(' +  this.m[ 0] + ',' + this.m[ 1] + ',' + this.m[ 2] + ',' + this.m[ 3] + ';' +
                  this.m[ 4] + ',' + this.m[ 5] + ',' + this.m[ 6] + ',' + this.m[ 7] + ';' +
                  this.m[ 8] + ',' + this.m[ 9] + ',' + this.m[10] + ',' + this.m[11] + ';' +
                  this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
  },


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

  /**
  * create an identity matrix.
  * @since 0.3.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  identity: function() {
      this.make(  1.0,  0.0,  0.0,
                  0.0,  1.0,  0.0,
                  0.0,  0.0,  1.0,
                  0.0,  0.0,  0.0
                );
  },

  // /**
  // * Scale the matrix.
  // * @since 0.3.0
  // * @method
  // * @param {float} the value to validate.
  // * @returns {boolean}
  // */
  // scale: function(vector3D) {
  //   return this.create(
  //               vector3D.getX(),  0.0,              0.0,              0.0,
  //               0.0,              vector3D.getY(),  0.0,              0.0,
  //               0.0,              0.0,              vector3D.getZ(),  0.0,
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
  // translate : function(vector3D){
  //   return this.create(
  //               1.0,              0.0,              0.0,              0.0,
  //               0.0,              1.0,              0.0,              0.0,
  //               0.0,              0.0,              1.0,              0.0,
  //               vector3D.getX(),  vector3D.getY(),  vector3D.getZ(),  1.0
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
  // * sScale by a vector3D
  // * @since 0.3.0
  // * @method
  // * @param {Vector3D} vector3D the vector3D to scale by.
  // * @returns {boolean}
  // */
  // scaleBy: function(vector3D) {
  //   this.make(  vector3D.getX(),  0.0,              0.0,              0.0,
  //               0.0,              vector3D.getY(),  0.0,              0.0,
  //               0.0,              0.0,              vector3D.getZ(),  0.0,
  //               0.0,              0.0,              0.0,              1.0
  //             );
  // },

  /**
  * Rotate the matrix on the X axis
  * @since 0.3.0
  * @method
  * @param {float} angle the angle to rotate by.
  * @returns {boolean}
  */
  rotateXBy : function(angle){
    var cos = TYPE6.Trigonometry.cosine(angle);
    var sin = TYPE6.Trigonometry.sine(angle);
    this.make(
                1.0,  0.0,  0.0,
                0.0,  cos,  sin,
                0.0, -sin,  cos,
                0.0,  0.0,  0.0
              );
  },

  /**
  * Rotate the matrix on the Y axis
  * @since 0.3.0
  * @method
  * @param {float} angle the angle to rotate by.
  * @returns {boolean}
  */
  rotateYBy : function(angle){
    var cos = TYPE6.Trigonometry.cosine(angle);
    var sin = TYPE6.Trigonometry.sine(angle);
    this.make(
                cos,  0.0, -sin,
                0.0,  1.0,  0.0,
                sin,  0.0,  cos,
                0.0,  0.0,  0.0
              );
  },

  /**
  * Rotate the matrix on the Z axis
  * @since 0.3.0
  * @method
  * @param {float} angle the angle to rotate by.
  * @returns {boolean}
  */
  rotateZBy : function(angle){
    var cos = TYPE6.Trigonometry.cosine(angle);
    var sin = TYPE6.Trigonometry.sine(angle);
    this.make(  cos,  sin,  0.0,
               -sin,  cos,  0.0,
                0.0,  0.0,  1.0,
                0.0,  0.0,  0.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.3.0
  * @method
  * @param {Vector3D} vector3D the vector to translate by.
  * @returns {boolean}
  */
  translateTo : function(vector3D){
    this.make(  1.0,              0.0,              0.0,              0.0,
                0.0,              1.0,              0.0,              0.0,
                0.0,              0.0,              1.0,              0.0,
                vector3D.getX(),  vector3D.getY(),  vector3D.getZ(),  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.3.0
  * @method
  * @param {matrix}  the matrix to invert.
  * @returns {boolean}
  */
  multiplyBy: function(m){
    var m1 = this.toArray();
    var m2 = m.toArray();
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
            //return this;
  },

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

  /**
  * camera view
  * @since 0.3.0
  * @method
  * @param {float} eye value to validate.
  * @param {float} target value to validate.
  * @param {float} up value to validate.
  * @returns {boolean}
  */
  lookAtRH : function(eye, target, up){
  
    var zaxis = eye.subtract(target).normalize(); // The "forward" vector.
  
    var xaxis = up.cross(zaxis).normalize(); // The "right" vector.
  
    var yaxis = zaxis.cross(xaxis);// The "up" vector.
  
    // Create a view matrix from the right, up, forward and eye position vectors
    this.make( xaxis.getX(),    yaxis.getX(),    zaxis.getX(),
               xaxis.getY(),    yaxis.getY(),    zaxis.getY(),
               xaxis.getZ(),    yaxis.getZ(),    zaxis.getZ(),
              -xaxis.dot(eye), -yaxis.dot(eye), -zaxis.dot(eye)
            );
	},
  
  valueValidation: function(value){
    return isNaN(value) ? 0.0 : value;
  }

};
