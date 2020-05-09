import {Matrix4x4} from '@lcluber/type6js';

let fovy = 60;
let aspect = 16/9;
let znear = 0.1;
let zfar = 100;
let projectionMatrix = Matrix4x4.perspective(fovy, aspect, znear, zfar);