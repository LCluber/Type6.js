import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(8,4,4);
let vector2 = new Vector3(4,8,4);

vector1.cross(vector2);
console.log(vector1);