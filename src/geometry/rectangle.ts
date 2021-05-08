import { Vector2 } from '../vectors/vector2';
import { Vector } from '../vectors/Vector';
import { Utils } from '../utils';

export class Rectangle {

  public position : Vector2;
  public topLeftCorner : Vector;
  public bottomRightCorner : Vector;
  public size : Vector2;
  public halfSize : Vector2;
  readonly shape: 'aabb' = 'aabb';

  constructor( width: number, height: number, positionX: number, positionY: number ) {
    this.position = new Vector2(positionX, positionY);
    this.size = new Vector2( width, height );
    this.halfSize = new Vector2();
    this.topLeftCorner = new Vector2();
    this.bottomRightCorner = new Vector2();
    this.setHalfSize();
    this.setCorners();
  }

  public clone(): Rectangle {
    return new Rectangle(this.size.x, this.size.y, this.position.x, this.position.y);
  }

  public copy( rectangle: Rectangle ): Rectangle {
    this.setSize( rectangle.size.x, rectangle.size.y );
    this.setPosition( rectangle.position.x, rectangle.position.y );
    return this;
  }
  
  public setPosition(positionX: number, positionY: number): void {
    this.position.setFromScalar( positionX, positionY );
    this.setCorners();
  }

  public setSize(width: number, height: number): void {
    this.size.setFromScalar(width, height);
    this.setHalfSize();
    this.setCorners();
  }

  public isIn(vector: Vector2): boolean {
    return (Utils.isIn(vector.x, this.topLeftCorner.x, this.bottomRightCorner.x)
            && Utils.isIn(vector.y, this.topLeftCorner.y, this.bottomRightCorner.y));
  }

  /**
  * draw the rectangle in a canvas.
  */
  public draw( context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number ): void {
    context.beginPath();
    context.rect( this.topLeftCorner.x,
                  this.topLeftCorner.y,
                  this.size.x,
                  this.size.y
                );
    if( fillColor ){
      context.fillStyle = fillColor;
      context.fill();
    }
    if( strokeColor ){
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.stroke();
    }
  }

  private setCorners(): void {
    this.topLeftCorner.copy(this.position).subtract(this.halfSize);
    this.bottomRightCorner.copy(this.position).add(this.halfSize);
  }

  private setHalfSize(): void {
    this.halfSize.copy(this.size).halve();
  }

  // clampTo:function(rectangle){
  //   this.position.clampTo(rectangle);
  // },

};
