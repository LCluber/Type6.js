import {Vector} from './vector';
import { isArray, isNumber, isObject } from '@dwtechs/checkhard';

export class Vector3 extends Vector {
  public x: number = 0.0;
  public y: number = 0.0;
  public z: number = 0.0;

  constructor(x?: number | number[] | Vector3, y?: number, z?: number) {
    super();
    this.set(x, y, z);
  }

  public set( x?: number | number[] | Vector3, 
              y?: number | null,
              z?: number | null): Vector3 {

    if (isNumber(x) || isNumber(y) || isNumber(z)) { // set from scalars
      this.setAxis(x as number | null, y as number | undefined | null, z as number | undefined | null);
    } else if (isArray(x, 3)) { // set from array
      this.setFromArray(x as number[]);
    } else if (isObject(x)) { // set from Vector
      this.copy(x as Vector3);
    }
    return this;
  }

  public clone(): Vector3 {
    return new Vector3(this.x,this.y,this.z);
  }

  public cross(v: Vector3 ): Vector3 {
    let x = this.x, y = this.y, z = this.z;
    this.x =  y * v.z - z * v.y;
    this.y =  z * v.x - x * v.z;
    this.z =  x * v.y - y * v.x;
    return this;
  }

  private setAxis(x? : number | null, y?: number | null, z?: number | null): void {
    let i = 0;
    for(const axis in this) {
      if (this.hasOwnProperty(axis)) {
        if (isNumber(arguments[i])) {
          this[axis] = arguments[i];
        }
        i++;
      }
    }
  }


};
