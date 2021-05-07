import { Vector2 } from './vector2';
import { Vector3 } from './vector3';

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

  //true if vector2 is equal to (scalar;scalar)
  public isEqualTo(scalar: number): boolean {
    return this.compareAxes('!==', scalar);
  }

  //true if vector2 is equal to (0;0)
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

  public origin(): Vector2 | Vector3 {
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

  public getDistance(v: Vector2 | Vector3, square: boolean = false): number {
    this.subtract(v);
    const magnitude = this.getMagnitude(square);
    this.add(v);
    return magnitude;
  }

  public add(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesByVector('+=', v, null);
  }

  public addScaledVector(v: Vector2 | Vector3, scalar: number): Vector2 | Vector3 {
    return this.updateAxesByVector('+=', v, scalar);
  }

  public addScalar(scalar: number): Vector2 | Vector3 {
    return this.updateAxes('+=', scalar);
  }

  public subtract(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesByVector('-=', v, null);
  }

  public subtractScaledVector(v: Vector2 | Vector3, scalar: number): Vector2 | Vector3 {
    return this.updateAxesByVector('-=', v, scalar);
  }

  public subtractScalar(scalar: number): Vector2 | Vector3 {
    return this.updateAxes('-=', scalar);
  }

  //component product
  public multiply(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesByVector('*=', v, null);
  }

  public multiplyScaledVector(v: Vector2 | Vector3, scalar: number): Vector2 | Vector3 {
    return this.updateAxesByVector('*=', v, scalar);
  }

  public scale(scalar: number): Vector2 | Vector3 {
    return this.updateAxes('*=', scalar);
  }

  public divide(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesByVector('/=', v, null);
  }

  public divideScaledVector(v: Vector2 | Vector3, scalar: number): Vector2 | Vector3 {
    return this.updateAxesByVector('/=', v, scalar);
  }

  public halve(): Vector2 | Vector3 {
    return this.updateAxes('*=', 0.5);
  }

  public max(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesWithMathByVector(v, 'max');
  }

  public min(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesWithMathByVector(v, 'min');
  }

  public maxScalar(scalar: number): Vector2 | Vector3 {
    return this.updateAxesWithMath(scalar, 'max');
  }

  public minScalar(scalar: number): Vector2 | Vector3 {
    return this.updateAxesWithMath(scalar, 'min');
  }

  public normalize(): Vector2 | Vector3 {
    let length = this.getMagnitude();
    if( length && length != 1) {
      this.scale(1/length);
    }
    return this as unknown as Vector2 | Vector3;
  }

  public absolute(a?: 'x' | 'y' | 'z'): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (!a || a === axis) {
          (this[axis] as number) = Math.abs(this[axis]);
        }
      }
    }
    return this as unknown as Vector2 | Vector3;
  }

  public opposite(a?: 'x' | 'y' | 'z'): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (!a || a === axis) {
          (this[axis] as number) = -this[axis];
        }
      }
    }
    return this as unknown as Vector2 | Vector3;
  }

  public dotProduct(v: Vector2 | Vector3): number { //scalar product
    let dotProduct = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        dotProduct += this[axis] * v[axis];
      }
    }
    return dotProduct;
    // return this.x * v.x + this.y * v.y + this.z * v.z;
  }



  protected setFromArray(array: number[]): void {
    let i = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && array.length > i) {
        (this[axis] as number) = array[i];
      }
      i++;
    }
  }

  protected copy(v: Vector2 | Vector3): Vector2 | Vector3 {
    return this.updateAxesByVector('=', v, null);
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

  protected updateAxes(operator: UpdateOperator, scalar: number): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        this[operator](axis, scalar);
      }
    }
    return this as unknown as Vector2 | Vector3;
  }

  private updateAxesByVector(operator: UpdateOperator, vector: Vector2 | Vector3, scalar: number | null): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
        this[operator](axis, vector[axis] * (scalar ?? 1.0));
      }
    }
    return this as unknown as Vector2 | Vector3;
  }

  private updateAxesWithMath(scalar: number, operator: 'max' | 'min'): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        (this[axis] as number) = Math[operator](this[axis], scalar);
      }
    }
    return this as unknown as Vector2 | Vector3;
  }

  private updateAxesWithMathByVector(v: Vector2 | Vector3, operator: 'max' | 'min'): Vector2 | Vector3 {
    for(const axis in this) {
      if (this.hasOwnProperty(axis) && v.hasOwnProperty(axis)) {
        (this[axis] as number) = Math[operator](this[axis], v[axis]);
      }
    }
    return this as unknown as Vector2 | Vector3;
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