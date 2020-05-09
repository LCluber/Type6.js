import {Matrix3x3, Vector2} from '@lcluber/type6js';

let vector = new Vector2(2,2);
let matrix = new Matrix3x3().identity().scale(vector);
matrix.rotate(2);