// /** @namespace */
TYPE6JS.Bezier = {

  /**
  * Quadratic
  * @since 0.0.3
  * @method
  * @private
  * @param {Vector2} value The number of decimals.
  * @returns {Vector2}
  */
  quadratic : function(p0x, p1x, p2x, t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT){
    return  powerOf2 * p0x +
            oneMinusTByTwo2ByT * p1x +
            tt * p2x;
  },

  /**
  * Cubic
  * @since 0.0.3
  * @method
  * @private
  * @param {Vector2} value The number of decimals.
  * @returns {Vector2}
  */
  cubic : function(p0x, p1x, p2x, p3x, t, tt, oneMinusT){
    return  Math.pow(oneMinusT, 3) * p0x +
            Math.pow(oneMinusT, 2) * 3 * t * p1x +
            oneMinusT * 3 * tt * p2x +
            tt * t * p3x;
  }

  // quadratic: function(p0, p1, p2, t, pFinal) {
  //   pFinal = pFinal || {};
  //
  //   pFinal.x =  Math.pow(1 - t, 2) * p0.getX() +
  //               (1 - t) * 2 * t * p1.getX() +
  //               tt * p2.getX()
  //               ;
  //   pFinal.y =  Math.pow(1 - t, 2) * p0.getY() +
  //               (1 - t) * 2 * t * p1.getY() +
  //               tt * p2.getY()
  //               ;
  //   return pFinal;
  // },
  //
  // cubic: function(p0, p1, p2, p3, t, pFinal) {
  //   pFinal = pFinal || {};
  //   pFinal.x =  Math.pow(1 - t, 3) * p0.getX() +
  //               Math.pow(1 - t, 2) * 3 * t * p1.getX() +
  //               (1 - t) * 3 * t * t * p2.getX() +
  //               t * t * t * p3.getX()
  //               ;
  //   pFinal.y =  Math.pow(1 - t, 3) * p0.getY() +
  //               Math.pow(1 - t, 2) * 3 * t * p1.getY() +
  //               (1 - t) * 3 * t * t * p2.getY() +
  //               t * t * t * p3.getY()
  //               ;
  //   return pFinal;
  // }

};
