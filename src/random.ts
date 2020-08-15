
export class Random {

  static float(min:number, max:number): number {
    return min + Math.random() * ( max - min );
  }

  static integer(min:number,max:number):number {
    return Math.floor(min + Math.random() * ( max - min + 1));
  }

  static distribution(min:number, max:number, iterations:number):number {
    let total = 0;
    for( let i = 0; i < iterations; i ++ ) {
      total += this.float( min, max );
    }
    return total / iterations;
  }

  static pick( value1:number, value2:number ):number {
    return Math.random() < 0.5 ? value1 : value2;
  }

}
