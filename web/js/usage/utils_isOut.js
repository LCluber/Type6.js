import {Utils} from '@lcluber/type6js';

let value = 2;
console.log(Utils.isOut(value,1,3)); //false
console.log(Utils.isOut(value,3,4)); //true