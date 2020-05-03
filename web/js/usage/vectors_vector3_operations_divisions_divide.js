import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(8,8,8);
let vector2 = new Vector3(4,4,4);
console.log(vector1); //(8,8,8)
vector1.divide(vector2);
console.log(vector1); //(2,2,2)