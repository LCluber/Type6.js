/**

*/
TYPE6JS.Vector3D = {
  /**
  * @since 0.1.0
  * @access private
  */
  r: 0.0,
  /**
  * @since 0.1.0
  * @access private */
  g: 0.0,
  /**
  * @since 0.1.0
  * @access private */
  b: 0.0,
  /**
  * @since 0.1.0
  * @access private */
  a: 0.0,


  /**
  * Create a 3D vector.
  * @since 0.2.0
  * @method
  * @param {float} [r = 0.0] x The value on the x axis.
  * @param {float} [g = 0.0] y The value on the y axis.
  * @param {float} [b = 0.0] z The value on the z axis.
  * @param {float} [a = 0.0] z The value on the z axis.
  * @returns {Vector3D}
  */
  create: function(r, g, b, a) {
    var _this = Object.create(this);
    _this.setR(r);
    _this.setG(g);
    _this.setB(b);
    _this.setA(a);
    return _this;
  },

  /**
  * Create a 3D vector from an array.
  * @since 0.1.0
  * @method
  * @param {array(3)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector3D}
  */
  createFromArray: function ( array ) {
    var _this = Object.create(this);
    _this.setR( array[0] );
    _this.setG( array[1] );
    _this.setB( array[2] );
    _this.setA( array[3] );
    return _this;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {array(3)} an array of floats with array[0] as x and array[1] as y.
  */
  toArray : function(){
    return [ this.r, this.g, this.b, this.a ];
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {string}
  */
  toString : function () {
    return '(' + this.r + ';' + this.g + ';' + this.b + ';' + this.a + ')';
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setR: function(value) {
    this.r = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getR: function() {
    return this.r;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
	setG: function(value) {
    this.g = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getG: function() {
    return this.g;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setB: function(value) {
    this.b = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getB: function() {
    return this.b;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setA: function(value) {
    this.a = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getA: function() {
    return this.a;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {property} value The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {float|false}
  */
  set: function(property, value){
    if(this.hasOwnProperty(property)){
      this[property] = this.valueValidation(value);
      return this[property];
    }
    return false;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {property} value The number of decimals.
  * @returns {bool}
  */
  get: function(property){
    if(this.hasOwnProperty(property)){
      return this[property];
    }
    return false;
  },

  /**
  * set cosine decimals precision.
  * @since 0.0.2
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setRGBA: function(r,g,b,a) {
    this.r = this.valueValidation(r);
    this.g = this.valueValidation(g);
    this.b = this.valueValidation(b);
    this.a = this.valueValidation(a);
    return this.toString() ;
  },

  // setMagnitude: function(length) {
  //   var angle = this.getAngle();
  //   this.x = TYPE6JS.Trigonometry.cosinus( angle ) * length;
  //   this.y = TYPE6JS.Trigonometry.sinus( angle ) * length;
  // },

  //create new vector

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  add: function(vector3) {
    return this.create( this.x + vector3.getX(),
                        this.y + vector3.getY(),
                        this.z + vector3.getZ()
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  addScaledVector:function(vector3, value){
    return this.create( this.x + vector3.x * value,
                        this.y + vector3.y * value,
                        this.z + vector3.z * value
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  subtract: function(vector3) {
    return this.create( this.x - vector3.getX(),
                        this.y - vector3.getY(),
                        this.z - vector3.getZ()
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //component product
  multiply:function(vector3){
    return this.create( this.x * vector3.x,
                        this.y * vector3.y,
                        this.z * vector3.z
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //Prefer scale by value inferior to 1 if possible
  divide: function(vector3) {
    return this.create( this.x / vector3.x,
                        this.y / vector3.y,
                        this.z / vector3.z
                      );
  },


  //modifiy current vector

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  addTo: function(vector3) {
    this.x += vector3.getX();
    this.y += vector3.getY();
    this.z += vector3.getZ();
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  addScaledVectorTo:function(vector3, value){
    this.x += vector3.x * value;
    this.y += vector3.y * value;
    this.z += vector3.z * value;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  subtractFrom: function(vector3) {
    this.x -= vector3.getX();
    this.y -= vector3.getY();
    this.z -= vector3.getZ();
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  scaleBy: function(value) {
    this.x *= value;
    this.y *= value;
    this.z *= value;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //component product
  multiplyBy: function(vector3){
    this.x *= vector3.x;
    this.y *= vector3.y;
    this.z *= vector3.z;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //Prefer scale by value inferior to 1 if possible
  divideBy: function(vector3) {
    this.x /= vector3.x;
    this.y /= vector3.y;
    this.z /= vector3.z;
  },


  // rand : function(x,y,z){
  //   this.x=x?rand(-1,1,2):0;
  //   this.y=y?rand(-1,1,2):0;
  //   this.z=z?rand(-1,1,2):0;
  //   this.normalize();
  // },


  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //true if vector is equal to (0;0)
  isNull: function(){
    if( !this.x || !this.y || !this.z ){
      return true;
    }
    return false;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  //true if vector is different then (0,0)
  isNotNull: function(){
    if( this.x || this.y || this.z ){
      return true;
    }
    return false;
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @private
  * @param {float} the value to validate.
  * @returns {boolean}
  */
  valueValidation: function(value){
    return isNaN(value) ? 0.0 : value;
  }

};

    /*SetFromMatrixPosition: function ( m ) {

    this.x = m.m[ 12 ];
    this.y = m.m[ 13 ];
    this.z = m.m[ 14 ];

    return this;

  },*/
