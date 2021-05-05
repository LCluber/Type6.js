import {Vector} from './vector';
import {Trigonometry} from '../trigonometry';
import {Bezier} from '../bezier';
import {Rectangle} from '../geometry/rectangle';
import {Utils} from '../utils';
import { isArray, isNumber, isObject } from '@dwtechs/checkhard';

export class Vector2 extends Vector {
  public x: number = 0.0;
  public y: number = 0.0;

  constructor(x?: number | number[] | Vector2, y?: number) {
    super();
    this.set(x, y);    
  }

  public set( x?: number | number[] | Vector2, 
              y?: number | null
            ): Vector2 {
    
    if (isNumber(x) || isNumber(y)) { // set from scalars
      this.setAxis(x as number | null, y as number | undefined | null);
    } else if (isArray(x, 2)) { // set from Array
      this.setFromArray(x as number[]);
    } else if (isObject(x)) { // set from vector
      this.copy(x as Vector2);
    }
    return this;
  }

  public setFromRadian(angle: number): Vector2 {
    if (angle) {
      let length = this.getMagnitude();
      this.x = Trigonometry.cosine( angle ) * length;
      this.y = Trigonometry.sine( angle ) * length;
    }
    return this;
  }

  public setFromDegree(angle: number): Vector2 {
    if (angle) {
      angle = Trigonometry.degreeToRadian(angle);
      this.setFromRadian(angle);
    }
    return this;
  }

  public setMinAxis(scalar: number): Vector2 {
    if (this.y < this.x) {
      this.y = scalar;
    } else {
      this.x = scalar;
    }
    return this;
  }

  public setMaxAxis(scalar: number): Vector2 {
    if (this.y > this.x) {
      this.y = scalar;
    } else {
      this.x = scalar;
    }
    return this;
  }

  public setOppositeAxis(axis: 'x' | 'y', value: number): Vector2 {
    if(axis === 'y' ) {
      this.x = value;
    } else {
      this.y = value;
    }
    return this;
  }

  public clone(): Vector2 {
    return new Vector2(this.x,this.y);
  }

  public getAngle(): number|false {
    return Trigonometry.arctan2(this.y, this.x);
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

  public getMaxAxis(): 'x' | 'y' {
    return (this.y > this.x) ? 'y' : 'x';
  }

  public getMinAxis(): 'x' | 'y' {
    return (this.y < this.x) ? 'y' : 'x';
  }

  // clamp this vector to a rectangle
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

  public lerp(min: Vector2, max: Vector2, amount: number): Vector2 {
    this.x = Utils.lerp( min.x, max.x, amount );
    this.y = Utils.lerp( min.y, max.y, amount );
    return this;
  }

  private setAxis(x: number | null, y?: number | null ): void {
    let i = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (isNumber(arguments[i])) {
          this[axis] = arguments[i];
        }
        i++;
      }
    }
  }

};
