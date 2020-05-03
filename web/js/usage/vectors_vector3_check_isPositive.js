import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(2,2,2);
let vector2 = new Vector3(-2,-2,-2);
console.log(vector1.isPositive()); //true
console.log(vector2.isPositive()); //false