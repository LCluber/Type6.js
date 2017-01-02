/**
* A class that contains a bunch of trigonometry tools.
* @namespace
*
*/
TYPE6.Trigonometry = {
  /**
  * @access public
  * @constant
  * @type {bool}
  * @default
  */
  PI             : TYPE6.MathUtils.round( Math.PI, 2 ),//3.1415926535897932384626433832795
  /**
  * @access public
  * @constant
  * @type {bool}
  * @default
  */
  TWOPI          : TYPE6.MathUtils.round( Math.PI * 2, 2 ),//6.283185307179586
  /**
  * @access public
  * @constant
  * @type {bool}
  * @default
  */
  HALFPI         : TYPE6.MathUtils.round( Math.PI * 0.5, 2 ),//1.57079632679

  /**
  * precision needed for sine computation
  * @since 0.2.0
  * @type {int}
  */
  sineDecimals   : 2,//decimals

  /**
  * precision needed for cosine computation
  * @since 0.2.0
  * @type {int}
  */
  cosineDecimals : 2,//decimals
  /**
  * precision needed for arctangent computation
  * @since 0.2.0
  * @type {int}
  */
  arctanDecimals : 2,

  /**
  * pre-computed list of factorials
  * @since 0.2.0
  */
  factorialArray : [],

  /**
  * number of loops needed to get the desired precision for sine
  * @since 0.2.0
  */
  sineLoops      : {
    //number of loops needed to get x decimals precision on full circle
    0 : 9,//gives 0 decimals precision on full circle
    1 : 11,//gives 1 decimals precision on full circle
    2 : 13,//gives 2 decimals precision on full circle
    3 : 15,//gives 3 decimals precision on full circle
    4 : 17,//gives 4 decimals precision on full circle
    5 : 18,//gives 5 decimals precision on full circle
    6 : 19,//gives 6 decimals precision on full circle
    7 : 21,//gives 7 decimals precision on full circle
    8 : 23,//gives 8 decimals precision on full circle
  },
  /**
  * number of loops needed to get the desired precision for cosine
  * @since 0.2.0
  */
  cosineLoops    : {
    //number of loops needed to get x decimals precision on full circle
    0 : 6,//gives 0 decimals precision on full circle
    1 : 8,//gives 1 decimals precision on full circle
    2 : 10,//gives 2 decimals precision on full circle
    3 : 12,//gives 3 decimals precision on full circle
    4 : 14,//gives 4 decimals precision on full circle
    5 : 16,//gives 5 decimals precision on full circle
    6 : 18,//gives 6 decimals precision on full circle
    7 : 20,//gives 7 decimals precision on full circle
    8 : 22,//gives 8 decimals precision on full circle
  },

  /**
  * number of loops needed to get the desired precision for arctangent
  * @since 0.2.0
  */
  arctanLoops      : {
    //number of loops needed to get x decimals precision on full circle
    0 : 17,//gives 0 decimals precision on full circle
    1 : 19,//gives 1 decimals precision on full circle
    2 : 21,//gives 2 decimals precision on full circle
    3 : 23,//gives 3 decimals precision on full circle
    4 : 25,//gives 4 decimals precision on full circle
    5 : 27,//gives 5 decimals precision on full circle
    6 : 29,//gives 6 decimals precision on full circle
    7 : 31,//gives 7 decimals precision on full circle
    8 : 33,//gives 8 decimals precision on full circle
  },

  /**
  * set sine decimals precision.
  * @since 0.2.0
  * @method
  * @param {integer} value The number of precise decimals you need. The the angle are big, or the more your radius is bug the more decimals you will need.
  * @returns {integer} given parameter if valid of default to 2
  */
  setSinePrecision: function (value){
    if(this.sineLoops.hasOwnProperty(property)){
      this.sineDecimals = value;
      return value;
    }
    this.sineDecimals = 2;
    return 2;
  },

  /**
  * set cosine decimals precision.
  * @since 0.2.0
  * @method
  * @param {integer} value The number of decimals.
  * @returns {integer} given parameter if valid of default to 2
  */
  setCosinePrecision: function (value){
    if(this.cosineLoops.hasOwnProperty(property)){
      this.cosineDecimals = value;
      return value;
    }
    this.cosineDecimals = 2;
    return 2;
  },

  /**
  * get radian from degree.
  * @since 0.0.1
  * @method
  * @param {float} value The number of decimals.
  * @returns {float} given degree in radian
  */
  degreeToRadian: function ( degree ){
    return degree * this.PI / 180;
  },

  /**
  * get degree from radian
  * @since 0.0.1
  * @method
  * @param {float} value The number of decimals.
  * @returns {float} given radian in degree
  */
  radianToDegree: function ( radian ){
    return radian * 180 / this.PI;
  },

  /**
  * find the sine an angle
  * https://en.wikipedia.org/wiki/Taylor_series
  * @since 0.0.1
  * @method
  * @param {float} the angle in radians.
  * @returns {float} the sine of the angle
  */
  sine: function ( angle ){//estim sine
    //x - (1/3!)x3 + (1/5!)x5 - (1/7!)x7
    angle = this.normalizeRadian(angle);
    if( this.sineDecimals <= 2 && (angle < 0.28 && angle > -0.28) ){
      return angle;
    }else{
      return this.taylorSerie(3, this.sineLoops[this.sineDecimals], angle, angle, true);
    }
  },

  /**
  * find the cosine an angle
  * https://en.wikipedia.org/wiki/Taylor_series
  * @since 0.0.1
  * @method
  * @param {float} the angle in radians.
  * @returns {float} the cosine of the angle
  */
  cosine: function ( angle ){//estim cosine
    //1 - (1/2!)x2 + (1/4!)x4 - (1/6!)x6
    angle = this.normalizeRadian(angle);
    var squaredAngle = angle * angle;
    if( this.cosineDecimals <= 2 && (angle <= 0.5 && angle >= -0.5) ){
      return 1 - ( squaredAngle * 0.5 );
    }else{
      return this.taylorSerie(2, this.cosineLoops[this.cosineDecimals], 1, angle, true);
    }
  },

  /**
  * Estimate arctangent on four quadrants
  * https://en.wikipedia.org/wiki/Atan2
  * @since 0.1.0
  * @method
  * @param {float} distance of 2 point on the x axis.
  * @param {float} distance of 2 points on the y axis.
  * @returns {float} the arctangent of the angle
  */
  arctan2: function(x, y) {
    var angle = y/x;
    if ( x > 0 ){
      return this.arctan(angle);
    }else if (x < 0 ){
      if (y < 0){
        return this.arctan(angle) - this.PI;
      }else {
        return this.arctan(angle) + this.PI;
      }
    }else{ // x = 0
      if (y < 0){
        return - this.HALFPI;
      }else if (y > 0 ){
        return this.HALFPI;
      }else { //y = 0
        return false;
      }
    }
  },

  /**
  * Estimate arctangent from a vector Vec2
  * @since 0.1.0
  * @method
  * @param {float} The angle in radians -2pi < x < 2pi .
  * @returns {float} the arctangent of the angle
  */
  arctan2fromVector2D: function(vector2D) {
    return this.arctan2(vector2D.getX(), vector2D.getY());
  },

  /**
  * Estimate arctangent from an angle on 2 quadrants
  * http://myweb.lmu.edu/hmedina/Papers/ReprintMonthly156-161-medina.pdf
  * @since 0.1.0
  * @method
  * @param {float} The angle in radians -2pi < x < 2pi .
  * @returns {float} the arctangent of the angle
  */
  arctan: function (angle) {
    //x−x3/3+x5/5−x7/7+ for -1 < x < 1
    var loops = this.arctanLoops[this.arctanDecimals];
    if( angle < 1 && angle > -1 ){
      return this.taylorSerie(3, loops, angle, angle, false);
    }else{
      //- arctan (x) = actan (1/x) - pi/2
      if( angle >= 1 ){
        angle = 1/angle;
        return - (this.taylorSerie(3, loops, angle, angle, false) - this.HALFPI);
      }else{
        angle = -1/angle;
        return this.taylorSerie(3, loops, angle, angle, false) - this.HALFPI;
      }
    }
  },

  /**
  * Sine equation
  * @since 0.0.1
  * @method
  * @param {float} the amplitude of the wave.
  * @param {float} the period of the wave.
  * @param {float} the shift of the wave on the x axis.
  * @param {float} the shift of the wave on the y axis.
  * @returns {integer}
  */
  sineEquation: function (amplitude, period, shiftX, shiftY){
    return amplitude * this.sine( period + shiftX ) + shiftY;
  },

  /**
  * cosine equation.
  * @since 0.0.1
  * @method
  * @param {float} the amplitude of the wave.
  * @param {float} the period of the wave.
  * @param {float} the shift of the wave on the x axis.
  * @param {float} the shift of the wave on the y axis
  * @returns {integer}
  */
  cosineEquation: function (amplitude, period, shiftX, shiftY){
    return amplitude * this.cosine( period + shiftX ) + shiftY;
  },

  /**
  * arctangent equation
  * @since 0.0.1
  * @method
  * @param {float} the amplitude of the wave.
  * @param {float} the period of the wave.
  * @param {float} the shift of the wave on the x axis.
  * @param {float} the shift of the wave on the y axis.
  * @returns {integer}
  */
  arctanEquation: function (amplitude, period, shiftX, shiftY){
    return amplitude * this.arctan( period + shiftX ) + shiftY;
  },

  /**
  * This function is used to estimate sines, cosines and arctangent and should not be used outside of this.
  * https://en.wikipedia.org/wiki/Taylor_series
  * @since 0.2.0
  * @method
  * @private
  * @param {integer} value The number of decimals.
  * @param {integer} value The number of decimals.
  * @param {integer} the first value of the serie.
  * @param {integer} the angle you are looking for.
  * @param {boolean} for sine and cosine denominator is a factorial. for arctan denominator is i
  * @returns {float}
  */
  taylorSerie: function(start, max, x, angle, needFactorial){
    var squaredAngle  = angle * angle;
    var result        = x;
    var denominator   = 0;
    var sign          = -1;
    for(var i = 0 ; start <= max ; start += 2, i++){
      x            *= squaredAngle;
      denominator   = needFactorial ? this.factorialArray[start] : start ;
      result       += x / denominator * sign;
      sign          = TYPE6.MathUtils.getOppositeSign(sign);
    }
    return result;
  },

  /**
  * @since 0.0.1
  * @method
  * @private
  */
  createFactorialArray: function (){
    for( var i = 1, f = 1 ; i <= Math.max(this.sineLoops[8]*3,this.cosineLoops[8]*2) ; i++ ){
      f *= this.factorial(i);
      this.factorialArray.push(f);
    }
  },

  /**
  * this function is optimised to create the factorial array used to estimate sines and cosines. It's not safe or practical to use it outside
  * @since 0.0.1
  * @method
  * @private
  * @param {integer} the number to factor.
  */
  factorial: function ( i ){
    return i > 1 ? ( i - 1 ) : 1 ;
  },

  /**
  * this function normalizes an angle in radians between -Pi an Pi
  * http://commons.apache.org/proper/commons-math/apidocs/src-html/org/apache/commons/math3/util/MathUtils.html#line.90
  * @since 0.0.1
  * @method
  * @param {float} angle in radian.
  * @returns {float} between -Pi and Pi
  */
  normalizeRadian: function(angle){
    //console.log(angle);
    if ( angle > this.PI || angle < -this.PI ){
      //console.log(angle - this.TWOPI * Math.floor((angle + this.PI) / this.TWOPI));
      return angle - this.TWOPI * Math.floor((angle + this.PI) / this.TWOPI);
    }
    return angle;
  },

};
TYPE6.Trigonometry.createFactorialArray();
//console.log(TYPE6.Trigonometry.factorialArray);


// function radi(a){//radian
//     return ro(a*0.0174,2);
// }
// function facto(a){return a>1?a*facto(a-1):1;}



// function rcar2(a){
// 	if(a){
// 		for(var i=0,b=a*0.5;i<10;i++)b=0.5*(b+a/b);
// 		return ro(b,2);
// 	}else return 0;
// }
