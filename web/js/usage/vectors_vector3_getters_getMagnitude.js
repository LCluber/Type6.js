import {Vector3} from '@lcluber/type6js';

let vector = new Vector3(-2,-2,-2);
let squaredMagnitude = vector.getMagnitude(true);
let magnitude = vector.getMagnitude(false);
console.log(squaredMagnitude);
console.log(magnitude);