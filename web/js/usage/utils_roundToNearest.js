import {Utils} from '@lcluber/type6js';

let number = 2.563995;
let roundToNearest = Utils.roundToNearest(number, 0.5);
console.log(roundToNearest); //(2.5)