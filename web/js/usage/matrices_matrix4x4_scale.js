import {Matrix4x4, Vector3} from '@lcluber/type6js';

let vector = new Vector3(2,2,2);
let matrix = new Matrix4x4().identity();
matrix.scale(vector);