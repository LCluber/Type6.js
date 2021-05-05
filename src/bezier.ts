
export class Bezier {

  static quadratic(p0: number, p1: number, p2: number, t: number): number {
    let oneMinusT = 1 - t;
    return  oneMinusT ** 2 * p0 +
            oneMinusT * 2 * t * p1 +
            t * t * p2;
  }

  static cubic(p0: number, p1: number, p2: number, p3: number, t: number): number {
    let oneMinusT = 1 - t;
    let tByT = t * t;
    return  oneMinusT ** 3 * p0 +
            oneMinusT ** 2 * 3 * t * p1 +
            oneMinusT * 3 * tByT * p2 +
            tByT * t * p3;
  }

}
