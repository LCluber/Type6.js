import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(10,0,0);
console.log(vector1); //(10,0,0)
vector1.normalize();
console.log(vector1); //(1,0,0)