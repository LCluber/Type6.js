import {Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(2,2);
let vector2 = new Vector2(0,0);
console.log(vector1.isOrigin()); //false
console.log(vector2.isOrigin()); //true