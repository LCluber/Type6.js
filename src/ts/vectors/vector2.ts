import {AxisNames2d} from '../types';
import {Trigonometry} from '../trigonometry';
import {Bezier} from '../bezier';
import {Rectangle} from '../geometry/rectangle';
import {Utils} from '../utils';

// export enum Axis { x = 'x',
//                    y = 'y' };

export interface Vector2 {
  [key: string]: any;
}

export class Vector2 {
  private _x: number;
  private _y: number;

  constructor(x?: number, y?: number) {
    this._x = 0.0;
    this._y = 0.0;
    this.x = x||0.0;
    this.y = y||0.0;
  }

  set x(x : number) {
    this._x = Utils.validate(x);
  }

  get x(): number {
    return this._x;
  }

  set y(y: number) {
    this._y = Utils.validate(y);
  }

  get y(): number {
    return this._y;
  }

  //true if vector is equal to (0;0)
  public isOrigin(): boolean {
    return ( Utils.isOrigin(this.x) && Utils.isOrigin(this.y) ) ? true : false;
  }

  //true if vector is different than (0,0)
  public isNotOrigin(): boolean {
    return ( !Utils.isOrigin(this.x) || !Utils.isOrigin(this.y) ) ? true : false;
  }

  public isPositive(): boolean {
    return ( Utils.isPositive(this.x) && Utils.isPositive(this.y) ) ? true : false;
  }

  public isNegative(): boolean {
    return ( Utils.isNegative(this.x) && Utils.isNegative(this.y) ) ? true : false;
  }

  public fromArray( array: number[], offset?: number ): Vector2 {
    if ( offset === undefined ){
      offset = 0;
    }

    this.x = array[ offset ];
    this.y = array[ offset + 1 ];
    return this;
  }

  public toArray(): number[] {
    return [ this.x, this.y ];
  }

  public toString(): string {
    return '(x = ' + this.x + ';y = ' + this.y + ')';
  }

  public set(x:number, y:number): Vector2 {
    this.x = x;
    this.y = y;
    return this;
  }

  public clone(): Vector2 {
    return new Vector2(this.x,this.y);
  }

  public copy(vector2: Vector2 ): Vector2 {
    this.x = vector2.x;
    this.y = vector2.y;
    return this;
	}

  public origin(): Vector2 {
    this.x = 0.0;
    this.y = 0.0;
    return this;
  }

  public setAngle(angle: number): Vector2 {
    if(Utils.validate(angle)){
      let length = this.getMagnitude();
      this.x = Trigonometry.cosine( angle ) * length;
      this.y = Trigonometry.sine( angle ) * length;
    }
    return this;
  }

  public getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  public getMagnitude(): number{
    return Math.sqrt(this.getSquaredMagnitude());
  }

  public getSquaredMagnitude(): number {
    return this.x * this.x + this.y * this.y;
  }

  public getDistance(vector2: Vector2): number {
    this.subtract(vector2);
    let magnitude = this.getMagnitude();
    this.add(vector2);
    return magnitude;
  }

  public getSquaredDistance(vector2: Vector2): number {
    this.subtract(vector2);
    let squaredMagnitude = this.getSquaredMagnitude();
    this.add(vector2);
    return squaredMagnitude;

  }

  public quadraticBezier(p0:Vector2, p1:Vector2, p2:Vector2, t:number): Vector2 {
    this.x = Bezier.quadratic( p0.x, p1.x, p2.x, t );
    this.y = Bezier.quadratic( p0.y, p1.y, p2.y, t );
    return this;
  }

  public cubicBezier(p0:Vector2, p1:Vector2, p2:Vector2, p3:Vector2, t:number): Vector2 {
    this.x = Bezier.cubic( p0.x, p1.x, p2.x, p3.x, t );
    this.y = Bezier.cubic( p0.y, p1.y, p2.y, p3.y, t );
    return this;
  }

  public add(vector2: Vector2): Vector2 {
    this.x += vector2.x;
    this.y += vector2.y;
    return this;
  }

  public addScalar(scalar: number): Vector2 {
    this.x += scalar;
    this.y += scalar;
    return this;
  }

  public addScaledVector(vector2: Vector2, scalar: number): Vector2 {
    this.x += vector2.x * scalar;
    this.y += vector2.y * scalar;
    return this;
  }

  public addVectors ( v1: Vector2, v2: Vector2 ): Vector2 {
    this.x = v1.x + v2.x;
    this.y = v1.y + v2.y;
    return this;
  }

  public subtract(vector2: Vector2): Vector2 {
    this.x -= vector2.x;
    this.y -= vector2.y;
    return this;
  }

  public subtractScalar(scalar: number): Vector2 {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  }

  public subtractScaledVector(vector2: Vector2, scalar: number): Vector2 {
    this.x -= vector2.x * scalar;
    this.y -= vector2.y * scalar;
    return this;
  }

  public subtractVectors ( v1: Vector2, v2: Vector2 ): Vector2 {
    this.x = v1.x - v2.x;
    this.y = v1.y - v2.y;
    return this;
  }

  public scale(value: number): Vector2 {
    this.x *= value;
    this.y *= value;
    return this;
  }

  public scaleVector ( v1: Vector2, value: number ): Vector2 {
    this.x = v1.x * value;
    this.y = v1.y * value;
    return this;
  }


  //component product
  public multiply(vector2: Vector2): Vector2 {
    this.x *= vector2.x;
    this.y *= vector2.y;
    return this;
  }

  public multiplyScaledVector(vector2: Vector2, scalar: number): Vector2 {
    this.x *= vector2.x * scalar;
    this.y *= vector2.y * scalar;
    return this;
  }

  public multiplyVectors ( v1: Vector2, v2: Vector2 ): Vector2 {
    this.x = v1.x * v2.x;
    this.y = v1.y * v2.y;
    return this;
  }

  //Prefer scale by value inferior to 1 if possible
  public divide(vector2: Vector2): Vector2 {
    this.x /= vector2.x;
    this.y /= vector2.y;
    return this;
  }

  public divideScaledVector(vector2: Vector2, scalar: number): Vector2 {
    this.x /= vector2.x * scalar;
    this.y /= vector2.y * scalar;
    return this;
  }

  public divideVectors ( v1: Vector2, v2: Vector2 ): Vector2 {
    this.x = v1.x / v2.x;
    this.y = v1.y / v2.y;
    return this;
  }

  public halve(): Vector2 {
    this.x *= 0.5;
    this.y *= 0.5;
    return this;
  }

  public max(vector2: Vector2): Vector2 {
    this.x = Math.max( this.x, vector2.x );
    this.y = Math.max( this.y, vector2.y );
    return this;
  }

  public min(vector2: Vector2): Vector2 {
    this.x = Math.min( this.x, vector2.x );
    this.y = Math.min( this.y, vector2.y );
    return this;
  }

  public maxScalar(scalar: number): Vector2 {
    this.x = Math.max( this.x, scalar );
    this.y = Math.max( this.y, scalar );
    return this;
  }

  public minScalar(scalar: number): Vector2 {
    this.x = Math.min( this.x, scalar );
    this.y = Math.min( this.y, scalar );
    return this;
  }

  public maxAxis(): AxisNames2d {
    return (this.y > this.x) ? 'y' : 'x';
  }

  public minAxis(): AxisNames2d {
    return (this.y < this.x) ? 'y' : 'x';
  }

  public setOppositeAxis(axis: AxisNames2d, value: number): Vector2 {
    if(axis === 'y' ) {
      this.x = value;
    } else {
      this.y = value;
    }
    return this;
  }

  public normalize(): Vector2 {
    let length = this.getMagnitude();
    if( length && length != 1) {
      this.scale(1/length);
    }
    return this;
  }

  public normalizeVector(v: Vector2): Vector2 {
    this.copy(v);
    return this.normalize();
  }

  public absolute(): Vector2 {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  }

  public absoluteVector(v: Vector2): Vector2 {
    this.x = Math.abs(v.x);
    this.y = Math.abs(v.y);
    return this;
  }

  public opposite(): Vector2 {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  public oppositeVector(v: Vector2): Vector2 {
    this.x = -v.x;
    this.y = -v.y;
    return this;
  }

  public clamp( rectangle: Rectangle ): Vector2 {
    this.x = Utils.clamp(
              this.x,
              rectangle.topLeftCorner.x,
              rectangle.bottomRightCorner.x
            );
    this.y = Utils.clamp(
              this.y,
              rectangle.topLeftCorner.y,
              rectangle.bottomRightCorner.y
            );
    return this;
  }

  public lerp(normal: number, min: Vector2, max: Vector2): Vector2 {
    this.x = Utils.lerp( normal, min.x, max.x );
    this.y = Utils.lerp( normal, min.y, max.y );
    return this;
  }

  public dotProduct(vector2: Vector2): number { //scalar product
    return this.x * vector2.x + this.y * vector2.y;
  }

  // createFromArray: function ( array ) {
  //   var _this = Object.create(this);
  //   _this.setX( array[0] );
  //   _this.setY( array[1] );
  //   return _this;
  // },



  // /**
  // * Add a vector to this vector and returns a new vector
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector you want to add.
  // * @returns {Vector2} A new vector with the 2 vectors added
  // */
  // add: function(vector2) {
  //   return this.create( this.x + vector2.getX(),
  //                       this.y + vector2.getY()
  //                     );
  // },
  //
  // /**
  // * Add X value to this vector and returns a new vector
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector you want to add.
  // * @returns {Vector2} A new vector with the 2 vectors added
  // */
  // addX: function(x) {
  //   return this.create( this.x + x,
  //                       this.y
  //                     );
  // },
  //
  // /**
  // * Add Y value to this vector and returns a new vector
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector you want to add.
  // * @returns {Vector2} A new vector with the 2 vectors added
  // */
  // addY: function(y) {
  //   return this.create( this.x,
  //                       this.y + y
  //                     );
  // },
  //
  // /**
  // * Add a scalar to this vector and create a new vector
  // * @since 0.0.3
  // * @method
  // * @param {float} float The value you want to add.
  // * @returns {Vector2} A new vector with the given scalar added
  // */
  // addScalar: function(scalar) {
  //   return this.create( this.x + scalar,
  //                       this.y + scalar
  //                     );
  // },
  //
  // /**
  // * scale the given vector by the given scalar, add it to this vector and creates a new vector.
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector to scale.
  // * @param {float} scalar The scale amount.
  // * @returns {Vector2} A new vector with the scaled vector added
  // */
  // addScaledVector:function(vector2, scalar){
  //   return this.create( this.x + vector2.getX() * scalar,
  //                       this.y + vector2.getY() * scalar
  //                     );
  // },
  //
  // /**
  // * Subtract a vector to this vector and returns a new vector
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector you want to subtract.
  // * @returns {Vector2} A new vector with the 2 vectors subracted
  // */
  // subtract: function(vector2) {
  //   return this.create( this.x - vector2.getX(),
  //                       this.y - vector2.getY()
  //                     );
  // },
  //
  // /**
  // * Subtract this vector by the given scalar and create a new vector
  // * @since 0.0.3
  // * @method
  // * @param {float} float The value you want to subtract.
  // * @returns {Vector2} A new vector with the given scalar subtracted
  // */
  // subtractScalar: function(scalar) {
  //   return this.create( this.x - scalar,
  //                       this.y - scalar
  //                     );
  // },
  //
  // /**
  // * scale the given vector by the given scalar, subtract it to this vector and creates a new vector.
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector to scale.
  // * @param {float} scalar The scale amount.
  // * @returns {Vector2} A new vector with the scaled vector subtracted
  // */
  // subtractScaledVector:function(vector2, scalar){
  //   return this.create( this.x - vector2.getX() * scalar,
  //                       this.y - vector2.getY() * scalar
  //                     );
  // },
  //
  // /**
  // * scale this vector by the given scalar and create a new vector
  // * @since 0.0.3
  // * @method
  // * @param {float} value The value to scale the vactor by.
  // * @returns {Vector2} a new vector scaled by the given parameter
  // */
  // scale: function(value) {
  //   return this.create( this.x * value,
  //                       this.y * value
  //                     );
  // },
  //
  // /**
  // * Multiply this vector by the given one and create a new vector
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} vector2 The vector you want to multiply this current vector by.
  // * @returns {Vector2} a new vector with the new coordinates
  // */
  // //component product
  // multiply:function(vector2){
  //   return this.create( this.x * vector2.getX(),
  //                       this.y * vector2.getY()
  //                     );
  // },
  //
  // /**
  // * Divide this vector by the given one and create a new vector
  // * @since 0.0.6
  // * @method
  // * @param {Vector2} vector2 The vector you want to divide this current vector by.
  // * @returns {Vector2} a new vector with the new coordinates
  // */
  // divide: function(vector2) {
  //   return this.create( this.x / vector2.getX(),
  //                       this.y / vector2.getY()
  //                     );
  // },
  //
  // /**
  // * Halve the vector and create a new one
  // * @since 0.0.6
  // * @method
  // * @param {Vector2} vector2 The vector you want to divide this current vector by.
  // * @returns {Vector2} a new vector with the new coordinates
  // */
  // halve: function() {
  //   return this.create( this.x * 0.5,
  //                       this.y * 0.5
  //                     );
  // },
  //
  // /**
  // * Normalize the vector and create a new vector
  // * @since 0.0.3
  // * @method
  // * @returns {Vector2} a new vector of length one
  // */
  // normalize: function(){
  //   var length = this.getMagnitude();
  //   if(length){
  //     return this.scale( 1/length );
  //   }
  // },
  //
  // /**
  // * transform vector coordinates into absolute value. So negative values become positive
  // * @since 0.0.4
  // * @method
  // * @returns {Vector2} a new vector with absolute values
  // */
  // absolute:function(){
  //   return this.create( Math.abs( this.x ),
  //                       Math.abs( this.y )
  //                     );
  // },
  //
  // /**
  // * create a new vector with opposite coordinates
  // * @since 0.0.4
  // * @method
  // * @returns {Vector2} a new vector with absolute values
  // */
  // opposite:function(){
  //   return this.create( -this.x,
  //                       -this.y
  //                     );
  // },
  //
  // /**
  // * create a new vector with opposite X coordinate
  // * @since 0.0.4
  // * @method
  // * @returns {Vector2} a new vector with absolute values
  // */
  // oppositeX:function(){
  //   return this.create( -this.x,
  //                       this.y
  //                     );
  // },
  //
  // /**
  // * create a new vector with opposite Y coordinate
  // * @since 0.0.4
  // * @method
  // * @returns {Vector2} a new vector with absolute values
  // */
  // oppositeY:function(){
  //   return this.create( this.x,
  //                       -this.y
  //                     );
  // },
  //
  //
  // /**
  // * Clamp the vector inside the given rectangle.
  // * @since 0.0.2
  // * @method
  // * @param {Rectangle} Rectangle The rectangle in which you want to clamp this current vector.
  // * @returns {Vector2} a new vector clamped in the rectangle
  // */
  // clamp: function(rectangle){
  //   return this.create( TYPE6.MathUtils.clamp(
  //                         this.x,
  //                         rectangle.topLeftCorner.getX(),
  //                         rectangle.bottomRightCorner.getX()
  //                       ),
  //                       TYPE6.MathUtils.clamp(
  //                         this.y,
  //                         rectangle.topLeftCorner.getY(),
  //                         rectangle.bottomRightCorner.getY()
  //                       )
  //                     );
  // },
  //
  // /**
  // * computes a linear interpolation and creates a new vector.
  // * @since 0.0.1
  // * @method
  // * @param {Vector2} value The number of decimals.
  // * @returns {Vector2} a new vector
  // */
  // lerp: function(normal, min, max){
  //   return this.create( TYPE6.MathUtils.lerp( normal, min.getX(), max.getX() ),
  //                       TYPE6.MathUtils.lerp( normal, min.getY(), max.getY() )
  //                     );
  // },
  //
  // /**
  // * Quadratic bezier
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} value The number of decimals.
  // * @param {Vector2} value The number of decimals.
  // * @param {Vector2} value The number of decimals.
  // * @param {float} value The number of decimals.
  // * @returns {Vector2} a new vector
  // */
  // quadraticBezier: function(p0, p1, p2, t){
  //   var tt                  = t * t;
  //   var oneMinusT           = 1 - t;
  //   var powerOf2            = Math.pow(oneMinusT, 2);
  //   var oneMinusTByTwo2ByT  = oneMinusT * 2 * t;
  //   return this.create( TYPE6.Bezier.quadratic( p0.getX(), p1.getX(), p2.getX(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT ),
  //                       TYPE6.Bezier.quadratic( p0.getY(), p1.getY(), p2.getY(), t, tt, oneMinusT, powerOf2, oneMinusTByTwo2ByT )
  //                     );
  // },
  //
  // /**
  // * Cubic bezier
  // * @since 0.0.3
  // * @method
  // * @param {Vector2} value The number of decimals.
  // * @param {Vector2} value The number of decimals.
  // * @param {Vector2} value The number of decimals.
  // * @param {Vector2} value The number of decimals.
  // * @param {float} value The number of decimals.
  // * @returns {Vector2} a new vector
  // */
  // cubicBezier: function(p0, p1, p2, p3, t){
  //   var tt                  = t * t;
  //   var oneMinusT           = 1 - t;
  //   return this.create( TYPE6.Bezier.cubic( p0.getX(), p1.getX(), p2.getX(), p3.getX(), t, tt, oneMinusT ),
  //                       TYPE6.Bezier.cubic( p0.getY(), p1.getY(), p2.getY(), p3.getY(), t, tt, oneMinusT )
  //                     );
  // },



  //modifiy current vector


};
