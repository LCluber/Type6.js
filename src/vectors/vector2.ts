import {Vector} from './vector';
import {AxisNames2d} from '../types';
import {Trigonometry} from '../trigonometry';
import {Bezier} from '../bezier';
import {Rectangle} from '../geometry/rectangle';
import {Utils} from '../utils';

export class Vector2 extends Vector {
  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    super();
    this.x = x ?? 0.0;
    this.y = y ?? 0.0;
  }

  public set(x:number, y:number): Vector2 {
    this.x = x;
    this.y = y;
    return this;
  }

  public clone(): Vector2 {
    return new Vector2(this.x,this.y);
  }

  public setFromAngle(angle: number): Vector2 {
    if (angle) {
      let length = this.getMagnitude();
      this.x = Trigonometry.cosine( angle ) * length;
      this.y = Trigonometry.sine( angle ) * length;
    }
    return this;
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

  public getMaxAxis(): AxisNames2d {
    return (this.y > this.x) ? 'y' : 'x';
  }

  public getMinAxis(): AxisNames2d {
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

};
