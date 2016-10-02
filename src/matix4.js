/**
* @class
* @classdesc A class that represents a four dimension Matrix.
*/
TYPE6JS.Matrix4 = {
  /**
  * @since 0.1.0
  * @access private
  */
  m: new Float32Array(16),

  /**
  * A class for vectors computations.
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @returns {Matrix4}
  */
  create: function(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
    var _this   = Object.create(this);
    _this.make( x1, x2, x3, x4,
                y1, y2, y3, y4,
                z1, z2, z3, z4,
                t1, t2, t3, t4
              );
    return _this;

  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Matrix4}
  */
  createFromArray : function(m){
    var _this = Object.create(this);
    _this.make( m[ 0],  m[ 1],  m[ 2],  m[ 3],
                m[ 4],  m[ 5],  m[ 6],  m[ 7],
                m[ 8],  m[ 9],  m[10],  m[11],
                m[12],  m[13],  m[14],  m[15]
              );
    return _this;
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @private
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @returns {boolean}
  */
  make: function(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4){
    this.m[ 0] = this.valueValidation(x1);
    this.m[ 1] = this.valueValidation(x2);
    this.m[ 2] = this.valueValidation(x3);
    this.m[ 3] = this.valueValidation(x4);
    this.m[ 4] = this.valueValidation(y1);
    this.m[ 5] = this.valueValidation(y2);
    this.m[ 6] = this.valueValidation(y3);
    this.m[ 7] = this.valueValidation(y4);
    this.m[ 8] = this.valueValidation(z1);
    this.m[ 9] = this.valueValidation(z2);
    this.m[10] = this.valueValidation(z3);
    this.m[11] = this.valueValidation(z4);
    this.m[12] = this.valueValidation(t1);
    this.m[13] = this.valueValidation(t2);
    this.m[14] = this.valueValidation(t3);
    this.m[15] = this.valueValidation(t4);
  },

  // zero: function(){
  //   this.make(  0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  0.0,
  //               0.0,  0.0,  0.0,  1.0
  //             );
  // },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {array(2)} an array of floats with array[0] as x and array[1] as y.
  */
  toArray: function(){
    return this.m;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {string}
  */
  toString: function () {
    return '(' +  this.m[ 0] + ',' + this.m[ 1] + ',' + this.m[ 2] + ',' + this.m[ 3] + ';' +
                  this.m[ 4] + ',' + this.m[ 5] + ',' + this.m[ 6] + ',' + this.m[ 7] + ';' +
                  this.m[ 8] + ',' + this.m[ 9] + ',' + this.m[10] + ',' + this.m[11] + ';' +
                  this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  identity: function() {
      this.make(  1.0,  0.0,  0.0,  0.0,
                  0.0,  1.0,  0.0,  0.0,
                  0.0,  0.0,  1.0,  0.0,
                  0.0,  0.0,  0.0,  1.0
                );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  scale: function(vector3D) {
    return this.create(
                vector3D.x, 0.0,        0.0,        0.0,
                0.0,        vector3D.y, 0.0,        0.0,
                0.0,        0.0,        vector3D.z, 0.0,
                0.0,        0.0,        0.0,        1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateX : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    return this.create(
                1.0,  0.0,  0.0,  0.0,
                0.0,  cos,  sin,  0.0,
                0.0, -sin,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateY : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    return this.create(
                cos,  0.0, -sin,  0.0,
                0.0,  1.0,  0.0,  0.0,
                sin,  0.0,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateZ : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    return this.create(
                cos,  sin,  0.0,  0.0,
               -sin,  cos,  0.0,  0.0,
                0.0,  0.0,  1.0,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  translate : function(vector3D){
    return this.create(
                1.0,        0.0,        0.0,        0.0,
                0.0,        1.0,        0.0,        0.0,
                0.0,        0.0,        1.0,        0.0,
                vector3D.x, vector3D.y, vector3D.z, 1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  multiply: function(m){
    return this.create(
              this.m[0]*m.m[ 0] + this.m[4]*m.m[ 1] + this.m[ 8]*m.m[ 2],
              this.m[1]*m.m[ 0] + this.m[5]*m.m[ 1] + this.m[ 9]*m.m[ 2],
              this.m[2]*m.m[ 0] + this.m[6]*m.m[ 1] + this.m[10]*m.m[ 2],
              0.0,

              this.m[0]*m.m[ 4] + this.m[4]*m.m[ 5] + this.m[ 8]*m.m[ 6],
              this.m[1]*m.m[ 4] + this.m[5]*m.m[ 5] + this.m[ 9]*m.m[ 6],
              this.m[2]*m.m[ 4] + this.m[6]*m.m[ 5] + this.m[10]*m.m[ 6],
              0.0,

              this.m[0]*m.m[ 8] + this.m[4]*m.m[ 9] + this.m[ 8]*m.m[10],
              this.m[1]*m.m[ 8] + this.m[5]*m.m[ 9] + this.m[ 9]*m.m[10],
              this.m[2]*m.m[ 8] + this.m[6]*m.m[ 9] + this.m[10]*m.m[10],
              0.0,

              this.m[0]*m.m[12] + this.m[4]*m.m[13] + this.m[ 8]*m.m[14] + this.m[12],
              this.m[1]*m.m[12] + this.m[5]*m.m[13] + this.m[ 9]*m.m[14] + this.m[13],
              this.m[2]*m.m[12] + this.m[6]*m.m[13] + this.m[10]*m.m[14] + this.m[14],
              1.0
            );

  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  scaleBy: function(vector3D) {
    this.make(  vector3D.x, 0.0,        0.0,        0.0,
                0.0,        vector3D.y, 0.0,        0.0,
                0.0,        0.0,        vector3D.z, 0.0,
                0.0,        0.0,        0.0,        1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateXBy : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    this.make(
                1.0,  0.0,  0.0,  0.0,
                0.0,  cos,  sin,  0.0,
                0.0, -sin,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateYBy : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    this.make(
                cos,  0.0, -sin,  0.0,
                0.0,  1.0,  0.0,  0.0,
                sin,  0.0,  cos,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  rotateZBy : function(angle){
    var cos = TYPE6JS.Trigonometry.cosine(angle);
    var sin = TYPE6JS.Trigonometry.sine(angle);
    return this.make(
                cos,  sin,  0.0,  0.0,
               -sin,  cos,  0.0,  0.0,
                0.0,  0.0,  1.0,  0.0,
                0.0,  0.0,  0.0,  1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  translateTo : function(vector3D){
    this.make(  1.0,        0.0,        0.0,        0.0,
                0.0,        1.0,        0.0,        0.0,
                0.0,        0.0,        1.0,        0.0,
                vector3D.x, vector3D.y, vector3D.z, 1.0
              );
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  multiplyBy: function(m){
    this.make(this.m[0]*m.m[ 0] + this.m[4]*m.m[ 1] + this.m[ 8]*m.m[2],
              this.m[1]*m.m[ 0] + this.m[5]*m.m[ 1] + this.m[ 9]*m.m[2],
              this.m[2]*m.m[ 0] + this.m[6]*m.m[ 1] + this.m[10]*m.m[2],
              0.0,

              this.m[0]*m.m[ 4] + this.m[4]*m.m[ 5] + this.m[ 8]*m.m[6],
              this.m[1]*m.m[ 4] + this.m[5]*m.m[ 5] + this.m[ 9]*m.m[6],
              this.m[2]*m.m[ 4] + this.m[6]*m.m[ 5] + this.m[10]*m.m[6],
              0.0,

              this.m[0]*m.m[ 8] + this.m[4]*m.m[ 9] + this.m[ 8]*m.m[10],
              this.m[1]*m.m[ 8] + this.m[5]*m.m[ 9] + this.m[ 9]*m.m[10],
              this.m[2]*m.m[ 8] + this.m[6]*m.m[ 9] + this.m[10]*m.m[10],
              0.0,

              this.m[0]*m.m[12] + this.m[4]*m.m[13] + this.m[ 8]*m.m[14] + this.m[12],
              this.m[1]*m.m[12] + this.m[5]*m.m[13] + this.m[ 9]*m.m[14] + this.m[13],
              this.m[2]*m.m[12] + this.m[6]*m.m[13] + this.m[10]*m.m[14] + this.m[14],
              1.0
            );
            //return this;
  },


  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  valueValidation: function(value){
    return isNaN(value) ? 0.0 : value;
  }

};
