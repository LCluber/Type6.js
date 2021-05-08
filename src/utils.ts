
export class Utils {

  static round(x: number, decimals: number): number {
    decimals = 10 ** decimals;
    return Math.round( x * decimals ) / decimals;
  }

  static floor(x: number, decimals: number): number {
    decimals = 10 ** decimals;
    return Math.floor( x * decimals ) / decimals;
  }

  static ceil(x: number, decimals: number): number {
    decimals = 10 ** decimals;
    return Math.ceil( x * decimals ) / decimals;
  }

  static trunc(x: number, decimals: number): number {
    decimals = 10 ** decimals;
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

  static getSign(x: number): number {
    return x ? x < 0 ? -1 : 1 : 0;
  }

  static opposite(x: number): number {
    return -x;
  }

  static clamp( x: number, min: number, max: number ): number {
    return Math.min(Math.max(x,min),max);
  }

  static normalize(x: number, min: number, max: number): number {
    return (x - min) / (max - min);
  }

  static lerp(min: number, max: number, amount: number): number {
    return (max - min) * amount + min;
  }

  static map(x: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number): number {
    return this.lerp(destMin, destMax, this.normalize(x, sourceMin, sourceMax));
  }

  static isIn( x: number, min: number, max: number ): boolean {
    return x >= min && x <= max;
  }

  static isOut( x: number, min: number, max: number ): boolean {
    return x < min || x > max;
  }
}
