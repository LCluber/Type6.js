export interface Vector {
  [key: string]: any;
}

export class Vector {

  constructor() {

  }

  //true if vector is equal to (0;0)
  public isOrigin(): boolean {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (this[axis] !== 0) {
          return false;
        }
      }
    }
    return true;
  }

  public isPositive(): boolean {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (this[axis] <= 0) {
          return false;
        }
      }
    }
    return true;
  }

  public toArray(): number[] {
    let array = [];
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        array.push(this[axis]);
      }
    }
    return array;
  }

  public toString(): string {
    let str = '(';
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        str += `${axis} = ${this[axis]} ; `;
      }
    }
    return str.slice(0, -2) + ')';
    // '(x = ' + this.x + '; y = ' + this.y + '; z = ' + this.z + ')';
  }

  public copy(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) = v[axis];
      }
    }
    return this;
  }

  public origin(): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) = 0.0;
      }
    }
    return this;
  }

  public getMagnitude(square: boolean = false): number{
    let squaredMagnitude: number = this.getSquaredMagnitude();
    return square ? squaredMagnitude : Math.sqrt(squaredMagnitude);
  }

  private getSquaredMagnitude(): number {
    let squaredMagnitude: number = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        squaredMagnitude += this[axis] ** 2; 
      }
    }
    return squaredMagnitude;
  }

  public getDistance(v: Vector, square: boolean = false): number {
    this.subtract(v);
    const magnitude = this.getMagnitude(square);
    this.add(v);
    return magnitude;
  }

  public add(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) += v[axis];
      }
    }
    return this;
  }

  public addScaledVector(v: Vector, scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) += v[axis] * scalar;
      }
    }
    return this;
  }

  public addScalar(scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) += scalar;
      }
    }
    return this;
  }

  public subtract(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) -= v[axis];
      }
    }
    return this;
  }

  public subtractScaledVector(v: Vector, scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) -= v[axis] * scalar;
      }
    }
    return this;
  }

  public subtractScalar(scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) -= scalar;
      }
    }
    return this;
  }

  //component product
  public multiply(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) *= v[axis];
      }
    }
    return this;
  }

  public multiplyScaledVector(v: Vector, scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) *= v[axis] * scalar;
      }
    }
    return this;
  }

  public scale(scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) *= scalar;
      }
    }
    return this;
  }

  public divide(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) /= v[axis];
      }
    }
    return this;
  }

  public divideScaledVector(v: Vector, scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) /= v[axis] * scalar;
      }
    }
    return this;
  }

  public halve(): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) *= 0.5;
      }
    }
    return this;
  }

  public max(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) = Math.max( this[axis], v[axis] );
      }
    }
    return this;
  }

  public min(v: Vector): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (<number>this[axis]) = Math.min( this[axis], v[axis] );
      }
    }
    return this;
  }

  public maxScalar(scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) = Math.max( this[axis], scalar );
      }
    }
    return this;
  }

  public minScalar(scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) = Math.min( this[axis], scalar );
      }
    }
    return this;
  }

  public normalize(): Vector {
    let length = this.getMagnitude();
    if( length && length != 1) {
      this.scale(1/length);
    }
    return this;
  }

  public absolute(): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) = Math.abs(this[axis]);
      }
    }
    return this;
  }

  public opposite(): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (<number>this[axis]) -= this[axis];
      }
    }
    return this;
  }

  public dotProduct(v: Vector): number { //scalar product
    let dotProduct = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        dotProduct += this[axis] * v[axis];
      }
    }
    return dotProduct;
    // return this.x * v.x + this.y * v.y + this.z * v.z;
  }

};
