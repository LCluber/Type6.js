
// export interface Vector3 {
//   [key: string]: any;
// }

export class Vector3 {
  public x: number;
  public y: number;
  public z: number;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x||0.0;
    this.y = y||0.0;
    this.z = z||0.0;
  }

  //true if vector is equal to (0;0)
  public isOrigin(): boolean {
    return (this.x === 0 && this.y === 0 && this.z === 0) ? true : false;
  }

  public isPositive(): boolean {
    return ( this.x >= 0 && this.y >= 0 && this.z >= 0) ? true : false;
  }

  public toArray(): number[] {
    return [ this.x, this.y, this.z ];
  }

  public toString(): string {
    return '(x = ' + this.x + '; y = ' + this.y + '; z = ' + this.z + ')';
  }

  public set(x:number, y:number, z:number): Vector3 {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public clone(): Vector3 {
    return new Vector3(this.x,this.y,this.z);
  }

  public copy(v: Vector3 ): Vector3 {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
	}

  public origin(): Vector3 {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    return this;
  }

  public getMagnitude(square: boolean = false): number {
    return square ? this.getSquaredMagnitude() : Math.sqrt(this.getSquaredMagnitude());
  }

  private getSquaredMagnitude(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public getDistance(v: Vector3, square: boolean = false): number {
    this.subtract(v);
    const magnitude = this.getMagnitude(square);
    this.add(v);
    return magnitude;
  }

  public add(v: Vector3): Vector3 {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public addScalar(scalar: number): Vector3 {
    this.x += scalar;
    this.y += scalar;
    this.z += scalar;
    return this;
  }

  public addScaledVector(v: Vector3, scalar: number): Vector3 {
    this.x += v.x * scalar;
    this.y += v.y * scalar;
    this.z += v.z * scalar;
    return this;
  }

  public subtract(v: Vector3): Vector3 {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  public subtractScalar(scalar: number): Vector3 {
    this.x -= scalar;
    this.y -= scalar;
    this.z -= scalar;
    return this;
  }

  public subtractScaledVector(v: Vector3, scalar: number): Vector3 {
    this.x -= v.x * scalar;
    this.y -= v.y * scalar;
    this.z -= v.z * scalar;
    return this;
  }

  public scale(value: number): Vector3 {
    this.x *= value;
    this.y *= value;
    this.z *= value;
    return this;
  }

  //component product
  public multiply(v: Vector3): Vector3 {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  public multiplyScaledVector(v: Vector3, scalar: number): Vector3 {
    this.x *= v.x * scalar;
    this.y *= v.y * scalar;
    this.z *= v.z * scalar;
    return this;
  }

  public divide(v: Vector3): Vector3 {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  public divideScaledVector(v: Vector3, scalar: number): Vector3 {
    this.x /= v.x * scalar;
    this.y /= v.y * scalar;
    this.z /= v.z * scalar;
    return this;
  }

  public halve(): Vector3 {
    this.x *= 0.5;
    this.y *= 0.5;
    this.z *= 0.5;
    return this;
  }

  public max(v: Vector3): Vector3 {
    this.x = Math.max( this.x, v.x );
    this.y = Math.max( this.y, v.y );
    this.z = Math.max( this.z, v.z );
    return this;
  }

  public min(v: Vector3): Vector3 {
    this.x = Math.min( this.x, v.x );
    this.y = Math.min( this.y, v.y );
    this.z = Math.min( this.z, v.z );
    return this;
  }

  public maxScalar(scalar: number): Vector3 {
    this.x = Math.max( this.x, scalar );
    this.y = Math.max( this.y, scalar );
    this.z = Math.max( this.z, scalar );
    return this;
  }

  public minScalar(scalar: number): Vector3 {
    this.x = Math.min( this.x, scalar );
    this.y = Math.min( this.y, scalar );
    this.z = Math.min( this.z, scalar );
    return this;
  }

  public normalize(): Vector3 {
    let length = this.getMagnitude();
    if(length && length != 1) {
      this.scale(1/length);
    }
    return this;
  }

  public absolute(): Vector3 {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    this.z = Math.abs(this.z);
    return this;
  }

  public opposite(): Vector3 {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  public dotProduct(v: Vector3): number { //scalar product
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  public cross(v: Vector3 ): Vector3 {
    let x = this.x, y = this.y, z = this.z;
    this.x =  y * v.z - z * v.y;
    this.y =  z * v.x - x * v.z;
    this.z =  x * v.y - y * v.x;
    return this;
  }

};
