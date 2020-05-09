import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(1,1,1);
let vector2 = new Vector3(2,2,2);
console.log(vector1); //(1,1,1)
vector1.subtract(vector2);
console.log(vector1); //(-1,-1,-1)