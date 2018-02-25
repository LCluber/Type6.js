import {Trigonometry} from '../trigonometry';
import {Vector2} from '../vectors/vector2';

export class Circle {

  public position: Vector2;
  private _radius: number;
  private _diameter: number;
  readonly shape: 'circle';
  
  constructor(positionX: number, positionY: number, radius: number) {
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
    return new Circle(this.position.x, this.position.y, this.radius);  
  }

  public copy( circle: Circle ): void {
    this.position.copy(circle.position);
    this.radius = circle.radius;
  }

  public set( positionX: number, positionY: number, radius: number ): void {
    this.position.set(positionX, positionY);
    this.radius = radius;
  }

  public scale(scalar: number): void {
    this.radius *= scalar;
  }
  
  /**
  * draw the circle in a canvas.
  */
  draw( context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number ){
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
