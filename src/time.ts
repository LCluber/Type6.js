
export class Time {

  static millisecToSec( millisecond:number ): number {
    return millisecond * 0.001;
  }
  
  static secToMillisec( second:number ): number {
    return second * 1000;
  }
  
  static millisecToFps( millisecond:number ): number {
    return 1000 / millisecond;
  }
  
  static fpsToMillisec( refreshRate:number ): number {
    return 1000 / refreshRate;
  }

}
