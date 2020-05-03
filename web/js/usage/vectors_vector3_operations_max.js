import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(1,2,3);
let vector2 = new Vector3(2,2,2);
console.log(vector1); //(1,2,3)
vector1.max(vector2);
console.log(vector1); //(2,2,3)