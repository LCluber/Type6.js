import {Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(1,2,3);
let vector2 = new Vector3(2,2,2);
let dotProduct = vector1.dotProduct(vector2);
console.log(dotProduct);