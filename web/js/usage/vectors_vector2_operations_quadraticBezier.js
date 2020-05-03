import {Vector2} from '@lcluber/type6js';

let array = [2,2];

let p0 = Vector2(2,4); 
let p1 = Vector2(4,6); 
let p2 = Vector2(8,8);
let t  = 4;
let vector = new Vector2(1,1);
console.log(vector); //(1,1)
vector.quadraticBezier(p0, p1, p2, t);
console.log(vector);