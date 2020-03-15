
export class Time {

  static millisecondToSecond( millisecond:number ): number {
    return millisecond * 0.001;
  }
  
  static secondToMilliecond( second:number ): number {
    return second * 1000;
  }
  
  static millisecondToFramePerSecond( millisecond:number ): number {
    return 1000 / millisecond;
  }
  
  static framePerSecondToMillisecond( refreshRate:number ): number {
    return 1000 / refreshRate;
  }

}
