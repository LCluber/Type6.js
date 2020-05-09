import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(1,1);
let vector2 = new Vector2(2,2);
let squaredDistance = vector1.getDistance(vector2, true);
let distance = vector1.getDistance(vector2, false);
console.log(squaredDistance);
console.log(distance);