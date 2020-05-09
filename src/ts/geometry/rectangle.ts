import {AxisNames2d} from '../types';
import {Vector2 } from '../vectors/vector2';
import {Utils} from '../utils';

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

  public copy( rectangle: Rectangle ): Rectangle {
    this.setSizeFromVector( rectangle.size );
    this.setPositionFromVector( rectangle.position );
    return this;
  }

  public set( positionX: number, positionY: number, sizeX: number, sizeY: number ): Rectangle {
    this.setSizeXY( sizeX, sizeY );
    this.setPositionXY( positionX, positionY );
    return this;
  }

  public setPositionX(x: number): Rectangle {
    this.setPosition('x', x);
    return this;
  }

  public setPositionY(y: number): Rectangle {
    this.setPosition('y', y);
    return this;
  }

  private setPosition(property: AxisNames2d, value: number): void {
    this.position[property] = value;
    this.topLeftCorner[property] = value - this.halfSize[property];
    this.bottomRightCorner[property] = value + this.halfSize[property] ;
  }

  public setPositionXY( positionX: number, positionY: number ): Rectangle {
    this.position.set( positionX, positionY );
    this.setCorners();
    return this;
  }

  public setPositionFromVector( position: Vector2 ): Rectangle {
    this.position.copy( position );
    this.setCorners();
    return this;
  }


  public setSizeX( width: number ): Rectangle {
    this.setSize('x', width);
    return this;
  }

  public setSizeY( height: number ): Rectangle {
    this.setSize('y', height);
    return this;
  }

  private setSize(property: AxisNames2d, value: number): void {
    this.size[property] = value;
    this.setHalfSize();
    this.topLeftCorner[property] = this.position[property] - this.halfSize[property];
    this.bottomRightCorner[property] = this.position[property] + this.halfSize[property];
  }

  public setSizeXY( width: number, height: number ): Rectangle {
    this.size.set( width, height );
    this.setHalfSize();
    this.setCorners();
    return this;
  }

  public setSizeFromVector( size: Vector2 ): Rectangle {
    this.size.copy( size );
    this.setHalfSize();
    this.setCorners();
    return this;
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
