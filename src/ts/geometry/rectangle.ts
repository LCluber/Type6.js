import {AxisNames2d} from '../types';
import {Vector2 } from '../vectors/vector2';

export class Rectangle {

  public position : Vector2;
  public topLeftCorner : Vector2;
  public bottomRightCorner : Vector2;
  public size : Vector2;
  public halfSize : Vector2;
  readonly shape: 'aabb' = 'aabb';


  constructor( positionX: number, positionY: number, sizeX: number, sizeY: number ) {
    //this.initSize( sizeX, sizeY );
    //this.initPosition( positionX, positionY );
    this.size = new Vector2( sizeX, sizeY );
    this.halfSize = new Vector2();
    this.setHalfSize();
    this.position          = new Vector2( positionX, positionY );
    this.topLeftCorner     = new Vector2( positionX - this.halfSize.x, positionY - this.halfSize.y );
    this.bottomRightCorner = new Vector2( positionX + this.halfSize.x, positionY + this.halfSize.y );
  }

  // private initSize( sizeX: number, sizeY: number ): void {
  //   this.size = new Vector2( sizeX, sizeY );
  //   this.setHalfSize();
  // }
  //
  // private initPosition( positionX: number, positionY: number ): void {
  //   this.position          = new Vector2( positionX, positionY );
  //   this.topLeftCorner     = new Vector2( positionX - this.halfSize.x, positionY - this.halfSize.y );
  //   this.bottomRightCorner = new Vector2( positionX + this.halfSize.x, positionY + this.halfSize.y );
  // }

  public clone(): Rectangle {
    return new Rectangle(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  public copy( rectangle: Rectangle ): void {
    this.setSizeFromVector( rectangle.size );
    this.setPositionFromVector( rectangle.position );
  }

  public set( positionX: number, positionY: number, sizeX: number, sizeY: number ): void {
    this.setSizeXY( sizeX, sizeY );
    this.setPositionXY( positionX, positionY );
  }

  public setPositionX(x: number): void {
    this.setPosition('x', x);
  }

  public setPositionY(y: number): void {
    this.setPosition('y', y);
  }

  public setPosition(property: AxisNames2d, value: number): void {
    this.position[property] = value;
    this.topLeftCorner[property] = value - this.halfSize[property];
    this.bottomRightCorner[property] = value + this.halfSize[property] ;
  }

  public setPositionXY( positionX: number, positionY: number ): void {
    this.position.set( positionX, positionY );
    this.setCorners();
  }

  public setPositionFromVector( position: Vector2 ): void {
    this.position.copy( position );
    this.setCorners();
  }



  public setSizeX( width: number ): void {
    this.setSize('x', width);
  }

  public setSizeY( height: number ): void {
    this.setSize('y', height);
  }

  public setSize(property: AxisNames2d, value: number): void {
    this.size[property] = value;
    this.setHalfSize();
    this.topLeftCorner[property] = this.position[property] - this.halfSize[property];
    this.bottomRightCorner[property] = this.position[property] + this.halfSize[property];
  }

  public setSizeXY( width: number, height: number ): void {
    this.size.set( width, height );
    this.setHalfSize();
    this.setCorners();
  }

  public setSizeFromVector( size: Vector2 ): void {
    this.size.copy( size );
    this.setHalfSize();
    this.setCorners();
  }

  private setCorners(): void {
    this.topLeftCorner.set( this.position.x - this.halfSize.x,
                            this.position.y - this.halfSize.y );
    this.bottomRightCorner.set( this.position.x + this.halfSize.x,
                                this.position.y + this.halfSize.y );
  }

  private setHalfSize(): void {
    this.halfSize.copy(this.size);
    this.halfSize.halve();
  }

  /**
  * draw the rectangle in a canvas.
  */
  draw( context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number ){
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

  // clampTo:function(rectangle){
  //   this.position.clampTo(rectangle);
  // },

  // /**
  // * set cosine decimals precision.
  // * @since 0.0.3
  // * @param {float} value The number of decimals.
  // * @returns {Vector2}
  // */
  // scale: function(scalar) {
  //   return this.create( this.position.getX(), this.position.getY(),
  //                       this.radius * scalar
  //                     );
  // },

  // /**
  // * set cosine decimals precision.
  // * @since 0.0.3
  // * @param {float} value The number of decimals.
  // * @returns {Vector2}
  // */
  // scaleBy: function(scalar) {
  //   this.setRadius( this.radius * scalar);
  //   return this.radius;
  // },

};
