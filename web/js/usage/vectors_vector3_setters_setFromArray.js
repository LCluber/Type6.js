import {Vector3} from '@lcluber/type6js';

let array = [2,2,2];
let vector = new Vector3(1,1,1);
console.log(vector); //(1,1,1)
vector.setFromArray(array);
console.log(vector); //(2,2,2)