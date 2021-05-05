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

  constructor( width: number, height: number, positionX: number | number[] | Vector2, positionY?: number ) {
    this.position = new Vector2(positionX, positionY);
    this.size = new Vector2( width, height );
    this.halfSize = new Vector2();
    this.topLeftCorner = new Vector2();
    this.bottomRightCorner = new Vector2();
    this.setHalfSize();
    this.setCorners();
  }

  public clone(): Rectangle {
    return new Rectangle(this.size.x, this.size.y, this.position);
  }

  public copy( rectangle: Rectangle ): Rectangle {
    this.setSize( rectangle.size );
    this.setPosition( rectangle.position );
    return this;
  }
  
  public setPosition(positionX: number | number[] | Vector2, positionY?: number): void {
    this.position.set( positionX, positionY );
    this.setCorners();
  }

  public setSize(width: number | number[] | Vector2, height?: number): void {
    this.size.set(width, height);
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
    this.topLeftCorner.set(this.position).subtract(this.halfSize);
    this.bottomRightCorner.set(this.position).add(this.halfSize);
  }

  private setHalfSize(): void {
    this.halfSize.set(this.size).halve();
  }

  // clampTo:function(rectangle){
  //   this.position.clampTo(rectangle);
  // },

};
