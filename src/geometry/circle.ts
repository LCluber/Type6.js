import {Trigonometry} from '../trigonometry';
import {Vector2} from '../vectors/vector2';

export class Circle {

  public position: Vector2;
  private _radius: number;
  private _diameter: number;
  readonly shape: 'circle' = 'circle';

  constructor(radius: number, positionX: number, positionY: number) {
    this._radius = 0.0;
    this._diameter = 0.0;
    this.position = new Vector2( positionX, positionY );
    this.radius = radius;
  }

  set radius(radius : number) {
    this._radius   = radius;
    this._diameter = this._radius * 2;
  }

  get radius(): number {
    return this._radius;
  }

  set diameter(diameter : number) {
    this._diameter = diameter;
    this._radius = this._diameter * 0.5;
  }

  get diameter(): number {
    return this._diameter;
  }

  public clone(): Circle {
    return new Circle(this.radius, this.position.x, this.position.y);
  }

  public copy( circle: Circle ): Circle {
    this.position.copy(circle.position);
    this.radius = circle.radius;
    return this;
  }

  public setPosition( positionX: number, positionY: number ) {
    this.position.setScalar(positionX, positionY);
    return this;
  }

  public setRadius( radius: number ) {
    this.radius = radius;
    return this;
  }

  public setDiameter( diameter: number ) {
    this.diameter = diameter;
    return this;
  }

  public scale(scalar: number): Circle {
    this.radius *= scalar;
    return this;
  }

  public isIn(v: Vector2): boolean {
    return v.getDistance(this.position, true) <= this.radius * this.radius;
  }

  /**
  * draw the circle in a canvas.
  */
  draw( context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number ): void {
    context.beginPath();
    context.arc(  this.position.x,
                  this.position.y,
                  this.radius,
                  0,
                  Trigonometry.twopi,
                  false
                );
    if(fillColor) {
      context.fillStyle = fillColor;
      context.fill();
    }
    if(strokeColor) {
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.stroke();
    }
  }

};
