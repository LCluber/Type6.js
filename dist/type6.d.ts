/** MIT License
* 
* Copyright (c) 2011 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://type6js.lcluber.com
*/
export declare class NumArray {
    static min(array: number[]): number;
    static max(array: number[]): number;
    static sum(array: number[]): number;
    static multiply(array: number[]): number;
    static average(array: number[], length: number): number;
}
export declare class Bezier {
    static quadratic(p0: number, p1: number, p2: number, t: number): number;
    static cubic(p0: number, p1: number, p2: number, p3: number, t: number): number;
}

export declare class Circle {
    position: Vector2;
    private _radius;
    private _diameter;
    readonly shape: 'circle';
    constructor(positionX: number, positionY: number, radius: number);
    set radius(radius: number);
    get radius(): number;
    set diameter(diameter: number);
    get diameter(): number;
    clone(): Circle;
    copy(circle: Circle): Circle;
    set(positionX: number, positionY: number, radius: number): Circle;
    setPositionXY(positionX: number, positionY: number): Circle;
    setPositionFromVector(position: Vector2): Circle;
    scale(scalar: number): Circle;
    isIn(v: Vector2): boolean;
    draw(context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number): void;
}

export declare class Rectangle {
    position: Vector2;
    topLeftCorner: Vector2;
    bottomRightCorner: Vector2;
    size: Vector2;
    halfSize: Vector2;
    readonly shape: 'aabb';
    constructor(positionX: number, positionY: number, sizeX: number, sizeY: number);
    clone(): Rectangle;
    copy(rectangle: Rectangle): Rectangle;
    set(positionX: number, positionY: number, sizeX: number, sizeY: number): Rectangle;
    setPositionX(x: number): Rectangle;
    setPositionY(y: number): Rectangle;
    private setPosition;
    setPositionXY(positionX: number, positionY: number): Rectangle;
    setPositionFromVector(position: Vector2): Rectangle;
    setSizeX(width: number): Rectangle;
    setSizeY(height: number): Rectangle;
    private setSize;
    setSizeXY(width: number, height: number): Rectangle;
    setSizeFromVector(size: Vector2): Rectangle;
    private setCorners;
    private setHalfSize;
    isIn(vector: Vector2): boolean;
    draw(context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number): void;
}

export declare class Matrix3x3 {
    private m;
    constructor(x1?: number, x2?: number, x3?: number, y1?: number, y2?: number, y3?: number, t1?: number, t2?: number, t3?: number);
    private make;
    copy(matrix3x3: Matrix3x3): Matrix3x3;
    toArray(): Float32Array;
    toString(): string;
    identity(): Matrix3x3;
    scale(vector2: Vector2): Matrix3x3;
    rotate(angle: number): Matrix3x3;
    translate(vector2: Vector2): Matrix3x3;
    multiply(matrix3x3: Matrix3x3): Matrix3x3;
}

export declare class Matrix4x3 {
    private m;
    private xAxis;
    private yAxis;
    private zAxis;
    constructor(x1?: number, x2?: number, x3?: number, y1?: number, y2?: number, y3?: number, z1?: number, z2?: number, z3?: number, t1?: number, t2?: number, t3?: number);
    private make;
    copy(matrix4x3: Matrix4x3): Matrix4x3;
    toArray(): Float32Array;
    toString(): string;
    identity(): Matrix4x3;
    scale(vector3: Vector3): Matrix4x3;
    rotateX(angle: number): Matrix4x3;
    rotateY(angle: number): Matrix4x3;
    rotateZ(angle: number): Matrix4x3;
    translate(vector3: Vector3): Matrix4x3;
    multiply(matrix4x3: Matrix4x3): Matrix4x3;
    lookAtRH(eye: Vector3, target: Vector3, up: Vector3): Matrix4x3;
}

export declare class Matrix4x4 {
    private m;
    constructor(x1?: number, x2?: number, x3?: number, x4?: number, y1?: number, y2?: number, y3?: number, y4?: number, z1?: number, z2?: number, z3?: number, z4?: number, t1?: number, t2?: number, t3?: number, t4?: number);
    private make;
    copy(matrix4x4: Matrix4x4): Matrix4x4;
    toArray(): Float32Array;
    toString(): string;
    identity(): Matrix4x4;
    scale(vector3: Vector3): Matrix4x4;
    rotateX(angle: number): Matrix4x4;
    rotateY(angle: number): Matrix4x4;
    rotateZ(angle: number): Matrix4x4;
    translate(vector3: Vector3): Matrix4x4;
    multiply(matrix4x4: Matrix4x4): Matrix4x4;
    perspective(fovy: number, aspect: number, znear: number, zfar: number): Matrix4x4;
    orthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4x4;
}
export declare class Random {
    static float(min: number, max: number): number;
    static integer(min: number, max: number): number;
    static distribution(min: number, max: number, iterations: number): number;
    static pick(value1: number, value2: number): number;
}
export declare class Time {
    static millisecToSec(millisecond: number): number;
    static secToMillisec(second: number): number;
    static millisecToFps(millisecond: number): number;
    static fpsToMillisec(refreshRate: number): number;
}
export declare class Trigonometry {
    static readonly sineLoops: number[];
    static readonly cosineLoops: number[];
    static readonly arctanLoops: number[];
    static pi: number;
    static twopi: number;
    static halfpi: number;
    private static sineDecimals;
    private static cosineDecimals;
    private static arctanDecimals;
    private static maxDecimals;
    private static factorialArray;
    static init(): void;
    private static createRoundedPis;
    private static createFactorialArray;
    private static factorial;
    static setSinePrecision(value: number): number;
    static setCosinePrecision(value: number): number;
    static setArctanPrecision(value: number): number;
    static degreeToRadian(degree: number): number;
    static radianToDegree(radian: number): number;
    static normalizeRadian(angle: number): number;
    static sine(angle: number): number;
    static cosine(angle: number): number;
    static arctan2(x: number, y: number): number | false;
    static arctan(angle: number): number;
    static sineEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    static cosineEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    static arctanEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    private static taylorSerie;
}














export declare type AxisNames2d = 'x' | 'y';
export declare type AxisNames3d = AxisNames2d & 'z';
export declare class Utils {
    static round(x: number, decimals: number): number;
    static floor(x: number, decimals: number): number;
    static ceil(x: number, decimals: number): number;
    static trunc(x: number, decimals: number): number;
    static roundToNearest(x: number, nearest: number): number;
    static mix(x: number, y: number, ratio: number): number;
    static getSign(x: number): number;
    static opposite(x: number): number;
    static clamp(x: number, min: number, max: number): number;
    static normalize(x: number, min: number, max: number): number;
    static lerp(min: number, max: number, amount: number): number;
    static map(x: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number): number;
    static isIn(x: number, min: number, max: number): boolean;
    static isOut(x: number, min: number, max: number): boolean;
}


export declare class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    isOrigin(): boolean;
    isPositive(): boolean;
    toArray(): number[];
    toString(): string;
    set(x: number, y: number): Vector2;
    clone(): Vector2;
    copy(v: Vector2): Vector2;
    origin(): Vector2;
    setFromAngle(angle: number): Vector2;
    getAngle(): number;
    getMagnitude(square?: boolean): number;
    private getSquaredMagnitude;
    getDistance(v: Vector2, square?: boolean): number;
    quadraticBezier(p0: Vector2, p1: Vector2, p2: Vector2, t: number): Vector2;
    cubicBezier(p0: Vector2, p1: Vector2, p2: Vector2, p3: Vector2, t: number): Vector2;
    add(v: Vector2): Vector2;
    addScalar(scalar: number): Vector2;
    addScaledVector(v: Vector2, scalar: number): Vector2;
    subtract(v: Vector2): Vector2;
    subtractScalar(scalar: number): Vector2;
    subtractScaledVector(v: Vector2, scalar: number): Vector2;
    scale(value: number): Vector2;
    multiply(v: Vector2): Vector2;
    multiplyScaledVector(v: Vector2, scalar: number): Vector2;
    divide(v: Vector2): Vector2;
    divideScaledVector(v: Vector2, scalar: number): Vector2;
    halve(): Vector2;
    max(v: Vector2): Vector2;
    min(v: Vector2): Vector2;
    maxScalar(scalar: number): Vector2;
    minScalar(scalar: number): Vector2;
    getMaxAxis(): AxisNames2d;
    getMinAxis(): AxisNames2d;
    setOppositeAxis(axis: AxisNames2d, value: number): Vector2;
    normalize(): Vector2;
    absolute(): Vector2;
    opposite(): Vector2;
    clamp(rectangle: Rectangle): Vector2;
    lerp(min: Vector2, max: Vector2, amount: number): Vector2;
    dotProduct(v: Vector2): number;
}
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    isOrigin(): boolean;
    isPositive(): boolean;
    toArray(): number[];
    toString(): string;
    set(x: number, y: number, z: number): Vector3;
    clone(): Vector3;
    copy(v: Vector3): Vector3;
    origin(): Vector3;
    getMagnitude(square?: boolean): number;
    private getSquaredMagnitude;
    getDistance(v: Vector3, square?: boolean): number;
    add(v: Vector3): Vector3;
    addScalar(scalar: number): Vector3;
    addScaledVector(v: Vector3, scalar: number): Vector3;
    subtract(v: Vector3): Vector3;
    subtractScalar(scalar: number): Vector3;
    subtractScaledVector(v: Vector3, scalar: number): Vector3;
    scale(value: number): Vector3;
    multiply(v: Vector3): Vector3;
    multiplyScaledVector(v: Vector3, scalar: number): Vector3;
    divide(v: Vector3): Vector3;
    divideScaledVector(v: Vector3, scalar: number): Vector3;
    halve(): Vector3;
    max(v: Vector3): Vector3;
    min(v: Vector3): Vector3;
    maxScalar(scalar: number): Vector3;
    minScalar(scalar: number): Vector3;
    normalize(): Vector3;
    absolute(): Vector3;
    opposite(): Vector3;
    dotProduct(v: Vector3): number;
    cross(v: Vector3): Vector3;
}
