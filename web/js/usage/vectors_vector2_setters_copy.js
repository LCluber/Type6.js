import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(1,1);
let vector2 = new Vector2(2,2);
console.log(vector1); //(1,1)
vector1.copy(vector2);
console.log(vector1); //(2,2)