import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(5,5);
let vector2 = new Vector2(2,2);
console.log(vector1); //(5,5)
vector1.subtractScaledVector(vector2, 2);
console.log(vector1); //(1,1)