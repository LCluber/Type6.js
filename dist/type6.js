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

class Utils {
    static round(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.round(x * decimals) / decimals;
    }
    static floor(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.floor(x * decimals) / decimals;
    }
    static ceil(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.ceil(x * decimals) / decimals;
    }
    static trunc(x, decimals) {
        decimals = Math.pow(10, decimals);
        let v = +x * decimals;
        if (!isFinite(v)) {
            return v;
        }
        return ((v - v % 1) / decimals) || (v < 0 ? -0 : v === 0 ? v : 0);
    }
    static roundToNearest(x, nearest) {
        return Math.round(x / nearest) * nearest;
    }
    static mix(x, y, ratio) {
        return (1 - ratio) * x + ratio * y;
    }
    static sign(x) {
        return x ? x < 0 ? -1 : 1 : 0;
    }
    static opposite(x) {
        return -x;
    }
    static clamp(x, min, max) {
        return Math.min(Math.max(x, min), max);
    }
    static normalize(x, min, max) {
        return (x - min) / (max - min);
    }
    static lerp(normal, min, max) {
        return (max - min) * normal + min;
    }
    static map(x, sourceMin, sourceMax, destMin, destMax) {
        return this.lerp(this.normalize(x, sourceMin, sourceMax), destMin, destMax);
    }
    static isEven(x) {
        return !(x & 1);
    }
    static isOdd(x) {
        return x & 1;
    }
    static isOrigin(x) {
        return (x === 0) ? true : false;
    }
    static isPositive(x) {
        return x >= 0 ? true : false;
    }
    static isNegative(x) {
        return x < 0 ? true : false;
    }
    static validate(x) {
        return isNaN(x) ? 0.0 : x;
    }
}

class Trigonometry {
    static init() {
        Trigonometry.createRoundedPis();
        Trigonometry.createFactorialArray();
    }
    static createRoundedPis() {
        let decimals = 2;
        this.pi = Utils.round(Math.PI, decimals);
        this.twopi = Utils.round(Math.PI * 2, decimals);
        this.halfpi = Utils.round(Math.PI * 0.5, decimals);
    }
    static createFactorialArray() {
        let maxSin = this.sineLoops[this.sineLoops.length - 1] * 3;
        let maxCos = this.cosineLoops[this.cosineLoops.length - 1] * 2;
        for (let i = 1, f = 1; i <= Math.max(maxSin, maxCos); i++) {
            f *= this.factorial(i);
            this.factorialArray.push(f);
        }
    }
    static factorial(i) {
        return i > 1 ? (i - 1) : 1;
    }
    static setSinePrecision(value) {
        if (value < this.sineLoops.length) {
            this.sineDecimals = value;
            return value;
        }
        this.sineDecimals = 2;
        return 2;
    }
    static setCosinePrecision(value) {
        if (value < Trigonometry.cosineLoops.length) {
            this.cosineDecimals = value;
            return value;
        }
        this.cosineDecimals = 2;
        return 2;
    }
    static setArctanPrecision(value) {
        if (value < Trigonometry.arctanLoops.length) {
            this.cosineDecimals = value;
            return value;
        }
        this.arctanDecimals = 2;
        return 2;
    }
    static degreeToRadian(degree) {
        return degree * this.pi / 180;
    }
    static radianToDegree(radian) {
        return radian * 180 / this.pi;
    }
    static normalizeRadian(angle) {
        if (angle > this.pi || angle < -this.pi) {
            return angle - this.twopi * Math.floor((angle + this.pi) / this.twopi);
        }
        return angle;
    }
    static sine(angle) {
        angle = this.normalizeRadian(angle);
        if (Trigonometry.sineDecimals <= 2 && (angle < 0.28 && angle > -0.28)) {
            return angle;
        }
        else {
            return this.taylorSerie(3, Trigonometry.sineLoops[this.sineDecimals], angle, angle, true);
        }
    }
    static cosine(angle) {
        angle = this.normalizeRadian(angle);
        var squaredAngle = angle * angle;
        if (this.cosineDecimals <= 2 && (angle <= 0.5 && angle >= -0.5)) {
            return 1 - (squaredAngle * 0.5);
        }
        else {
            return this.taylorSerie(2, Trigonometry.cosineLoops[this.cosineDecimals], 1, angle, true);
        }
    }
    static arctan2(x, y) {
        let angle = y / x;
        if (x > 0) {
            return this.arctan(angle);
        }
        else if (x < 0) {
            if (y < 0) {
                return this.arctan(angle) - this.pi;
            }
            else {
                return this.arctan(angle) + this.pi;
            }
        }
        else {
            if (y < 0) {
                return -this.halfpi;
            }
            else if (y > 0) {
                return this.halfpi;
            }
            else {
                return false;
            }
        }
    }
    static arctan2Vector2(vector2) {
        return this.arctan2(vector2.x, vector2.y);
    }
    static arctan(angle) {
        let loops = Trigonometry.arctanLoops[this.arctanDecimals];
        if (angle < 1 && angle > -1) {
            return this.taylorSerie(3, loops, angle, angle, false);
        }
        else {
            if (angle >= 1) {
                angle = 1 / angle;
                return -(this.taylorSerie(3, loops, angle, angle, false) - this.halfpi);
            }
            else {
                angle = -1 / angle;
                return this.taylorSerie(3, loops, angle, angle, false) - this.halfpi;
            }
        }
    }
    static sineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.sine(period + shiftX) + shiftY;
    }
    static cosineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.cosine(period + shiftX) + shiftY;
    }
    static arctanEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.arctan(period + shiftX) + shiftY;
    }
    static taylorSerie(start, max, x, angle, needFactorial) {
        let squaredAngle = angle * angle;
        let result = x;
        let denominator = 0;
        let sign = -1;
        for (let i = 0; start <= max; start += 2, i++) {
            x *= squaredAngle;
            denominator = needFactorial ? this.factorialArray[start] : start;
            result += x / denominator * sign;
            sign = Utils.opposite(sign);
        }
        return result;
    }
}
Trigonometry.sineLoops = [
    9,
    11,
    13,
    15,
    17,
    18,
    19,
    21,
    23
];
Trigonometry.cosineLoops = [
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22
];
Trigonometry.arctanLoops = [
    17,
    19,
    21,
    23,
    25,
    27,
    29,
    31,
    33
];
Trigonometry.sineDecimals = 2;
Trigonometry.cosineDecimals = 2;
Trigonometry.arctanDecimals = 2;
Trigonometry.factorialArray = [];
Trigonometry.init();

class Time {
    static millisecondToSecond(millisecond) {
        return millisecond * 0.001;
    }
    static secondToMilliecond(second) {
        return second * 1000;
    }
    static millisecondToFramePerSecond(millisecond) {
        return Math.round(1000 / millisecond);
    }
    static framePerSecondToMillisecond(refreshRate) {
        return Utils.round(1000 / refreshRate, 1);
    }
}

class Random {
    static float(min, max) {
        return min + Math.random() * (max - min);
    }
    static integer(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    static distribution(min, max, iterations) {
        let total = 0;
        for (let i = 0; i < iterations; i++) {
            total += this.float(min, max);
        }
        return total / iterations;
    }
    static pick(value1, value2) {
        return Math.random() < 0.5 ? value1 : value2;
    }
}

class Bezier {
    static quadratic(p0, p1, p2, t) {
        let oneMinusT = 1 - t;
        return Math.pow(oneMinusT, 2) * p0 +
            oneMinusT * 2 * t * p1 +
            t * t * p2;
    }
    static cubic(p0, p1, p2, p3, t) {
        let oneMinusT = 1 - t;
        let tByT = t * t;
        return Math.pow(oneMinusT, 3) * p0 +
            Math.pow(oneMinusT, 2) * 3 * t * p1 +
            oneMinusT * 3 * tByT * p2 +
            tByT * t * p3;
    }
}

var Axis;
(function (Axis) {
    Axis["x"] = "x";
    Axis["y"] = "y";
})(Axis || (Axis = {}));

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set x(x) {
        this._x = Utils.validate(x);
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = Utils.validate(y);
    }
    get y() {
        return this._y;
    }
    isOrigin() {
        return (Utils.isOrigin(this.x) && Utils.isOrigin(this.y)) ? true : false;
    }
    isNotOrigin() {
        return (!Utils.isOrigin(this.x) || !Utils.isOrigin(this.y)) ? true : false;
    }
    isPositive() {
        return (Utils.isPositive(this.x) && Utils.isPositive(this.y)) ? true : false;
    }
    isNegative() {
        return (Utils.isNegative(this.x) && Utils.isNegative(this.y)) ? true : false;
    }
    fromArray(array, offset) {
        if (offset === undefined) {
            offset = 0;
        }
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
    }
    toArray() {
        return [this.x, this.y];
    }
    toString() {
        return '(' + Axis.x + ' = ' + this.x + ';' + Axis.y + ' = ' + this.y + ')';
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(vector2) {
        this.x = vector2.x;
        this.y = vector2.y;
        return this;
    }
    origin() {
        this.x = 0.0;
        this.y = 0.0;
        return this;
    }
    setAngle(angle) {
        if (Utils.validate(angle)) {
            let length = this.getMagnitude();
            this.x = Trigonometry.cosine(angle) * length;
            this.y = Trigonometry.sine(angle) * length;
        }
        return this;
    }
    getAngle() {
        return Math.atan2(this.y, this.x);
    }
    getMagnitude() {
        return Math.sqrt(this.getSquaredMagnitude());
    }
    getSquaredMagnitude() {
        return this.x * this.x + this.y * this.y;
    }
    getDistance(vector2) {
        this.subtract(vector2);
        let magnitude = this.getMagnitude();
        this.add(vector2);
        return magnitude;
    }
    getSquaredDistance(vector2) {
        this.subtract(vector2);
        let squaredMagnitude = this.getSquaredMagnitude();
        this.add(vector2);
        return squaredMagnitude;
    }
    quadraticBezier(p0, p1, p2, t) {
        this.x = Bezier.quadratic(p0.x, p1.x, p2.x, t);
        this.y = Bezier.quadratic(p0.y, p1.y, p2.y, t);
        return this;
    }
    cubicBezier(p0, p1, p2, p3, t) {
        this.x = Bezier.cubic(p0.x, p1.x, p2.x, p3.x, t);
        this.y = Bezier.cubic(p0.y, p1.y, p2.y, p3.y, t);
        return this;
    }
    add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    addScaledVector(vector2, scalar) {
        this.x += vector2.x * scalar;
        this.y += vector2.y * scalar;
        return this;
    }
    addVectors(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        return this;
    }
    subtract(vector2) {
        this.x -= vector2.x;
        this.y -= vector2.y;
        return this;
    }
    subtractScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    subtractScaledVector(vector2, scalar) {
        this.x -= vector2.x * scalar;
        this.y -= vector2.y * scalar;
        return this;
    }
    subtractVectors(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        return this;
    }
    scale(value) {
        this.x *= value;
        this.y *= value;
        return this;
    }
    scaleVector(v1, value) {
        this.x = v1.x * value;
        this.y = v1.y * value;
        return this;
    }
    multiply(vector2) {
        this.x *= vector2.x;
        this.y *= vector2.y;
        return this;
    }
    multiplyScaledVector(vector2, scalar) {
        this.x *= vector2.x * scalar;
        this.y *= vector2.y * scalar;
        return this;
    }
    multiplyVectors(v1, v2) {
        this.x = v1.x * v2.x;
        this.y = v1.y * v2.y;
        return this;
    }
    divide(vector2) {
        this.x /= vector2.x;
        this.y /= vector2.y;
        return this;
    }
    divideScaledVector(vector2, scalar) {
        this.x /= vector2.x * scalar;
        this.y /= vector2.y * scalar;
        return this;
    }
    divideVectors(v1, v2) {
        this.x = v1.x / v2.x;
        this.y = v1.y / v2.y;
        return this;
    }
    halve() {
        this.x *= 0.5;
        this.y *= 0.5;
        return this;
    }
    max(vector2) {
        this.x = Math.max(this.x, vector2.x);
        this.y = Math.max(this.y, vector2.y);
        return this;
    }
    min(vector2) {
        this.x = Math.min(this.x, vector2.x);
        this.y = Math.min(this.y, vector2.y);
        return this;
    }
    maxScalar(scalar) {
        this.x = Math.max(this.x, scalar);
        this.y = Math.max(this.y, scalar);
        return this;
    }
    minScalar(scalar) {
        this.x = Math.min(this.x, scalar);
        this.y = Math.min(this.y, scalar);
        return this;
    }
    maxAxis() {
        if (this.y > this.x) {
            return Axis.y;
        }
        return Axis.x;
    }
    minAxis() {
        if (this.y < this.x) {
            return Axis.y;
        }
        return Axis.x;
    }
    setOppositeAxis(axis, value) {
        if (axis === Axis.y) {
            this.x = value;
        }
        else {
            this.y = value;
        }
        return this;
    }
    normalize() {
        let length = this.getMagnitude();
        if (length && length != 1) {
            this.scale(1 / length);
        }
        return this;
    }
    normalizeVector(v) {
        this.copy(v);
        return this.normalize();
    }
    absolute() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }
    absoluteVector(v) {
        this.x = Math.abs(v.x);
        this.y = Math.abs(v.y);
        return this;
    }
    opposite() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    oppositeVector(v) {
        this.x = -v.x;
        this.y = -v.y;
        return this;
    }
    clamp(rectangle) {
        this.x = Utils.clamp(this.x, rectangle.topLeftCorner.x, rectangle.bottomRightCorner.x);
        this.y = Utils.clamp(this.y, rectangle.topLeftCorner.y, rectangle.bottomRightCorner.y);
        return this;
    }
    lerp(normal, min, max) {
        this.x = Utils.lerp(normal, min.x, max.x);
        this.y = Utils.lerp(normal, min.y, max.y);
        return this;
    }
    dotProduct(vector2) {
        return this.x * vector2.x + this.y * vector2.y;
    }
}

class Circle {
    constructor(positionX, positionY, radius) {
        this.shape = 'circle';
        this.position = new Vector2(positionX, positionY);
        this.radius = radius;
    }
    set radius(radius) {
        this._radius = radius;
        this._diameter = this._radius * 2;
    }
    get radius() {
        return this._radius;
    }
    set diameter(diameter) {
        this._diameter = diameter;
        this._radius = this._diameter * 0.5;
    }
    get diameter() {
        return this._diameter;
    }
    clone() {
        return new Circle(this.position.x, this.position.y, this.radius);
    }
    copy(circle) {
        this.position.copy(circle.position);
        this.radius = circle.radius;
    }
    set(positionX, positionY, radius) {
        this.position.set(positionX, positionY);
        this.radius = radius;
    }
    setPositionXY(positionX, positionY) {
        this.position.set(positionX, positionY);
    }
    setPositionFromVector(position) {
        this.position.copy(position);
    }
    scale(scalar) {
        this.radius *= scalar;
    }
    draw(context, fillColor, strokeColor, strokeWidth) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Trigonometry.twopi, false);
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }
        if (strokeColor) {
            context.strokeStyle = strokeColor;
            context.lineWidth = strokeWidth;
            context.stroke();
        }
    }
}

class Rectangle {
    constructor(positionX, positionY, sizeX, sizeY) {
        this.shape = 'aabb';
        this.size = new Vector2(sizeX, sizeY);
        this.halfSize = new Vector2();
        this.setHalfSize();
        this.position = new Vector2(positionX, positionY);
        this.topLeftCorner = new Vector2(positionX - this.halfSize.x, positionY - this.halfSize.y);
        this.bottomRightCorner = new Vector2(positionX + this.halfSize.x, positionY + this.halfSize.y);
    }
    clone() {
        return new Rectangle(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    copy(rectangle) {
        this.setSizeFromVector(rectangle.size);
        this.setPositionFromVector(rectangle.position);
    }
    set(positionX, positionY, sizeX, sizeY) {
        this.setSizeXY(sizeX, sizeY);
        this.setPositionXY(positionX, positionY);
    }
    setPositionX(x) {
        this.setPosition('x', x);
    }
    setPositionY(y) {
        this.setPosition('y', y);
    }
    setPosition(property, value) {
        this.position[property] = value;
        this.topLeftCorner[property] = value - this.halfSize[property];
        this.bottomRightCorner[property] = value + this.halfSize[property];
    }
    setPositionXY(positionX, positionY) {
        this.position.set(positionX, positionY);
        this.setCorners();
    }
    setPositionFromVector(position) {
        this.position.copy(position);
        this.setCorners();
    }
    setSizeX(width) {
        this.setSize('x', width);
    }
    setSizeY(height) {
        this.setSize('y', height);
    }
    setSize(property, value) {
        this.size[property] = value;
        this.setHalfSize();
        this.topLeftCorner[property] = this.position[property] - this.halfSize[property];
        this.bottomRightCorner[property] = this.position[property] + this.halfSize[property];
    }
    setSizeXY(width, height) {
        this.size.set(width, height);
        this.setHalfSize();
        this.setCorners();
    }
    setSizeFromVector(size) {
        this.size.copy(size);
        this.setHalfSize();
        this.setCorners();
    }
    setCorners() {
        this.topLeftCorner.set(this.position.x - this.halfSize.x, this.position.y - this.halfSize.y);
        this.bottomRightCorner.set(this.position.x + this.halfSize.x, this.position.y + this.halfSize.y);
    }
    setHalfSize() {
        this.halfSize.copy(this.size);
        this.halfSize.halve();
    }
    draw(context, fillColor, strokeColor, strokeWidth) {
        context.beginPath();
        context.rect(this.topLeftCorner.x, this.topLeftCorner.y, this.size.x, this.size.y);
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }
        if (strokeColor) {
            context.strokeStyle = strokeColor;
            context.lineWidth = strokeWidth;
            context.stroke();
        }
    }
}

var Axis$1;
(function (Axis) {
    Axis["x"] = "x";
    Axis["y"] = "y";
    Axis["z"] = "z";
})(Axis$1 || (Axis$1 = {}));

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    set x(x) {
        this._x = Utils.validate(x);
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = Utils.validate(y);
    }
    get y() {
        return this._y;
    }
    set z(z) {
        this._z = Utils.validate(z);
    }
    get z() {
        return this._z;
    }
    fromArray(array, offset) {
        if (offset === undefined) {
            offset = 0;
        }
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    toString() {
        return '(' + Axis$1.x + ' = ' + this.x + ';' + Axis$1.y + ' = ' + this.y + ';' + Axis$1.z + ' = ' + this.z + ')';
    }
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    copy(vector3) {
        this.x = vector3.x;
        this.y = vector3.y;
        this.y = vector3.z;
        return this;
    }
    origin() {
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
        return this;
    }
    getMagnitude() {
        return Math.sqrt(this.getSquaredMagnitude());
    }
    getSquaredMagnitude() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    getDistance(vector3) {
        this.subtract(vector3);
        let magnitude = this.getMagnitude();
        this.add(vector3);
        return magnitude;
    }
    getSquaredDistance(vector3) {
        this.subtract(vector3);
        let squaredMagnitude = this.getSquaredMagnitude();
        this.add(vector3);
        return squaredMagnitude;
    }
    add(vector3) {
        this.x += vector3.x;
        this.y += vector3.y;
        this.z += vector3.z;
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        this.z += scalar;
        return this;
    }
    addScaledVector(vector3, scalar) {
        this.x += vector3.x * scalar;
        this.y += vector3.y * scalar;
        this.z += vector3.z * scalar;
        return this;
    }
    addVectors(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        this.z = v1.z + v2.z;
        return this;
    }
    subtract(vector3) {
        this.x -= vector3.x;
        this.y -= vector3.y;
        this.z -= vector3.z;
        return this;
    }
    subtractScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        this.z -= scalar;
        return this;
    }
    subtractScaledVector(vector3, scalar) {
        this.x -= vector3.x * scalar;
        this.y -= vector3.y * scalar;
        this.z -= vector3.z * scalar;
        return this;
    }
    subtractVectors(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        this.z = v1.z - v2.z;
        return this;
    }
    scale(value) {
        this.x *= value;
        this.y *= value;
        this.z *= value;
        return this;
    }
    multiply(vector3) {
        this.x *= vector3.x;
        this.y *= vector3.y;
        this.z *= vector3.z;
        return this;
    }
    multiplyScaledVector(vector3, scalar) {
        this.x *= vector3.x * scalar;
        this.y *= vector3.y * scalar;
        this.z *= vector3.z * scalar;
        return this;
    }
    multiplyVectors(v1, v2) {
        this.x = v1.x * v2.x;
        this.y = v1.y * v2.y;
        this.z = v1.z * v2.z;
        return this;
    }
    divide(vector3) {
        this.x /= vector3.x;
        this.y /= vector3.y;
        this.z /= vector3.z;
        return this;
    }
    divideScaledVector(vector3, scalar) {
        this.x /= vector3.x * scalar;
        this.y /= vector3.y * scalar;
        this.z /= vector3.z * scalar;
        return this;
    }
    divideVectors(v1, v2) {
        this.x = v1.x / v2.x;
        this.y = v1.y / v2.y;
        this.z = v1.z / v2.z;
        return this;
    }
    halve() {
        this.x *= 0.5;
        this.y *= 0.5;
        this.z *= 0.5;
        return this;
    }
    max(vector3) {
        this.x = Math.max(this.x, vector3.x);
        this.y = Math.max(this.y, vector3.y);
        this.z = Math.max(this.z, vector3.z);
        return this;
    }
    min(vector3) {
        this.x = Math.min(this.x, vector3.x);
        this.y = Math.min(this.y, vector3.y);
        this.z = Math.min(this.z, vector3.z);
        return this;
    }
    maxScalar(scalar) {
        this.x = Math.max(this.x, scalar);
        this.y = Math.max(this.y, scalar);
        this.z = Math.max(this.z, scalar);
        return this;
    }
    minScalar(scalar) {
        this.x = Math.min(this.x, scalar);
        this.y = Math.min(this.y, scalar);
        this.z = Math.min(this.z, scalar);
        return this;
    }
    normalize() {
        let length = this.getMagnitude();
        if (length && length != 1) {
            this.scale(1 / length);
        }
        return this;
    }
    dotProduct(vector3) {
        return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
    }
    cross(vector3) {
        let x = this.x, y = this.y, z = this.z;
        this.x = y * vector3.z - z * vector3.y;
        this.y = z * vector3.x - x * vector3.z;
        this.z = x * vector3.y - y * vector3.x;
        return this;
    }
    crossVectors(v1, v2) {
        let v1x = v1.x, v1y = v1.y, v1z = v1.z;
        let v2x = v2.x, v2y = v2.y, v2z = v2.z;
        this.x = v1y * v2z - v1z * v2y;
        this.y = v1z * v2x - v1x * v2z;
        this.z = v1x * v2y - v1y * v2x;
        return this;
    }
}

class Matrix4x3 {
    constructor(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
        this.m = new Float32Array(16);
        this.xAxis = new Vector3();
        this.yAxis = new Vector3();
        this.zAxis = new Vector3();
        this.make(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3);
    }
    make(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
        this.m[0] = Utils.validate(x1);
        this.m[1] = Utils.validate(x2);
        this.m[2] = Utils.validate(x3);
        this.m[3] = 0.0;
        this.m[4] = Utils.validate(y1);
        this.m[5] = Utils.validate(y2);
        this.m[6] = Utils.validate(y3);
        this.m[7] = 0.0;
        this.m[8] = Utils.validate(z1);
        this.m[9] = Utils.validate(z2);
        this.m[10] = Utils.validate(z3);
        this.m[11] = 0.0;
        this.m[12] = Utils.validate(t1);
        this.m[13] = Utils.validate(t2);
        this.m[14] = Utils.validate(t3);
        this.m[15] = 1.0;
    }
    copy(matrix4x3) {
        let m = matrix4x3.m;
        this.make(m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10], m[12], m[13], m[14]);
        return this;
    }
    toArray() {
        return this.m;
    }
    toString() {
        return '('
            + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';'
            + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';'
            + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';'
            + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
    }
    identity() {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
        return this;
    }
    scale(vector3) {
        this.make(vector3.x, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0);
        return this;
    }
    rotateX(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(1.0, 0.0, 0.0, 0.0, cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0);
        return this;
    }
    rotateY(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, 0.0, -sin, 0.0, 1.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0);
        return this;
    }
    rotateZ(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
        return this;
    }
    translate(vector3) {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, vector3.x, vector3.y, vector3.z);
        return this;
    }
    multiply(matrix4x3) {
        let m1 = this.m;
        let m2 = matrix4x3.m;
        this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14]);
        return this;
    }
    lookAtRH(eye, target, up) {
        this.zAxis.subtractVectors(eye, target).normalize();
        this.xAxis.crossVectors(up, this.zAxis).normalize();
        this.yAxis.crossVectors(this.zAxis, this.xAxis);
        this.make(this.xAxis.x, this.yAxis.x, this.zAxis.x, this.xAxis.y, this.yAxis.y, this.zAxis.y, this.xAxis.z, this.yAxis.z, this.zAxis.z, -this.xAxis.dotProduct(eye), -this.yAxis.dotProduct(eye), -this.zAxis.dotProduct(eye));
        return this;
    }
}

class Matrix4x4 {
    constructor(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
        this.m = new Float32Array(16);
        this.xAxis = new Vector3();
        this.yAxis = new Vector3();
        this.zAxis = new Vector3();
        this.make(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4);
    }
    make(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
        this.m[0] = Utils.validate(x1);
        this.m[1] = Utils.validate(x2);
        this.m[2] = Utils.validate(x3);
        this.m[3] = Utils.validate(x4);
        this.m[4] = Utils.validate(y1);
        this.m[5] = Utils.validate(y2);
        this.m[6] = Utils.validate(y3);
        this.m[7] = Utils.validate(y4);
        this.m[8] = Utils.validate(z1);
        this.m[9] = Utils.validate(z2);
        this.m[10] = Utils.validate(z3);
        this.m[11] = Utils.validate(z4);
        this.m[12] = Utils.validate(t1);
        this.m[13] = Utils.validate(t2);
        this.m[14] = Utils.validate(t3);
        this.m[15] = Utils.validate(t4);
    }
    copy(matrix4x4) {
        let m = matrix4x4.m;
        this.make(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
        return this;
    }
    toArray() {
        return this.m;
    }
    toString() {
        return '('
            + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';'
            + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';'
            + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';'
            + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
    }
    identity() {
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
    }
    scale(vector3) {
        this.make(vector3.x, 0.0, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
    }
    rotateX(angle) {
        let cos = Trigonometry.cosine(angle);
        let sin = Trigonometry.sine(angle);
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
    }
    rotateY(angle) {
        let cos = Trigonometry.cosine(angle);
        let sin = Trigonometry.sine(angle);
        this.make(cos, 0.0, -sin, 0.0, 0.0, 1.0, 0.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
    }
    rotateZ(angle) {
        let cos = Trigonometry.cosine(angle);
        let sin = Trigonometry.sine(angle);
        this.make(cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
    }
    translate(vector3) {
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, vector3.x, vector3.y, vector3.z, 1.0);
        return this;
    }
    multiply(matrix4x4) {
        let m1 = this.m;
        let m2 = matrix4x4.m;
        this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], 0.0, m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], 0.0, m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], 0.0, m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14], 1.0);
        return this;
    }
    perspective(fovy, aspect, znear, zfar) {
        let f = Math.tan(Trigonometry.halfpi - 0.5 * fovy * Trigonometry.pi / 180);
        let rangeInv = 1.0 / (znear - zfar);
        this.make(f / aspect, 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (znear + zfar) * rangeInv, -1.0, 0.0, 0.0, znear * zfar * rangeInv * 2, 0.0);
        return this;
    }
    orthographic(left, right, top, bottom, near, far) {
        var w = right - left;
        var h = top - bottom;
        var p = far - near;
        var x = (right + left) / w;
        var y = (top + bottom) / h;
        var z = (far + near) / p;
        this.make(2 / w, 0.0, 0.0, 0.0, 0.0, 2 / h, 0.0, 0.0, 0.0, 0.0, -2 / p, 0.0, -x, -y, -z, 1.0);
        return this;
    }
}

export { Trigonometry, Utils, Time, Random, Bezier, Circle, Rectangle, Vector2, Vector3, Matrix4x3, Matrix4x4 };
