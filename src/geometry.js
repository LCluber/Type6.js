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
      obj.setPositionXY(positionX, positionY);
      obj.setRadius(radius);
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
    topLeftCorner : {},

    /**
    * @since 0.2.0
    * @access private
    */
    size          : {},

    /**
    * Create a rectangle.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    create : function(topLeftCornerX, topLeftCornerY, sizeX, sizeY) {
      var obj = Object.create(this);
      obj.init();
      obj.setSizeXY(sizeX, sizeY);
      obj.setTopLeftCornerXY(topLeftCornerX, topLeftCornerY);
      return obj;
    },

    /**
    * initialize a rectangle.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    init: function(){
      this.size          = TYPE6JS.Vector2D.create();
      this.topLeftCorner = TYPE6JS.Vector2D.create();
    },

    /**
    * Copy the rectangle.
    * @since 0.2.0
    * @method
    * @param {float} [x = 0.0] x The value on the x axis.
    * @param {float} [y = 0.0] y The value on the y axis.
    * @returns {Vector2D}
    */
    copy: function(rectangle) {
      return this.create(
        rectangle.getTopLeftCornerX(), rectangle.getTopLeftCornerY(),
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
    copyTo: function(rectangle) {
      this.setTopLeftCornerFromVector2D(rectangle.getTopLeftCorner());
      this.setSizeFromVector2D(rectangle.getSize());
    },

    /**
    * set top left corner XY.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    setTopLeftCornerXY: function(topLeftCornerX, topLeftCornerY){
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
    setTopLeftCornerFromVector2D: function(topLeftCorner){
      this.topLeftCorner.copyTo( topLeftCorner );
      return this.topLeftCorner;
    },

    /**
    * get top left corner.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    getTopLeftCorner: function(){
      return this.topLeftCorner;
    },

    /**
    * get top left corner X.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    getTopLeftCornerX: function(){
      return this.topLeftCorner.getX();
    },

    /**
    * get top left corner Y.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    getTopLeftCornerY: function(){
      return this.topLeftCorner.getY();
    },

    /**
    * set size XY.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    setSizeXY: function(sizeX, sizeY){
      this.size.setXY(sizeX, sizeY);
      return this.size;
    },

    /**
    * set size from 2D vector.
    * @since 0.2.0
    * @method
    * @param {array(2)} An array of floats with array[0] as x and array[1] as y.
    * @returns {Vector2D}
    */
    setSizeFromVector2D: function(size){
      this.size.copyTo(size);
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
