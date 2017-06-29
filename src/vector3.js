/**
* @class
* @classdesc A class that represents a three dimensions Matrix.
*/
TYPE6.Vector3 = {
  
  /**
  * @since 0.0.1
  * @access private
  */
  x : 0.0,
  /**
  * @since 0.0.1
  * @access private
  */
  y : 0.0,
  /**
  * @since 0.0.1
  * @access private
  */
  z : 0.0,

  
  /**
  * Create a new vector2D with x and Y coordinates.
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @param {float} [z = 0.0] z The value on the z axis.
  * @returns {Vector3} The new vector3
  */
  create: function(x, y, z) {
    var _this = Object.create(this);
    _this.setX(x);
    _this.setY(y);
    _this.setZ(z);
    return _this;
  },
  
  /**
  * Return the vector2D coordinates as an array.
  * @since 0.0.2
  * @method
  * @returns {array(2)} An array of floats with array[0] as x and array[1] as y.
  */
  toArray : function(){
    return [ this.x, this.y, this.z ];
  },

  /**
  * Return the vector2D coordinates as a string.
  * @since 0.0.2
  * @method
  * @returns {string} The vector2D coordinates as a string : "(X;Y)"
  */
  toString : function () {
    return '(' + this.x + ';' + this.y + ';' + this.z + ')';
  },
  
  /**
  * Set the x axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @param {float} [value = 0.0] value The new value of X.
  * @returns {float} The new X coordinate
  */
  setX: function(value) {
    this.x = this.valueValidation(value);
    return this.x;
  },

  /**
  * Return the X axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @returns {float} The X coordinate
  */
  getX: function() {
    return this.x;
  },

  /**
  * set the Y axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @param {float} [value = 0.0] value The value of Y.
  * @returns {float} The new Y coordinate
  */
  setY: function(value) {
    this.y = this.valueValidation(value);
    return this.y;
  },

  /**
  * Get the Y axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @returns {float} The Y coordinate
  */
  getY: function() {
    return this.y;
  },
  
  /**
  * set the Z axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @param {float} [value = 0.0] value The value of Y.
  * @returns {float} The new Z coordinate
  */
  setZ: function(value) {
    this.z = this.valueValidation(value);
    return this.z;
  },

  /**
  * Get the Z axis value of the vector2D.
  * @since 0.0.2
  * @method
  * @returns {float} The Z coordinate
  */
  getZ: function() {
    return this.z;
  },
  
  /**
  * Subtract a vector to this vector and returns a new vector
  * @since 0.0.3
  * @method
  * @param {Vector3} vector3D The vector you want to subtract.
  * @returns {Vector3} A new vector with the 2 vectors subracted
  */
  subtract: function(vector3D) {
    return this.create( this.x - vector3D.getX(),
                        this.y - vector3D.getY(),
                        this.z - vector3D.getZ()
                      );
  },
  
  /**
  * scale this vector by the given scalar and create a new vector
  * @since 0.0.3
  * @method
  * @param {float} value The value to scale the vactor by.
  * @returns {Vector2} a new vector scaled by the given parameter
  */
  scale: function(value) {
    return this.create( this.x * value,
                        this.y * value,
                        this.z * value
                      );
  },
  
  /**
  * Get magnitude.
  * @since 0.0.1
  * @method
  * @returns {float}
  */
  getMagnitude: function(){
    return Math.sqrt(this.getSquaredMagnitude());
  },
  
  /**
  * get the squared magnitude of the vector2D. For better performances use this function instead of getMagnitude() when the exact magnitude is not necessary
  * @since 0.0.1
  * @method
  * @returns {float} The square magnitude of the vector
  */
  getSquaredMagnitude: function(){
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  
  /**
  * Normalize the vector and create a new vector
  * @since 0.0.3
  * @method
  * @returns {Vector2} a new vector of length one
  */
  normalize: function(){
    var length = this.getMagnitude();
    if(length) {
      return this.scale( 1/length );
    }
    
    return this.create( this.x, this.y, this.z );
  },
  
  /**
  * Dot product.
  * @since 0.0.1
  * @method
  * @param {Vector3} value The number of decimals.
  * @returns {float}
  */
  dot: function(vector3){ //scalar product
    return this.x * vector3.getX() + this.y * vector3.getY() + this.z * vector3.getZ();
  },
  
  cross:function(vector3){
    return this.create( this.y * vector3.getZ() - this.z * vector3.getY(),
                        this.z * vector3.getX() - this.x * vector3.getZ(),
                        this.x * vector3.getY() - this.y * vector3.getX()
                      );
  },
  
  
  valueValidation: function(value){
    return isNaN(value) ? 0.0 : value;
  }

};