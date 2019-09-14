import {AxisNames2d} from '../types';
import {Trigonometry} from '../trigonometry';
import {Bezier} from '../bezier';
import {Rectangle} from '../geometry/rectangle';
import {Utils} from '../utils';

// export interface Vector2 {
//   [key: string]: any;
// }

export class Vector2 {
  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x||0.0;
    this.y = y||0.0;
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
    if(angle) {
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

};
