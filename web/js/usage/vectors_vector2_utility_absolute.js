import {Vector2} from '@lcluber/type6js';

let vector = new Vector2(-1,-1);
console.log(vector); //(-1,-1)
vector.absolute();
console.log(vector); //(1,1)