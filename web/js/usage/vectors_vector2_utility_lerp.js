import {Vector2} from '@lcluber/type6js';

let min= new Vector2(3,3); 
let max= new Vector2(4,5);
let amount= 4;
let vector = new Vector2(2,1);
console.log(vector); //(1,1)
vector.lerp(min,max,amount);
console.log(vector);