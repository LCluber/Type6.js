import {Utils} from '@lcluber/type6js';

let value = 2;
console.log(Utils.isIn(value,1,3)); //true
console.log(Utils.isIn(value,3,4)); //false