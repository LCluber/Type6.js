import {Matrix4x4, Vector3} from '@lcluber/type6js';

let vector1 = new Vector3(2,2,2);
let vector2 = new Vector3(3,3,4);
let matrix1 = new Matrix4x4().identity().scale(vector1);
let matrix2 = new Matrix4x4().identity().scale(vector2);
matrix1.multiply(matrix2);