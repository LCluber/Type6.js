import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(8,8);
let vector2 = new Vector2(2,2);
console.log(vector1); //(8,8)
vector1.divide(vector2);
console.log(vector1); //(4,4)