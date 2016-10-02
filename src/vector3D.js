/**

*/
TYPE6JS.Vector3D = {
  /**
  * @since 0.1.0
  * @access private
  */
  x: 0.0,
  /**
  * @since 0.1.0
  * @access private */
  y: 0.0,
  /**
  * @since 0.1.0
  * @access private */
  z: 0.0,

  /**
  * Create a 3D vector.
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @returns {Vector3D}
  */
  create: function(x, y, z) {
    var _this = Object.create(this);
    _this.setX(x);
    _this.setY(y);
    _this.setY(z);
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
    _this.setX( array[0] );
    _this.setY( array[1] );
    _this.setZ( array[2] );
    return _this;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {array(3)} an array of floats with array[0] as x and array[1] as y.
  */
  toArray : function(){
    return [ this.x, this.y, this.z ];
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {string}
  */
  toString : function () {
    return '(' + this.x + ';' + this.y + ';' + this.z + ')';
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setX: function(value) {
    this.x = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getX: function() {
    return this.x;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
	setY: function(value) {
    this.y = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getY: function() {
    return this.y;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {float} [value = 0.0] value The number of decimals.
  */
  setZ: function(value) {
    this.z = this.valueValidation(value);
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getZ: function() {
    return this.z;
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
  setXYZ: function(x,y) {
    this.x = this.valueValidation(x);
    this.y = this.valueValidation(y);
    this.z = this.valueValidation(z);
    return this.toString() ;
  },

  // setMagnitude: function(length) {
  //   var angle = this.getAngle();
  //   this.x = TYPE6JS.Trigonometry.cosinus( angle ) * length;
  //   this.y = TYPE6JS.Trigonometry.sinus( angle ) * length;
  // },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getMagnitude: function(){
    return Math.sqrt(this.getSquaredMagnitude());
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @returns {float}
  */
  getSquaredMagnitude: function(){
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },

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
  scale: function(value) {
    return this.create( this.x * value,
                        this.y * value,
                        this.z * value
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

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  normalize: function(){
    var length = this.getMagnitude();
    if(length){
      this.scale( 1/length );
    }
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  cross:function(vector3){
    return this.create( this.y * vector3.z - this.z * vector3.y,
                        this.z * vector3.x - this.x * vector3.z,
                        this.x * vector3.y - this.y * vector3.x
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.2
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  applyMatrix4: function ( matrix4 , w ) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = matrix4.m;
    //var w  = m[3] * x + m[7] * y + m[11] * z + m[15];

    return this.create( m[0] * x + m[4] * y + m[8]  * z + m[12] * w,
                        m[1] * x + m[5] * y + m[9]  * z + m[13] * w,
                        m[2] * x + m[6] * y + m[10] * z + m[14] * w
                      );
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  absolute:function(){
    return this.create( Math.abs( this.x ),
                        Math.abs( this.y ),
                        Math.abs( this.z )
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

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  normalizeTo: function(){
    var length = this.getMagnitude();
    if( length ){
      this.scaleBy( 1/length );
    }
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  crossTo:function(vector3){
    this.x = this.y * vector3.z - this.z * vector3.y;
    this.y = this.z * vector3.x - this.x * vector3.z;
    this.z = this.x * vector3.y - this.y * vector3.x;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.2
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  applyMatrix4To: function ( matrix4 , w ) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = matrix4.m;
    //var w  = m[3] * x + m[7] * y + m[11] * z + m[15];

    this.x = m[0] * x + m[4] * y + m[8]  * z + m[12] * w;
    this.y = m[1] * x + m[5] * y + m[9]  * z + m[13] * w;
    this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  },

  /**
  * set cosine decimals precision.
  * @since 0.1.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer}
  */
  absoluteTo: function(){
    this.x = Math.abs( this.x );
    this.y = Math.abs( this.y );
    this.z = Math.abs( this.z );
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
  dotProduct:function(vector3){
    return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
  },

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
