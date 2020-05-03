import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(12,12,12);
let vector2 = new Vector3(3,3,3);
console.log(vector1); //(12,12,12)
vector1.divideScaledVector(vector2, 2);
console.log(vector1); //(2,2,2)