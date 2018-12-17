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
    radius: number;
    diameter: number;
    clone(): Circle;
    copy(circle: Circle): void;
    set(positionX: number, positionY: number, radius: number): void;
    setPositionXY(positionX: number, positionY: number): void;
    setPositionFromVector(position: Vector2): void;
    scale(scalar: number): void;
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
    copy(rectangle: Rectangle): void;
    set(positionX: number, positionY: number, sizeX: number, sizeY: number): void;
    setPositionX(x: number): void;
    setPositionY(y: number): void;
    setPosition(property: string, value: number): void;
    setPositionXY(positionX: number, positionY: number): void;
    setPositionFromVector(position: Vector2): void;
    setSizeX(width: number): void;
    setSizeY(height: number): void;
    setSize(property: string, value: number): void;
    setSizeXY(width: number, height: number): void;
    setSizeFromVector(size: Vector2): void;
    private setCorners;
    private setHalfSize;
    draw(context: CanvasRenderingContext2D, fillColor: string, strokeColor: string, strokeWidth: number): void;
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
    private xAxis;
    private yAxis;
    private zAxis;
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
    static millisecondToSecond(millisecond: number): number;
    static secondToMilliecond(second: number): number;
    static millisecondToFramePerSecond(millisecond: number): number;
    static framePerSecondToMillisecond(refreshRate: number): number;
}

export declare class Trigonometry {
    static readonly sineLoops: Array<number>;
    static readonly cosineLoops: Array<number>;
    static readonly arctanLoops: Array<number>;
    static pi: number;
    static twopi: number;
    static halfpi: number;
    private static sineDecimals;
    private static cosineDecimals;
    private static arctanDecimals;
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
    static arctan2Vector2(vector2: Vector2): number | false;
    static arctan(angle: number): number;
    static sineEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    static cosineEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    static arctanEquation(amplitude: number, period: number, shiftX: number, shiftY: number): number;
    private static taylorSerie;
}











export declare class Utils {
    static round(x: number, decimals: number): number;
    static floor(x: number, decimals: number): number;
    static ceil(x: number, decimals: number): number;
    static trunc(x: number, decimals: number): number;
    static roundToNearest(x: number, nearest: number): number;
    static mix(x: number, y: number, ratio: number): number;
    static sign(x: number): number;
    static opposite(x: number): number;
    static clamp(x: number, min: number, max: number): number;
    static normalize(x: number, min: number, max: number): number;
    static lerp(normal: number, min: number, max: number): number;
    static map(x: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number): number;
    static isEven(x: number): boolean;
    static isOdd(x: number): number;
    static isOrigin(x: number): boolean;
    static isPositive(x: number): boolean;
    static isNegative(x: number): boolean;
    static validate(x: number): number;
}

export declare class Vector2 {
    private _x;
    private _y;
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    isOrigin(): boolean;
    isNotOrigin(): boolean;
    isPositive(): boolean;
    isNegative(): boolean;
    fromArray(array: Array<number>, offset?: number): Vector2;
    toArray(): Array<number>;
    toString(): string;
    set(x: number, y: number): Vector2;
    clone(): Vector2;
    copy(vector2: Vector2): Vector2;
    origin(): Vector2;
    setAngle(angle: number): Vector2;
    getAngle(): number;
    getMagnitude(): number;
    getSquaredMagnitude(): number;
    getDistance(vector2: Vector2): number;
    getSquaredDistance(vector2: Vector2): number;
    quadraticBezier(p0: Vector2, p1: Vector2, p2: Vector2, t: number): Vector2;
    cubicBezier(p0: Vector2, p1: Vector2, p2: Vector2, p3: Vector2, t: number): Vector2;
    add(vector2: Vector2): Vector2;
    addScalar(scalar: number): Vector2;
    addScaledVector(vector2: Vector2, scalar: number): Vector2;
    addVectors(v1: Vector2, v2: Vector2): Vector2;
    subtract(vector2: Vector2): Vector2;
    subtractScalar(scalar: number): Vector2;
    subtractScaledVector(vector2: Vector2, scalar: number): Vector2;
    subtractVectors(v1: Vector2, v2: Vector2): Vector2;
    scale(value: number): Vector2;
    scaleVector(v1: Vector2, value: number): Vector2;
    multiply(vector2: Vector2): Vector2;
    multiplyScaledVector(vector2: Vector2, scalar: number): Vector2;
    multiplyVectors(v1: Vector2, v2: Vector2): Vector2;
    divide(vector2: Vector2): Vector2;
    divideScaledVector(vector2: Vector2, scalar: number): Vector2;
    divideVectors(v1: Vector2, v2: Vector2): Vector2;
    halve(): Vector2;
    max(vector2: Vector2): Vector2;
    min(vector2: Vector2): Vector2;
    maxScalar(scalar: number): Vector2;
    minScalar(scalar: number): Vector2;
    maxAxis(): string;
    minAxis(): string;
    setOppositeAxis(axis: string, value: number): Vector2;
    normalize(): Vector2;
    normalizeVector(v: Vector2): Vector2;
    absolute(): Vector2;
    absoluteVector(v: Vector2): Vector2;
    opposite(): Vector2;
    oppositeVector(v: Vector2): Vector2;
    clamp(rectangle: Rectangle): Vector2;
    lerp(normal: number, min: Vector2, max: Vector2): Vector2;
    dotProduct(vector2: Vector2): number;
}
export declare class Vector3 {
    private _x;
    private _y;
    private _z;
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    fromArray(array: Array<number>, offset?: number): Vector3;
    toArray(): Array<number>;
    toString(): string;
    set(x: number, y: number, z: number): Vector3;
    clone(): Vector3;
    copy(vector3: Vector3): Vector3;
    origin(): Vector3;
    getMagnitude(): number;
    getSquaredMagnitude(): number;
    getDistance(vector3: Vector3): number;
    getSquaredDistance(vector3: Vector3): number;
    add(vector3: Vector3): Vector3;
    addScalar(scalar: number): Vector3;
    addScaledVector(vector3: Vector3, scalar: number): Vector3;
    addVectors(v1: Vector3, v2: Vector3): Vector3;
    subtract(vector3: Vector3): Vector3;
    subtractScalar(scalar: number): Vector3;
    subtractScaledVector(vector3: Vector3, scalar: number): Vector3;
    subtractVectors(v1: Vector3, v2: Vector3): Vector3;
    scale(value: number): Vector3;
    multiply(vector3: Vector3): Vector3;
    multiplyScaledVector(vector3: Vector3, scalar: number): Vector3;
    multiplyVectors(v1: Vector3, v2: Vector3): Vector3;
    divide(vector3: Vector3): Vector3;
    divideScaledVector(vector3: Vector3, scalar: number): Vector3;
    divideVectors(v1: Vector3, v2: Vector3): Vector3;
    halve(): Vector3;
    max(vector3: Vector3): Vector3;
    min(vector3: Vector3): Vector3;
    maxScalar(scalar: number): Vector3;
    minScalar(scalar: number): Vector3;
    normalize(): Vector3;
    dotProduct(vector3: Vector3): number;
    cross(vector3: Vector3): Vector3;
    crossVectors(v1: Vector3, v2: Vector3): Vector3;
}
