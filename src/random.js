/** @namespace */
TYPE6.Random = {

  /**
  * Random float.
  * @since 0.1.0
  * @method
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  float : function (min,max){
    return min + Math.random() * ( max - min );
  },

  /**
  * Random integer.
  * @since 0.1.0
  * @method
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  integer : function (min,max){
    return Math.floor(min + Math.random() * ( max - min + 1));
  },

  /**
  * Random distribution.
  * @since 0.1.0
  * @method
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  distribution : function(min, max, iterations) {
    var total = 0;
    for( var i = 0; i < iterations; i ++ ) {
      total += this.float( min, max );
    }
    return total / iterations;
  },

  /**
  * Randomly pick one of the 2 given values.
  * @since 0.1.0
  * @method
  * @param {float} min The minimum value.
  * @param {float} max The maximum value.
  * @param {integer} decimals The number of decimals.
  * @returns {float}
  */
  pick : function ( value1, value2 ){
    return Math.random() < 0.5 ? value1 : value2;
  },

};
