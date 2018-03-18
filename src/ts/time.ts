import {Utils} from './utils';

export class Time {

  static millisecondToSecond( millisecond:number ): number {
    return millisecond * 0.001;
  }
  
  static secondToMilliecond( second:number ): number {
    return second * 1000;
  }
  
  static millisecondToframePerSecond( millisecond:number ): number {
    return Math.round(1000 / millisecond);
  }
  
  static framePerSecondToMillisecond( refreshRate:number ): number {
    return Utils.round(1000 / refreshRate, 1);
  }

}
