// import { Vector2 } from './vector2';
// import { Vector3 } from './vector3';

export interface Vector {
  'x': number;
  'y': number;
  'z'?: number;
  [key: string]: any;
}

// type Axis = 'x' | 'y' | 'z';
type CompareOperator = '<=' | '!==';
type UpdateOperator  = '=' | '+=' | '-=' | '*=' | '/=';

export class Vector {

  constructor() {

  }

  public isPositive(): boolean {
    return this.compareAxes('<=', 0);
  }

  //true if vector is equal to (scalar;scalar)
  public isEqualTo(scalar: number): boolean {
    return this.compareAxes('!==', scalar);
  }

  //true if vector is equal to (0;0)
  public isOrigin(): boolean {
    return this.compareAxes('!==', 0);
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

  public origin(): any {
    return this.updateAxes('=', 0.0);
  }

  public getMagnitude(square: boolean = false): number{
    const squaredMagnitude: number = this.getSquaredMagnitude();
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

  public getDistance(vector: any, square: boolean = false): number {
    this.subtract(vector);
    const magnitude = this.getMagnitude(square);
    this.add(vector);
    return magnitude;
  }

  public add(vector: any): any {
    return this.updateAxesByVector('+=', vector, null);
  }

  public addScaledVector(vector: any, scalar: number): any {
    return this.updateAxesByVector('+=', vector, scalar);
  }

  public addScalar(scalar: number): any {
    return this.updateAxes('+=', scalar);
  }

  public subtract(vector: any): any {
    return this.updateAxesByVector('-=', vector, null);
  }

  public subtractScaledVector(vector: any, scalar: number): any {
    return this.updateAxesByVector('-=', vector, scalar);
  }

  public subtractScalar(scalar: number): any {
    return this.updateAxes('-=', scalar);
  }

  //component product
  public multiply(vector: any): any {
    return this.updateAxesByVector('*=', vector, null);
  }

  public multiplyScaledVector(vector: any, scalar: number): any {
    return this.updateAxesByVector('*=', vector, scalar);
  }

  public scale(scalar: number): any {
    return this.updateAxes('*=', scalar);
  }

  public divide(vector: any): any {
    return this.updateAxesByVector('/=', vector, null);
  }

  public divideScaledVector(vector: any, scalar: number): any {
    return this.updateAxesByVector('/=', vector, scalar);
  }

  public halve(): any {
    return this.updateAxes('*=', 0.5);
  }

  public max(vector: any): any {
    return this.updateAxesWithMathByVector(vector, 'max');
  }

  public min(vector: any): any {
    return this.updateAxesWithMathByVector(vector, 'min');
  }

  public maxScalar(scalar: number): any {
    return this.updateAxesWithMath(scalar, 'max');
  }

  public minScalar(scalar: number): any {
    return this.updateAxesWithMath(scalar, 'min');
  }

  public normalize(): any {
    let length = this.getMagnitude();
    if( length && length != 1) {
      this.scale(1/length);
    }
    return this
  }

  public absolute(a?: 'x' | 'y' | 'z'): any {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (!a || a === axis) {
          (this[axis] as number) = Math.abs(this[axis]);
        }
      }
    }
    return this
  }

  public opposite(a?: 'x' | 'y' | 'z'): any {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (!a || a === axis) {
          (this[axis] as number) = -this[axis];
        }
      }
    }
    return this
  }

  public dotProduct(vector: any): number { //scalar product
    let dotProduct = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
        dotProduct += this[axis] * vector[axis];
      }
    }
    return dotProduct;
    // return this.x * v.x + this.y * v.y + this.z * v.z;
  }


  // utils methods


  protected setFromArray(array: number[]): void {
    let i = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && array.length > i) {
        (this[axis] as number) = array[i];
      }
      i++;
    }
  }

  protected copy(vector: Vector): Vector {
    return this.updateAxesByVector('=', vector, null);
  }

  private compareAxes(operator: CompareOperator, value: number): boolean {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (this[operator](axis, value)) {
          return false;
        }
      }
    }
    return true;
  }

  protected updateAxes(operator: UpdateOperator, scalar: number): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        this[operator](axis, scalar);
      }
    }
    return this;
  }

  private updateAxesByVector(operator: UpdateOperator, vector: Vector, scalar: number | null): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
        this[operator](axis, vector[axis] * (scalar ?? 1.0));
      }
    }
    return this;
  }

  private updateAxesWithMath(scalar: number, operator: 'max' | 'min'): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (this[axis] as number) = Math[operator](this[axis], scalar);
      }
    }
    return this;
  }

  private updateAxesWithMathByVector(vector: Vector, operator: 'max' | 'min'): Vector {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
        (this[axis] as number) = Math[operator](this[axis], vector[axis]);
      }
    }
    return this;
  }

  private '<='(axis: Extract<keyof this, string>, value: number): boolean {
    return this[axis] <= value;
  }
  
  private '!=='(axis: Extract<keyof this, string>, value: number): boolean {
    return this[axis] !== value;
  }
  
  private '='(axis: Extract<keyof this, string>, value: number) {
    (this[axis] as number) = value;
  }
  
  private '+='(axis: Extract<keyof this, string>, value: number) {
    (this[axis] as number) += value;
  }
  
  private '-='(axis: Extract<keyof this, string>, value: number) {
    (this[axis] as number) -= value;
  }
  
  private '*='(axis: Extract<keyof this, string>, value: number) {
    (this[axis] as number) *= value;
  }
  
  private '/='(axis: Extract<keyof this, string>, value: number) {
    (this[axis] as number) /= value;
  }

};