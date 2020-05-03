import {Vector3} from '@lcluber/type6js';

let vector = new Vector3(1,1,1);
console.log(vector); //(1,1,1)
vector.origin();
console.log(vector); //(0,0,0)