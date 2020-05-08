import {Vector2} from '@lcluber/type6js';

let array = [2,2];

let p0 = Vector2(2,4); 
let p1 = Vector2(4,6); 
let p2 = Vector2(8,8);
let p3 = Vector2(8,8);
let t  = 4;
let vector = new Vector2(1,1);
console.log(vector); //(1,1)
vector.cubicBezier(p0, p1, p2, p3, t);
console.log(vector);