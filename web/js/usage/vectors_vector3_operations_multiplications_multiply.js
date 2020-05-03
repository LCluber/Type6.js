import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(2,2,2);
let vector2 = new Vector3(3,3,3);
console.log(vector1); //(2,2,2)
vector1.multiply(vector2);
console.log(vector1); //(6,6,6)