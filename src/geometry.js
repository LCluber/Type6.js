/** @namespace */
TYPE6JS.Geometry = {

  // createRectangle : function(topLeftCornerX, topLeftCornerY, sizeX, sizeY){
  //   var obj = Object.create(this);
  //   obj.Rectangle.create(topLeftCornerX, topLeftCornerY, sizeX, sizeY);
  //   return obj;
  // },

  /**
  * @class
  * @classdesc A class that represents a two dimension cicle.
  */
  Circle: {

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
      obj.initSize();
      obj.setPositionXY(positionX, positionY);
      
      return obj;
    },

    /**
    * initialize a circle.
    * @since 0.2.0
    * @method
    */
    init: function(){
      this.position = TYPE6JS.Vector2D.create();
      this.radius   = 0.0;
      this.diameter = 0.0;
    },
    
    initSize: function(){
      this.size     = TYPE6JS.Vector2D.create( this.diameter, this.diameter );
      this.halfSize = TYPE6JS.Vector2D.create( this.radius, this.radius );
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
    * set position X axis.
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
    * set position Y axis.
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
      this.initSize();
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
      this.initSize();
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
    }

  },

  /**
  * @class
  * @classdesc A class that represents a two dimension rectangle.
  */
  Rectangle: {

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
      this.size     = TYPE6JS.Vector2D.create( sizeX, sizeY );
      this.halfSize = TYPE6JS.Vector2D.create( sizeX * 0.5, sizeY * 0.5 );
    },

    initPosition: function( positionX, positionY ){
      this.position          = TYPE6JS.Vector2D.create( positionX, positionY );
      this.topLeftCorner     = TYPE6JS.Vector2D.create( positionX - this.halfSize.getX(), positionY - this.halfSize.getY() );
      this.bottomRightCorner = TYPE6JS.Vector2D.create( positionX + this.halfSize.getX(), positionY + this.halfSize.getY() );
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

  }

};
