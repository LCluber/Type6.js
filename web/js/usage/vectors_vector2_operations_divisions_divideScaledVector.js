import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(16,16);
let vector2 = new Vector2(2,2);
console.log(vector1); //(5,5)
vector1.divideScaledVector(vector2, 2);
console.log(vector1); //(4,4)
