import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(5,5);
let vector2 = new Vector2(2,3);
console.log(vector1); //(5,5)
vector1.add(vector2);
console.log(vector1); //(7,8)