/**
* @class
* @classdesc A class that represents a two dimension vector.
*/
TYPE6.Vector2D = {
  /**
  * @since 0.0.1
  * @access private
  */
  x: 0.0,
  /**
  * @since 0.0.1
  * @access private
  */
  y: 0.0,

  /**
  * Create a new vector2D with x and Y coordinates.
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @returns {Vector2} The new vector2D
  */
  create: function(x, y) {
    var _this = Object.create(this);
    _this.setX(x);
    _this.setY(y);
    return _this;
  },

  /**
  * Create a vector2D with an array of x and Y coordinates.
  * @since 0.1.0
  * @method
  * @param {array(2)} Array An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2} The new vector2D
  */
  createFromArray: function ( array ) {
    var _this = Object.create(this);
    _this.setX( array[0] );
    _this.setY( array[1] );
    return _this;
  },

  /**
  * Return the vector2D coordinates as an array.
  * @since 0.0.2
  * @method
  * @returns {array(2)} An array of floats with array[0] as x and array[1] as y.
  */
  toArray : function(){
    return [ this.x, this.y ];
  },

  /**
  * Return the vector2D coordinates as a string.
  * @since 0.0.2
  * @method
  * @returns {string} The vector2D coordinates as a string : "(X;Y)"
  */
  toString : function () {
    return '(' + this.x + ';' + this.y + ')';
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
  * set the given axis to the given value
  * @since 0.1.0
  * @method
  * @param {string} property The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {float|false} The new value of the modified property or false if the given value is not valid
  */
  set: function(property, value){
    if(this.hasOwnProperty(property)){
      this[property] = this.valueValidation(value);
      return this[property];
    }
    return false;
  },

  /**
  * Get the given axis of the vector2D.
  * @since 0.1.0
  * @method
  * @param {string} property X or Y.
  * @returns {float|false} The value of the given property or false if the given property is not valid
  */
  get: function(property){
    if(this.hasOwnProperty(property)){
      return this[property];
    }
    return false;
  },

  /**
  * set the X and Y coordinates of the vector2D at once
  * @since 0.0.2
  * @method
  * @param {float} [x = 0.0] x The new value of the x coordinate.
  * @param {float} [y = 0.0] y The new value of the y coordinate.
  */
  setXY: function(x,y) {
    this.x = this.valueValidation(x);
    this.y = this.valueValidation(y);
    //return this.toString() ;
  },

  /**
  * Set to Origin
  * @since 0.0.2
  * @method
  * @param {float} [x = 0.0] x The new value of the x coordinate.
  * @param {float} [y = 0.0] y The new value of the y coordinate.
  */
  setToOrigin: function() {
    this.x = 0.0;
    this.y = 0.0;
    //return this.toString() ;
  },
  
  /**
  * Set to Origin
  * @since 0.2.1
  * @method
  * @param {float} [x = 0.0] x The new value of the x coordinate.
  * @param {float} [y = 0.0] y The new value of the y coordinate.
  */
  setXToOrigin: function() {
    this.x = 0.0;
    //return this.toString() ;
  },
  
  /**
  * Set to Origin
  * @since 0.2.1
  * @method
  * @param {float} [x = 0.0] x The new value of the x coordinate.
  * @param {float} [y = 0.0] y The new value of the y coordinate.
  */
  setYToOrigin: function() {
    this.y = 0.0;
    //return this.toString() ;
  },

  /**
  * set X and Y coordinates from the given angle.
  * @since 0.2.0
  * @method
  * @param {radian} angle The angle to add.
  * @returns {bool}
  */
  setAngle: function(angle) {
    if(this.valueValidation(angle)){
      var length = this.getMagnitude();
      this.x = TYPE6.Trigonometry.cosinus( angle ) * length;
      this.y = TYPE6.Trigonometry.sinus( angle ) * length;
      return true;
    }
    return false;
  },

  /**
  * get the angle of the vector2D in radians
  * @since 0.1.0
  * @method
  * @returns {float} the angle of the vector2D in radians
  */
  getAngle: function() {
    return Math.atan2(this.y, this.x);
  },

  /**
  * set new coordinates to the given length
  * @since 0.2.0
  * @method
  * @param {float} length The new length.
  * @returns {bool} true if the given parameter is a valid, false otherwise
  */
  setMagnitude: function(length) {
    if(this.valueValidation(length)){
      var angle = this.getAngle();
      this.x = TYPE6.Trigonometry.cosinus( angle ) * length;
      this.y = TYPE6.Trigonometry.sinus( angle ) * length;
      return true;
    }
    return false;
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
    return this.x * this.x + this.y * this.y;
  },

  /**
  * get the distance between this vector and the vector given in parameters.
  * @since 0.0.1
  * @method
  * @returns {float}
  */
  getDistance: function(vector2D){
    this.subtractFrom(vector2D);
    var magnitude = this.getMagnitude();
    this.addTo(vector2D);
    return magnitude;

  },

  /**
  * get the squared distance between this vector and the vector given in parameters.
  * @since 0.0.1
  * @method
  * @returns {float}
  */
  getSquaredDistance: function(vector2D){
    this.subtractFrom(vector2D);
    var squaredMagnitude = this.getSquaredMagnitude();
    this.addTo(vector2D);
    return squaredMagnitude;

  },

  //create new vector

  /**
  * copy the given vector2D values.
  * @since 0.2.0
  * @method
  * @returns {Vector2} A new vector2D identical to this vector2D
  */
  copy: function() {
    return this.create(
      this.getX(),
      this.getY()
    );
  },

  /**
  * Add a vector to this vector and returns a new vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to add.
  * @returns {Vector2} A new vector with the 2 vectors added
  */
  add: function(vector2D) {
    return this.create( this.x + vector2D.getX(),
                        this.y + vector2D.getY()
                      );
  },

  /**
  * Add X value to this vector and returns a new vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to add.
  * @returns {Vector2} A new vector with the 2 vectors added
  */
  addX: function(x) {
    return this.create( this.x + x,
                        this.y
                      );
  },

  /**
  * Add Y value to this vector and returns a new vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to add.
  * @returns {Vector2} A new vector with the 2 vectors added
  */
  addY: function(y) {
    return this.create( this.x,
                        this.y + y
                      );
  },

  /**
  * Add a scalar to this vector and create a new vector
  * @since 0.0.3
  * @method
  * @param {float} float The value you want to add.
  * @returns {Vector2} A new vector with the given scalar added
  */
  addScalar: function(scalar) {
    return this.create( this.x + scalar,
                        this.y + scalar
                      );
  },

  /**
  * scale the given vector by the given scalar, add it to this vector and creates a new vector.
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector to scale.
  * @param {float} scalar The scale amount.
  * @returns {Vector2} A new vector with the scaled vector added
  */
  addScaledVector:function(vector2D, scalar){
    return this.create( this.x + vector2D.getX() * scalar,
                        this.y + vector2D.getY() * scalar
                      );
  },

  /**
  * Subtract a vector to this vector and returns a new vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to subtract.
  * @returns {Vector2} A new vector with the 2 vectors subracted
  */
  subtract: function(vector2D) {
    return this.create( this.x - vector2D.getX(),
                        this.y - vector2D.getY()
                      );
  },

  /**
  * Subtract this vector by the given scalar and create a new vector
  * @since 0.0.3
  * @method
  * @param {float} float The value you want to subtract.
  * @returns {Vector2} A new vector with the given scalar subtracted
  */
  subtractScalar: function(scalar) {
    return this.create( this.x - scalar,
                        this.y - scalar
                      );
  },

  /**
  * scale the given vector by the given scalar, subtract it to this vector and creates a new vector.
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector to scale.
  * @param {float} scalar The scale amount.
  * @returns {Vector2} A new vector with the scaled vector subtracted
  */
  subtractScaledVector:function(vector2D, scalar){
    return this.create( this.x - vector2D.getX() * scalar,
                        this.y - vector2D.getY() * scalar
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
                        this.y * value
                      );
  },

  /**
  * Multiply this vector by the given one and create a new vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to multiply this current vector by.
  * @returns {Vector2} a new vector with the new coordinates
  */
  //component product
  multiply:function(vector2D){
    return this.create( this.x * vector2D.getX(),
                        this.y * vector2D.getY()
                      );
  },

  /**
  * Divide this vector by the given one and create a new vector
  * @since 0.0.6
  * @method
  * @param {Vector2} vector2D The vector you want to divide this current vector by.
  * @returns {Vector2} a new vector with the new coordinates
  */
  divide: function(vector2D) {
    return this.create( this.x / vector2D.getX(),
                        this.y / vector2D.getY()
                      );
  },

  /**
  * Halve the vector and create a new one
  * @since 0.0.6
  * @method
  * @param {Vector2} vector2D The vector you want to divide this current vector by.
  * @returns {Vector2} a new vector with the new coordinates
  */
  halve: function() {
    return this.create( this.x * 0.5,
                        this.y * 0.5
                      );
  },

  /**
  * Normalize the vector and create a new vector
  * @since 0.0.3
  * @method
  * @returns {Vector2} a new vector of length one
  */
  normalize: function(){
    var length = this.getMagnitude();
    if(length){
      return this.scale( 1/length );
    }
  },

  /**
  * transform vector coordinates into absolute value. So negative values become positive
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  absolute:function(){
    return this.create( Math.abs( this.x ),
                        Math.abs( this.y )
                      );
  },

  /**
  * create a new vector with opposite coordinates
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  opposite:function(){
    return this.create( -this.x,
                        -this.y
                      );
  },

  /**
  * create a new vector with opposite X coordinate
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  oppositeX:function(){
    return this.create( -this.x,
                        this.y
                      );
  },

  /**
  * create a new vector with opposite Y coordinate
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  oppositeY:function(){
    return this.create( this.x,
                        -this.y
                      );
  },


  /**
  * Clamp the vector inside the given rectangle.
  * @since 0.0.2
  * @method
  * @param {Rectangle} Rectangle The rectangle in which you want to clamp this current vector.
  * @returns {Vector2} a new vector clamped in the rectangle
  */
  clamp: function(rectangle){
    return this.create( TYPE6.MathUtils.clamp(
                          this.x,
                          rectangle.topLeftCorner.getX(),
                          rectangle.bottomRightCorner.getX()
                        ),
                        TYPE6.MathUtils.clamp(
                          this.y,
                          rectangle.topLeftCorner.getY(),
                          rectangle.bottomRightCorner.getY()
                        )
                      );
  },

  /**
  * computes a linear interpolation and creates a new vector.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The number of decimals.
  * @returns {Vector2} a new vector
  */
  lerp: function(normal, min, max){
    return this.create( TYPE6.MathUtils.lerp( normal, min.getX(), max.getX() ),
                        TYPE6.MathUtils.lerp( normal, min.getY(), max.getY() )
                      );
  },

  /**
  * Quadratic bezier
  * @since 0.0.3
  * @method
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {Vector2} a new vector
  */
  quadraticBezier: function(p0, p1, p2, t){
    var tt                  = t * t;
    var oneMinusT           = 1 - t;
    var powerOf2            = Math.pow(oneMinusT, 2);
    var oneMinusTByTwo2ByT  = oneMinusT * 2 * t;
    return this.create( TYPE6.Bezier.quadratic( p0.getX(), p1.getX(), p2.getX(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT ),
                        TYPE6.Bezier.quadratic( p0.getY(), p1.getY(), p2.getY(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT )
                      );
  },

  /**
  * Cubic bezier
  * @since 0.0.3
  * @method
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {Vector2} a new vector
  */
  cubicBezier: function(p0, p1, p2, p3, t){
    var tt                  = t * t;
    var oneMinusT           = 1 - t;
    return this.create( TYPE6.Bezier.cubic( p0.getX(), p1.getX(), p2.getX(), p3.getX(), t, tt, oneMinusT ),
                        TYPE6.Bezier.cubic( p0.getY(), p1.getY(), p2.getY(), p3.getY(), t, tt, oneMinusT )
                      );
  },

  /**
  * Quadratic bezier to.
  * @since 0.0.3
  * @method
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {Vector2}
  */
  quadraticBezierTo: function(p0, p1, p2, t){
    var tt                  = t * t;
    var oneMinusT           = 1 - t;
    var powerOf2            = Math.pow(oneMinusT, 2);
    var oneMinusTByTwo2ByT  = oneMinusT * 2 * t;
    this.x = TYPE6.Bezier.quadratic(p0.getX(), p1.getX(), p2.getX(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT );
    this.y = TYPE6.Bezier.quadratic(p0.getY(), p1.getY(), p2.getY(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT  );
  },

  /**
  * Cubic bezier to.
  * @since 0.0.3
  * @method
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {Vector2} value The number of decimals.
  * @param {float} value The number of decimals.
  * @returns {Vector2}
  */
  cubicBezierTo: function(p0, p1, p2, p3, t){
    var tt                  = t * t;
    var oneMinusT           = 1 - t;
    this.x = TYPE6.Bezier.cubic( p0.getX(), p1.getX(), p2.getX(), p3.getX(), t, tt, oneMinusT );
    this.y = TYPE6.Bezier.cubic( p0.getY(), p1.getY(), p2.getY(), p3.getY(), t, tt, oneMinusT );
  },

  //modifiy current vector

  /**
  * copy the given vector values into this vector.
  * @since 0.2.0
  * @method
  * @param {vector2D} vector2D The vector2D you want to copy.
  */
  copyTo: function(vector2D) {
    this.x = vector2D.getX();
    this.y = vector2D.getY();
  },

  /**
  * Add a vector to this vector
  * @since 0.0.3
  * @method
  * @param {Vector2} vector2D The vector you want to add.
  */
  addTo: function(vector2D) {
    this.x += vector2D.getX();
    this.y += vector2D.getY();
  },

  /**
  * Add a X component to this vector
  * @since 0.0.3
  * @method
  * @param {float} x The amount you want to add.
  */
  addToX: function(x) {
    this.x += x;
  },

  /**
  * Add a Y component to this vector
  * @since 0.0.3
  * @method
  * @param {float} y The amount you want to add.
  */
  addToY: function(y) {
    this.y += y;
  },

  /**
  * Add scalar to.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The number of decimals.
  */
  addScalarTo: function(scalar) {
    this.x += scalar;
    this.y += scalar;
  },

  /**
  * Add scaled vector to.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The vector to scale.
  * @param {value} value The scale amount.
  */
  addScaledVectorTo:function(vector2D, scalar){
    this.x += vector2D.getX() * scalar;
    this.y += vector2D.getY() * scalar;
  },
  
  /**
  * copy scaled vector to.
  * @since 0.2.1
  * @method
  * @param {Vector2} value The vector to scale.
  * @param {value} value The the scale amount.
  */
  copyScaledVectorTo:function(vector2D, scalar){
    this.x = vector2D.getX() * scalar;
    this.y = vector2D.getY() * scalar;
  },

  /**
  * Subtract from.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The subtracted vector.
  */
  subtractFrom: function(vector2D) {
    this.x -= vector2D.getX();
    this.y -= vector2D.getY();
  },
  
  /**
  * subtract a X component to this vector.
  * @since 0.2.5
  * @method
  * @param {float} y The value to subtract.
  */
  subtractFromX: function(x) {
    this.x -= x;
  },
  
  /**
  * subtract a Y component to this vector.
  * @since 0.2.5
  * @method
  * @param {float} y The value to subtract.
  */
  subtractFromY: function(y) {
    this.y -= y;
  },
  
  /**
  * Subtract from.
  * @since 0.2.1
  * @method
  * @param {Vector2} value The base vector.
  * @param {Vector2} value The subtracted vector.
  */
  copySubtractFromTo: function(vector2DA, vector2DB) {
    this.x = vector2DA.getX() - vector2DB.getX();
    this.y = vector2DA.getY() - vector2DB.getY();
  },

  /**
  * subtract scalar from.
  * @since 0.0.3
  * @method
  * @param {Vector2} value The number of decimals.
  * @returns {Vector2}
  */
  subtractScalarFrom: function(scalar) {
    this.x -= scalar;
    this.y -= scalar;
  },
  
  /**
  * Subtract scaled vector to.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The vector to scale.
  * @param {value} value The scale amount.
  */
  subtractScaledVectorFrom:function(vector2D, scalar){
    this.x -= vector2D.getX() * scalar;
    this.y -= vector2D.getY() * scalar;
  },

  /**
  * Scale by
  * @since 0.0.1
  * @method
  * @param {float} value The number of decimals.
  */
  scaleBy: function(value) {
    this.x *= value;
    this.y *= value;
  },

  /**
  * Multiply by
  * @since 0.0.1
  * @method
  * @param {Vector2} value The number of decimals.
  */
  //component product
  multiplyBy: function(vector2D){
    this.x *= vector2D.getX();
    this.y *= vector2D.getY();
  },

  /**
  * Divide by
  * @since 0.0.6
  * @method
  * @param {float} value The number of decimals.
  */
  //Prefer scale by value inferior to 1 if possible
  divideBy: function(vector2D) {
    this.x /= vector2D.getX();
    this.y /= vector2D.getY();
  },

  /**
  * Halve by
  * @since 0.0.6
  * @method
  * @param {float} value The number of decimals.
  */
  //Prefer scale by value inferior to 1 if possible
  halveBy: function() {
    this.x *= 0.5;
    this.y *= 0.5;
  },

  /**
  * Normalize to.
  * @since 0.0.1
  * @method
  */
  normalizeTo: function(){
    var length = this.getMagnitude();
    if( length ){
      this.scaleBy( 1/length );
    }
  },

  /**
  * Absolute to.
  * @since 0.0.2
  * @method
  */
  absoluteTo: function(){
    this.x = Math.abs( this.x );
    this.y = Math.abs( this.y );
  },

  /**
  * Opposite to
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  oppositeTo:function(){
    this.x = -this.x;
    this.y = -this.y;
  },

  /**
  * Opposite X to
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  oppositeXTo:function(){
    this.x = -this.x;
  },

  /**
  * Opposite Y to
  * @since 0.0.4
  * @method
  * @returns {Vector2} a new vector with absolute values
  */
  oppositeYTo:function(){
    this.y = -this.y;
  },


  /**
  * Clamp to given rectangle
  * @since 0.0.2
  * @method
  */
  clampTo: function( rectangle ){
    this.x = TYPE6.MathUtils.clamp(
              this.x,
              rectangle.topLeftCorner.getX(),
              rectangle.bottomRightCorner.getX()
            );
    this.y = TYPE6.MathUtils.clamp(
              this.y,
              rectangle.topLeftCorner.getY(),
              rectangle.bottomRightCorner.getY()
            );
  },

  /**
  * Lerp to
  * @since 0.0.1
  * @method
  * @param {Vector2} value The number of decimals.
  * @returns {float}
  */
  lerpTo: function(normal, min, max){
    this.x = TYPE6.MathUtils.lerp( normal, min.getX(), max.getX() );
    this.y = TYPE6.MathUtils.lerp( normal, min.getY(), max.getY() );
  },

  /**
  * Dot product.
  * @since 0.0.1
  * @method
  * @param {Vector2} value The number of decimals.
  * @returns {float}
  */
  dotProduct: function(vector2D){ //scalar product
    return this.x * vector2D.getX() + this.y * vector2D.getY();
  },

  /**
  * Check if vector is origin.
  * @since 0.0.4
  * @method
  * @returns {boolean}
  */
  //true if vector is equal to (0;0)
  isOrigin: function(){
    if( this.x === 0 || this.y === 0 )
      return true;
    return false;
  },

  /**
  * Check if the two components of the vector are greater then zero
  * @since 0.2.1
  * @method
  * @returns {boolean}
  */
  isPositive: function(){
    if( this.getX() > 0 && this.getY() > 0 )
      return true;
    return false;
  },
  
  /**
  * Check if the two components of the vector are smaller then zero
  * @since 0.2.1
  * @method
  * @returns {boolean}
  */
  isNegative: function(){
    if( this.getX() < 0 && this.getY() < 0 )
      return true;
    return false;
  },

  /**
  * Check if vector is not origin
  * @since 0.0.5
  * @method
  * @returns {boolean}
  */
  //true if vector is different then (0,0)
  isNotOrigin: function(){
    if( this.x || this.y ){
      return true;
    }
    return false;
  },

  valueValidation: function(value){
    return isNaN(value) ? 0.0 : value;
  }

};
