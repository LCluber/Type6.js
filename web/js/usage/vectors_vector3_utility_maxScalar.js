import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(1,2,3);
console.log(vector1); //(1,2,3)
vector1.maxScalar(2);
console.log(vector1); //(2,2,3)