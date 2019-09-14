
export interface Vector3 {
  [key: string]: any;
}

export class Vector3 {
  public x: number;
  public y: number;
  public z: number;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x||0.0;
    this.y = y||0.0;
    this.z = z||0.0;
  }

  public fromArray( array: number[], offset?: number ): Vector3 {
    if ( offset === undefined ){
      offset = 0;
    }

    this.x = array[ offset ];
    this.y = array[ offset + 1 ];
    this.z = array[ offset + 2 ];
    return this;
  }

  public toArray(): number[] {
    return [ this.x, this.y, this.z ];
  }

  public toString(): string {
    return '(x = ' + this.x + ';y = ' + this.y + ';z = ' + this.z + ')';
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

  public copy(vector3: Vector3 ): Vector3 {
    this.x = vector3.x;
    this.y = vector3.y;
    this.z = vector3.z;
    return this;
	}

  public origin(): Vector3 {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    return this;
  }

  public getMagnitude(): number {
    return Math.sqrt(this.getSquaredMagnitude());
  }

  public getSquaredMagnitude(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public getDistance(vector3: Vector3): number {
    this.subtract(vector3);
    let magnitude = this.getMagnitude();
    this.add(vector3);
    return magnitude;
  }

  public getSquaredDistance(vector3: Vector3): number {
    this.subtract(vector3);
    let squaredMagnitude = this.getSquaredMagnitude();
    this.add(vector3);
    return squaredMagnitude;
  }

  public add(vector3: Vector3): Vector3 {
    this.x += vector3.x;
    this.y += vector3.y;
    this.z += vector3.z;
    return this;
  }

  public addScalar(scalar: number): Vector3 {
    this.x += scalar;
    this.y += scalar;
    this.z += scalar;
    return this;
  }

  public addScaledVector(vector3: Vector3, scalar: number): Vector3 {
    this.x += vector3.x * scalar;
    this.y += vector3.y * scalar;
    this.z += vector3.z * scalar;
    return this;
  }

  public addVectors ( v1: Vector3, v2: Vector3 ): Vector3 {
    this.x = v1.x + v2.x;
    this.y = v1.y + v2.y;
    this.z = v1.z + v2.z;
    return this;
  }

  public subtract(vector3: Vector3): Vector3 {
    this.x -= vector3.x;
    this.y -= vector3.y;
    this.z -= vector3.z;
    return this;
  }

  public subtractScalar(scalar: number): Vector3 {
    this.x -= scalar;
    this.y -= scalar;
    this.z -= scalar;
    return this;
  }

  public subtractScaledVector(vector3: Vector3, scalar: number): Vector3 {
    this.x -= vector3.x * scalar;
    this.y -= vector3.y * scalar;
    this.z -= vector3.z * scalar;
    return this;
  }

  public subtractVectors ( v1: Vector3, v2: Vector3 ): Vector3 {
    this.x = v1.x - v2.x;
    this.y = v1.y - v2.y;
    this.z = v1.z - v2.z;
    return this;
  }

  public scale(value: number): Vector3 {
    this.x *= value;
    this.y *= value;
    this.z *= value;
    return this;
  }

  //component product
  public multiply(vector3: Vector3): Vector3 {
    this.x *= vector3.x;
    this.y *= vector3.y;
    this.z *= vector3.z;
    return this;
  }

  public multiplyScaledVector(vector3: Vector3, scalar: number): Vector3 {
    this.x *= vector3.x * scalar;
    this.y *= vector3.y * scalar;
    this.z *= vector3.z * scalar;
    return this;
  }

  public multiplyVectors ( v1: Vector3, v2: Vector3 ): Vector3 {
    this.x = v1.x * v2.x;
    this.y = v1.y * v2.y;
    this.z = v1.z * v2.z;
    return this;
  }

  public divide(vector3: Vector3): Vector3 {
    this.x /= vector3.x;
    this.y /= vector3.y;
    this.z /= vector3.z;
    return this;
  }

  public divideScaledVector(vector3: Vector3, scalar: number): Vector3 {
    this.x /= vector3.x * scalar;
    this.y /= vector3.y * scalar;
    this.z /= vector3.z * scalar;
    return this;
  }

  public divideVectors ( v1: Vector3, v2: Vector3 ): Vector3 {
    this.x = v1.x / v2.x;
    this.y = v1.y / v2.y;
    this.z = v1.z / v2.z;
    return this;
  }

  public halve(): Vector3 {
    this.x *= 0.5;
    this.y *= 0.5;
    this.z *= 0.5;
    return this;
  }

  public max(vector3: Vector3): Vector3 {
    this.x = Math.max( this.x, vector3.x );
    this.y = Math.max( this.y, vector3.y );
    this.z = Math.max( this.z, vector3.z );
    return this;
  }

  public min(vector3: Vector3): Vector3 {
    this.x = Math.min( this.x, vector3.x );
    this.y = Math.min( this.y, vector3.y );
    this.z = Math.min( this.z, vector3.z );
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

  public dotProduct(vector3: Vector3): number { //scalar product
    return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
  }

  public cross(vector3: Vector3 ): Vector3 {
    let x = this.x, y = this.y, z = this.z;
    this.x =  y * vector3.z - z * vector3.y;
    this.y =  z * vector3.x - x * vector3.z;
    this.z =  x * vector3.y - y * vector3.x;
    return this;
  }

  public crossVectors( v1: Vector3, v2: Vector3 ): Vector3 {

    let v1x = v1.x, v1y = v1.y, v1z = v1.z;
    let v2x = v2.x, v2y = v2.y, v2z = v2.z;

    this.x = v1y * v2z - v1z * v2y;
    this.y = v1z * v2x - v1x * v2z;
    this.z = v1x * v2y - v1y * v2x;
    return this;
  }

};
