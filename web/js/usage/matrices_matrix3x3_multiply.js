import {Matrix3x3, Vector2} from '@lcluber/type6js';

let vector1 = new Vector2(2,2);
let vector2 = new Vector2(3,4);
let matrix1 = new Matrix3x3().identity().scale(vector1);
let matrix2 = new Matrix3x3().identity().scale(vector2);
matrix1.multiply(matrix2);