import {Vector3} from '@lcluber/type6js';

let vector = new Vector3(-2,-2,-2);
console.log(vector); //(-2,-2,-2)
vector.absolute();
console.log(vector); //(2,2,2)