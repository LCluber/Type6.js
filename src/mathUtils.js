/** @namespace */
TYPE6.MathUtils = {

  /**
  * Round number with decimals.
  * @since 0.1.0
  * @method
  * @param {float} x The value to round.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  round : function (x, decimals){
    decimals = Math.pow( 10, decimals );
    return Math.round( x * decimals ) / decimals;
  },

  /**
  * Floor number with decimals.
  * @since 0.1.0
  * @method
  * @param {float} x The value to floor.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  floor : function(x,decimals){
    decimals = Math.pow(10,decimals);
    return Math.floor(x*decimals)/decimals;
  },

  /**
  * Ceil number with decimals.
  * @since 0.1.0
  * @method
  * @param {float} x The value to ceil.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  ceil : function(x, decimals){
    decimals = Math.pow(10,decimals);
    return Math.ceil(x*decimals)/decimals;
  },

  /**
  * Trunc number with decimals.
  * @since 0.1.0
  * @method
  * @param {float} x The value to trunc.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  trunc : function(x,decimals){
    decimals = Math.pow(10,decimals);
    return Math.trunc(x*decimals)/decimals;
  },

  /**
  * Round to nearest.
  * @since 0.1.0
  * @method
  * @param {float} x The value to trunc.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  roundToNearest: function(value, nearest) {
    return Math.round(value / nearest) * nearest;
  },

  /**
  * Return 1 if x is even. O if not
  * @since 0.1.0
  * @method
  * @param {float} x The value to check.
  * @returns {boolean}
  */
  isEven : function (x){
    return !(x&1);
  },

  /**
  * Return 1 if x is odd. O if not
  * @since 0.1.0
  * @method
  * @param {float} x The value to check.
  * @returns {boolean}
  */
  isOdd : function (x){
    return x&1;
  },

  /**
  * Mix.
  * @since 0.1.0
  * @method
  * @param {float} x The minimum value.
  * @param {float} y The maximum value.
  * @param {float} ratio The number of decimals.
  * @returns {float}
  */
  mix : function( x, y, ratio ){
    return (1-ratio)*x + ratio*y;
  },

  /**
  * Get sign of given value
  * @since 0.1.0
  * @method
  * @param {float} x The value to check.
  * @returns {integer}
  */
  getSign : function (x){
    return x ? x < 0 ? -1 : 1 : 0;
  },

  /**
  * Flip sign of given value
  * @since 0.1.0
  * @method
  * @param {float} x The value to check.
  * @returns {boolean}
  */
  getOppositeSign : function (x) {
    return -x;
  },

  /**
  * Clamp a value.
  * @since 0.1.0
  * @method
  * @param {float} x The value to clamp.
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @returns {float}
  */
  clamp : function ( x, min, max ) {
    return Math.min(Math.max(x,min),max);
    //return ( x < min ) ? min : ( ( x > max ) ? max : x );
  },

  /**
  * Normalize.
  * for the opposite use lerp
  * @since 0.1.0
  * @method
  * @param {float} x The value to clamp.
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @returns {float}
  */
  normalize : function (x, min, max){
    return (x - min) / (max - min);
  },

  /**
  * Lerp.
  * @since 0.1.0
  * @method
  * @param {float} normal The value to clamp. Usually 0 > x < 1
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @returns {float}
  */
  lerp : function (normal, min, max) {
    return (max - min) * normal + min;
  },

  /**
  * Map.
  * for the opposite use lerp
  * @since 0.1.0
  * @method
  * @param {float} normal The value to clamp. Usually 0 > x < 1
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @returns {float}
  */
  map : function (x, sourceMin, sourceMax, destMin, destMax) {
		return this.lerp(this.normalize(x, sourceMin, sourceMax), destMin, destMax);
	}

};
