
export class NumArray {

  static min(array: number[]): number {
    return Math.min(...array);
  }

  static max(array: number[]): number {
    return Math.max(...array);
  }

  static sum(array: number[]): number {
    return array.reduce((a,b) => a + b, 0);
  }

  static multiply(array: number[]): number {
    return array.reduce((a,b) => a * b, 0);
  }

  static average(array: number[], length: number): number {
    return NumArray.sum(array) / length;
  }
}
