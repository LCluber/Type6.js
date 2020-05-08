import {Vector2, Rectangle} from '@lcluber/type6js';

let rectangle = new Rectangle(0,0,10,20);
let vector = new Vector2(0,30);
console.log(vector); //(0,30)
vector.clamp(rectangle);
console.log(vector); //(0,20)