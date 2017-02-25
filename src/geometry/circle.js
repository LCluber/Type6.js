/**
* @class
* @classdesc A class that represents a two dimension cicle.
*/
TYPE6.Geometry.Circle = {

  /**
  * @since 0.2.0
  * @access private
  */
  position: {},

  /**
  * @since 0.2.0
  * @access private
  */
  radius  : 0.0,

  /**
  * @since 0.2.0
  * @access private
  */
  diameter: 0.0,

  shape: 'circle',
  
  /**
  * @since 0.2.1
  * @access private
  */
  size : {},
  
  /**
  * @since 0.2.1
  * @access private
  */
  halfSize : {},

  /**
  * create a circle
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  create : function(positionX, positionY, radius) {
    var obj = Object.create(this);
    obj.init();
    obj.setRadius(radius);
    obj.setPositionXY(positionX, positionY);
    return obj;
  },

  /**
  * initialize a circle.
  * @since 0.2.0
  * @method
  */
  init: function(){
    this.position = TYPE6.Vector2D.create();
    this.radius   = 0.0;
    this.diameter = 0.0;
    this.initSize();
  },
  
  initSize: function(){
    this.size     = TYPE6.Vector2D.create();
    this.halfSize = TYPE6.Vector2D.create();
  },
  
  setSize: function(){
    this.size.setXY( this.diameter, this.diameter );
    this.halfSize.setXY( this.radius, this.radius );
  },

  /**
  * Copy a circle.
  * @since 0.2.0
  * @method
  * @param {circle} cirlce a circle object.
  * @returns {Circle}
  */
  copy: function(circle) {
    return this.create(
      circle.getPositionX(), circle.getPositionY(),
      circle.getRadius()
    );
  },

  /**
  * Copy to.
  * @since 0.2.0
  * @method
  * @param {circle} cirlce a circle object.
  */
  copyTo: function(circle) {
    this.setPositionFromVector2D(circle.getPosition());
    this.setRadius(circle.getRadius());
  },

  /**
  * set position on X axis.
  * @since 0.2.0
  * @method
  * @param {float} A floating number.
  * @returns {float}
  */
  setPositionX: function( x ){
    this.position.setX( x );
    return this.position.getX();
  },

  /**
  * set position on Y axis.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionY: function( y ){
    this.position.setY( y );
    return this.position.getY();
  },

  /**
  * set Position X and Y
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionXY: function( positionX, positionY ){
    this.position.setXY( positionX, positionY );
    return this.position;
  },

  /**
  * Set position from a 2D vector.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionFromVector2D: function( position ){
    this.position.copyTo( position );
    return this.position;
  },

  /**
  * Get position.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getPosition: function(){
    return this.position;
  },

  /**
  * Get position X.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getPositionX: function(){
    return this.position.getX();
  },

  /**
  * Get position Y.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getPositionY: function(){
    return this.position.getY();
  },

  /**
  * set radius.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setRadius: function( radius ){
    this.radius   = radius;
    this.diameter = this.radius * 2;
    this.setSize();
    return this.radius;
  },

  /**
  * get radius.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getRadius: function(){
    return this.radius;
  },

  /**
  * set diameter.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setDiameter: function( diameter ){
    this.diameter = diameter;
    this.radius   = this.diameter * 0.5;
    this.setSize();
    return this.diameter;
  },

  /**
  * Get diameter.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getDiameter: function(){
    return this.diameter;
  },
  
  /**
  * get halfSize.
  * @since 0.2.1
  * @method
  * @returns {Vector2D}
  */
  getHalfSize: function(){
    return this.halfSize;
  },
  
  /**
  * get size.
  * @since 0.2.1
  * @method
  * @returns {Vector2D}
  */
  getSize: function(){
    return this.size;
  },

  /**
  * Clamp to.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  clampTo:function(rectangle){
    this.position.clampTo(rectangle);
  },

  /**
  * Scale.
  * @since 0.0.3
  * @method
  * @param {float} value The number of decimals.
  * @returns {Vector2D}
  */
  scale: function(scalar) {
    return this.create( this.position.getX(), this.position.getY(),
                        this.radius * scalar
                      );
  },

  /**
  * Scale by
  * @since 0.0.3
  * @method
  * @param {float} value The number of decimals.
  * @returns {Vector2D}
  */
  scaleBy: function(scalar) {
    this.setRadius( this.radius * scalar);
    return this.radius;
  },

  /**
  * Get distance.
  * @since 0.0.3
  * @method
  * @param {float} value The number of decimals.
  * @returns {Vector2D}
  */
  getDistance: function(vector2) {
    return this.position.getDistance( vector2 );
  },

  /**
  * Get squared distance.
  * @since 0.0.3
  * @method
  * @param {float} value The number of decimals.
  * @returns {Vector2D}
  */
  getSquaredDistance: function(vector2) {
    return this.position.getSquaredDistance( vector2 );
  },
  
  /**
  * draw the circle in a canvas.
  * @since 0.2.3
  * @method
  * @param {context} context The context of the canvas.
  * @param {string} fillColor The fill color of the circle.
  * @param {string} strokeColor The stroke color of the circle.
  * @param {float} strokeWidth The stroke width of the circle.
  * @returns {Vector2D}
  */
  draw: function( context, fillColor, strokeColor, strokeWidth ){
    context.beginPath();
    context.arc(  this.getPositionX(),
                  this.getPositionY(),
                  this.getRadius(),
                  0,
                  TYPE6.Trigonometry.TWOPI,
                  false
                );
    if( fillColor ){
      context.fillStyle = fillColor;
      context.fill();
    }
    if( strokeColor ){
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.stroke();
    }
  }

};
