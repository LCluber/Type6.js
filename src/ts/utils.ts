
export class Utils {

  static round(x: number, decimals: number): number {
    decimals = Math.pow( 10, decimals );
    return Math.round( x * decimals ) / decimals;
  }

  static floor(x: number, decimals: number): number {
    decimals = Math.pow( 10, decimals );
    return Math.floor( x * decimals ) / decimals;
  }

  static ceil(x: number, decimals: number): number {
    decimals = Math.pow( 10, decimals );
    return Math.ceil( x * decimals ) / decimals;
  }

  static trunc(x: number, decimals: number): number {
    decimals = Math.pow(10,decimals);
    let v = + x * decimals;
    if (!isFinite(v)) {
     return v;
    }
    return ((v - v % 1) / decimals) || (v < 0 ? -0 : v === 0 ? v : 0);
    //return Math.trunc( x * decimals ) / decimals;
  }

  static roundToNearest(x: number, nearest: number): number {
    return Math.round(x / nearest) * nearest;
  }

  static mix( x: number, y: number, ratio: number ): number {
    return (1-ratio)*x + ratio*y;
  }

  static sign(x: number): number {
    return x ? x < 0 ? -1 : 1 : 0;
  }

  static opposite(x: number): number {
    return -x;
  }

  static clamp( x: number, min: number, max: number ) {
    return Math.min(Math.max(x,min),max);
  }

  static normalize(x: number, min: number, max: number) {
    return (x - min) / (max - min);
  }

  static lerp(normal: number, min: number, max: number) {
    return (max - min) * normal + min;
  }

  static map(x: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number) {
    return this.lerp(this.normalize(x, sourceMin, sourceMax), destMin, destMax);
  }

  static isEven(x: number): boolean {
    return !(x&1);
  }

  static isOdd(x: number): number {
    return x&1;
  }

  static isOrigin(x: number): boolean {
    return (x === 0) ? true : false;
  }

  static isPositive(x: number): boolean {
    return x >= 0 ? true : false;
  }

  static isNegative(x: number): boolean {
    return x < 0 ? true : false;
  }

  static contains( x: number, min: number, max: number ): boolean {
    return x >= min && x <= max;
  }
}
