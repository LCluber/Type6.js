import {Matrix4x4, Vector3} from '@lcluber/type6js';

let eye = new Vector3(0, 10, 10);
let target = new Vector3(10, 0, 0);
let up = new Vector3(0, 1, 0);
let lookAt = Matrix4x4.lookAtRH(eye, target, up);