import {Matrix4x4} from '@lcluber/type6js';

let left = -1.0;
let right = 1.0; 
let top = -1.0;
let bottom= 1.0;
let near = 0.1;
let far = 100; 
let orthographicMatrix = Matrix4x4.orthographic(left, right, top, bottom, near, far);