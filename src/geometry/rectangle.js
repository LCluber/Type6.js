/**
* @class
* @classdesc A class that represents a two dimension rectangle.
*/
TYPE6.Geometry.Rectangle = {

  /**
  * @since 0.2.0
  * @access private
  */
  position : {},

  /**
  * @since 0.2.0
  * @access private
  */
  topLeftCorner : {},
  
  /**
  * @since 0.2.1
  * @access private
  */
  bottomRightCorner : {},

  /**
  * @since 0.2.0
  * @access private
  */
  size : {},
  
  /**
  * @since 0.2.1
  * @access private
  */
  halfSize : {},

  shape: 'aabb',

  /**
  * Create a rectangle.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  create : function( positionX, positionY, sizeX, sizeY ) {
    var obj = Object.create( this );
    obj.initSize( sizeX, sizeY );
    obj.initPosition( positionX, positionY );
    return obj;
  },

  initSize: function( sizeX, sizeY ){
    this.size     = TYPE6.Vector2D.create( sizeX, sizeY );
    this.halfSize = this.size.halve();
  },

  initPosition: function( positionX, positionY ){
    this.position          = TYPE6.Vector2D.create( positionX, positionY );
    this.topLeftCorner     = TYPE6.Vector2D.create( positionX - this.halfSize.getX(), positionY - this.halfSize.getY() );
    this.bottomRightCorner = TYPE6.Vector2D.create( positionX + this.halfSize.getX(), positionY + this.halfSize.getY() );
  },
  /**
  * Copy the rectangle.
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @returns {Vector2D}
  */
  copy: function( rectangle ) {
    return this.create(
      rectangle.getPositionX(), rectangle.getPositionY(),
      rectangle.getSizeX(), rectangle.getSizeY()
    );
  },

  /**
  * copy rectangle .
  * @since 0.2.0
  * @method
  * @param {float} [x = 0.0] x The value on the x axis.
  * @param {float} [y = 0.0] y The value on the y axis.
  * @returns {Vector2D}
  */
  copyTo: function( rectangle ){
    this.setSizeFromVector2D( rectangle.getSize() );
    this.setPositionFromVector2D( rectangle.getPosition() );
  },

  /**
  * set position X axis.
  * @since 0.2.0
  * @method
  * @param {float} A floating number.
  * @returns {float}
  */
  setPositionX: function( x ){
    this.position.setX( x );
    this.setTopLeftCornerX( x - this.getHalfSizeX() );
    this.setBottomRightCornerX( x + this.getHalfSizeX() );
    return this.position.getX();
  },

  /**
  * set position Y axis.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionY: function( y ){
    this.position.setY( y );
    this.setTopLeftCornerY( y - this.getHalfSizeY() );
    this.setBottomRightCornerY( y + this.getHalfSizeY() );
    return this.position.getY();
  },

  /**
  * set position XY.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionXY: function( positionX, positionY ){
    this.position.setXY( positionX, positionY );
    this.setTopLeftCornerXY( positionX - this.getHalfSizeX(),
                             positionY - this.getHalfSizeY() );
    this.setBottomRightCornerXY( positionX + this.getHalfSizeX(),
                                 positionY + this.getHalfSizeY() );
    return this.position;
  },
  
  /**
  * set position from 2D vector.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setPositionFromVector2D: function( position ){
    this.position.copyTo( position );
    this.setTopLeftCornerXY( position.getX() - this.getHalfSizeX(),
                             position.getY() - this.getHalfSizeY() );
    this.setBottomRightCornerXY( position.getX() + this.getHalfSizeX(),
                                 position.getY() + this.getHalfSizeY() );
    return this.position;
  },


  /**
  * set top left corner XY.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setTopLeftCornerXY: function( topLeftCornerX, topLeftCornerY ){
    this.topLeftCorner.setXY( topLeftCornerX, topLeftCornerY );
    return this.topLeftCorner;
  },

  /**
  * set top left corner from 2D vector.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setTopLeftCornerFromVector2D: function( topLeftCorner ){
    this.topLeftCorner.copyTo( topLeftCorner );
    return this.topLeftCorner;
  },
  
  /**
  * set top left corner XY.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setBottomRightCornerXY: function( bottomRightCornerX, bottomRightCornerY ){
    this.bottomRightCorner.setXY( bottomRightCornerX, bottomRightCornerY );
    return this.bottomRightCorner;
  },

  /**
  * set top left corner from 2D vector.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setBottomRightCornerFromVector2D: function( bottomRightCorner ){
    this.bottomRightCorner.copyTo( bottomRightCorner );
    return this.bottomRightCorner;
  },

  /**
  * get the position.
  * @since 0.2.0
  * @method
  * @returns {Vector2D}
  */
  getPosition: function(){
    return this.position;
  },
  
  /**
  * get position X.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getPositionX: function(){
    return this.position.getX();
  },

  /**
  * get position Y.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getPositionY: function(){
    return this.position.getY();
  },

  /**
  * get top left corner.
  * @since 0.2.0
  * @method
  * @returns {Vector2D}
  */
  getTopLeftCorner: function(){
    return this.topLeftCorner;
  },

  /**
  * get top left corner X.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getTopLeftCornerX: function(){
    return this.topLeftCorner.getX();
  },

  /**
  * get top left corner Y.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getTopLeftCornerY: function(){
    return this.topLeftCorner.getY();
  },

  /**
  * get top left corner.
  * @since 0.2.0
  * @method
  * @returns {Vector2D}
  */
  getBottomRightCorner: function(){
    return this.bottomRightCorner;
  },

  /**
  * get top left corner X.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getBottomRightCornerX: function(){
    return this.bottomRightCorner.getX();
  },

  /**
  * get top left corner Y.
  * @since 0.2.0
  * @method
  * @returns {float}
  */
  getBottomRightCornerY: function(){
    return this.bottomRightCorner.getY();
  },

  /**
  * set size XY.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setSizeXY: function( sizeX, sizeY ){
    this.size.setXY( sizeX, sizeY );
    return this.size;
  },

  /**
  * set size from 2D vector.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  setSizeFromVector2D: function( size ){
    this.size.copyTo( size );
    return this.size;
  },

  /**
  * get size.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getSize: function(){
    return this.size;
  },

  /**
  * get size X
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getSizeX: function(){
    return this.size.getX();
  },

  /**
  * get size Y
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getSizeY: function(){
    return this.size.getY();
  },
  
  /**
  * get size.
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getHalfSize: function(){
    return this.halfSize;
  },

  /**
  * get size X
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getHalfSizeX: function(){
    return this.halfSize.getX();
  },

  /**
  * get size Y
  * @since 0.2.0
  * @method
  * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
  * @returns {Vector2D}
  */
  getHalfSizeY: function(){
    return this.halfSize.getY();
  },
  
  /**
  * draw the rectangle in a canvas.
  * @since 0.2.3
  * @method
  * @param {context} context The context of the canvas.
  * @param {string} color The color of the rectangle.
  * @returns {Vector2D}
  */
  draw : function( context, color ){
    context.fillStyle = color;
    context.fillRect( this.topLeftCorner.getX(),
                      this.topLeftCorner.getY(),
                      this.size.getX(),
                      this.size.getY()
                    );
  }

  // clampTo:function(rectangle){
  //   this.position.clampTo(rectangle);
  // },

  // /**
  // * set cosine decimals precision.
  // * @since 0.0.3
  // * @param {float} value The number of decimals.
  // * @returns {Vector2D}
  // */
  // scale: function(scalar) {
  //   return this.create( this.position.getX(), this.position.getY(),
  //                       this.radius * scalar
  //                     );
  // },

  // /**
  // * set cosine decimals precision.
  // * @since 0.0.3
  // * @param {float} value The number of decimals.
  // * @returns {Vector2D}
  // */
  // scaleBy: function(scalar) {
  //   this.setRadius( this.radius * scalar);
  //   return this.radius;
  // },

};
