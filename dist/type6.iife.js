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

var Type6 = (function (exports) {
    'use strict';

    var Utils = function () {
        function Utils() {}
        Utils.round = function (x, decimals) {
            decimals = Math.pow(10, decimals);
            return Math.round(x * decimals) / decimals;
        };
        Utils.floor = function (x, decimals) {
            decimals = Math.pow(10, decimals);
            return Math.floor(x * decimals) / decimals;
        };
        Utils.ceil = function (x, decimals) {
            decimals = Math.pow(10, decimals);
            return Math.ceil(x * decimals) / decimals;
        };
        Utils.trunc = function (x, decimals) {
            decimals = Math.pow(10, decimals);
            var v = +x * decimals;
            if (!isFinite(v)) {
                return v;
            }
            return (v - v % 1) / decimals || (v < 0 ? -0 : v === 0 ? v : 0);
        };
        Utils.roundToNearest = function (x, nearest) {
            return Math.round(x / nearest) * nearest;
        };
        Utils.mix = function (x, y, ratio) {
            return (1 - ratio) * x + ratio * y;
        };
        Utils.getSign = function (x) {
            return x ? x < 0 ? -1 : 1 : 0;
        };
        Utils.opposite = function (x) {
            return -x;
        };
        Utils.clamp = function (x, min, max) {
            return Math.min(Math.max(x, min), max);
        };
        Utils.normalize = function (x, min, max) {
            return (x - min) / (max - min);
        };
        Utils.lerp = function (min, max, amount) {
            return (max - min) * amount + min;
        };
        Utils.map = function (x, sourceMin, sourceMax, destMin, destMax) {
            return this.lerp(destMin, destMax, this.normalize(x, sourceMin, sourceMax));
        };
        Utils.isIn = function (x, min, max) {
            return x >= min && x <= max;
        };
        Utils.isOut = function (x, min, max) {
            return x < min || x > max;
        };
        return Utils;
    }();

    var Trigonometry = function () {
        function Trigonometry() {}
        Trigonometry.init = function () {
            Trigonometry.createRoundedPis();
            Trigonometry.createFactorialArray();
        };
        Trigonometry.createRoundedPis = function () {
            var decimals = 2;
            this.pi = Utils.round(Math.PI, decimals);
            this.twopi = Utils.round(Math.PI * 2, decimals);
            this.halfpi = Utils.round(Math.PI * 0.5, decimals);
        };
        Trigonometry.createFactorialArray = function () {
            var maxSin = this.sineLoops[this.sineLoops.length - 1] * 3;
            var maxCos = this.cosineLoops[this.cosineLoops.length - 1] * 2;
            for (var i = 1, f = 1; i <= Math.max(maxSin, maxCos); i++) {
                f *= this.factorial(i);
                this.factorialArray.push(f);
            }
        };
        Trigonometry.factorial = function (i) {
            return i > 1 ? i - 1 : 1;
        };
        Trigonometry.setSinePrecision = function (value) {
            if (value >= 0 && value <= this.maxDecimals) {
                this.sineDecimals = value;
                return value;
            }
            return this.sineDecimals = this.maxDecimals;
        };
        Trigonometry.setCosinePrecision = function (value) {
            if (value >= 0 && value <= this.maxDecimals) {
                this.cosineDecimals = value;
                return value;
            }
            return this.cosineDecimals = this.maxDecimals;
        };
        Trigonometry.setArctanPrecision = function (value) {
            if (value >= 0 && value <= this.maxDecimals) {
                this.arctanDecimals = value;
                return value;
            }
            return this.arctanDecimals = this.maxDecimals;
        };
        Trigonometry.degreeToRadian = function (degree) {
            return degree * this.pi / 180;
        };
        Trigonometry.radianToDegree = function (radian) {
            return radian * 180 / this.pi;
        };
        Trigonometry.normalizeRadian = function (angle) {
            if (angle > this.pi || angle < -this.pi) {
                return angle - this.twopi * Math.floor((angle + this.pi) / this.twopi);
            }
            return angle;
        };
        Trigonometry.sine = function (angle) {
            angle = this.normalizeRadian(angle);
            if (Trigonometry.sineDecimals <= 2 && angle < 0.28 && angle > -0.28) {
                return angle;
            } else {
                return this.taylorSerie(3, Trigonometry.sineLoops[this.sineDecimals], angle, angle, true);
            }
        };
        Trigonometry.cosine = function (angle) {
            angle = this.normalizeRadian(angle);
            var squaredAngle = angle * angle;
            if (this.cosineDecimals <= 2 && angle <= 0.5 && angle >= -0.5) {
                return 1 - squaredAngle * 0.5;
            } else {
                return this.taylorSerie(2, Trigonometry.cosineLoops[this.cosineDecimals], 1, angle, true);
            }
        };
        Trigonometry.arctan2 = function (x, y) {
            var angle = y / x;
            if (x > 0) {
                return this.arctan(angle);
            } else if (x < 0) {
                if (y < 0) {
                    return this.arctan(angle) - this.pi;
                } else {
                    return this.arctan(angle) + this.pi;
                }
            } else {
                if (y < 0) {
                    return -this.halfpi;
                } else if (y > 0) {
                    return this.halfpi;
                } else {
                    return false;
                }
            }
        };
        Trigonometry.arctan = function (angle) {
            var loops = Trigonometry.arctanLoops[this.arctanDecimals];
            if (angle < 1 && angle > -1) {
                return this.taylorSerie(3, loops, angle, angle, false);
            } else {
                if (angle >= 1) {
                    angle = 1 / angle;
                    return -(this.taylorSerie(3, loops, angle, angle, false) - this.halfpi);
                } else {
                    angle = -1 / angle;
                    return this.taylorSerie(3, loops, angle, angle, false) - this.halfpi;
                }
            }
        };
        Trigonometry.sineEquation = function (amplitude, period, shiftX, shiftY) {
            return amplitude * this.sine(period + shiftX) + shiftY;
        };
        Trigonometry.cosineEquation = function (amplitude, period, shiftX, shiftY) {
            return amplitude * this.cosine(period + shiftX) + shiftY;
        };
        Trigonometry.arctanEquation = function (amplitude, period, shiftX, shiftY) {
            return amplitude * this.arctan(period + shiftX) + shiftY;
        };
        Trigonometry.taylorSerie = function (start, max, x, angle, needFactorial) {
            var squaredAngle = angle * angle;
            var result = x;
            var denominator = 0;
            var sign = -1;
            for (var i = 0; start <= max; start += 2, i++) {
                x *= squaredAngle;
                denominator = needFactorial ? this.factorialArray[start] : start;
                result += x / denominator * sign;
                sign = Utils.opposite(sign);
            }
            return result;
        };
        Trigonometry.sineLoops = [9, 11, 13, 15, 17, 18, 19, 21, 23];
        Trigonometry.cosineLoops = [6, 8, 10, 12, 14, 16, 18, 20, 22];
        Trigonometry.arctanLoops = [17, 19, 21, 23, 25, 27, 29, 31, 33];
        Trigonometry.sineDecimals = 2;
        Trigonometry.cosineDecimals = 2;
        Trigonometry.arctanDecimals = 2;
        Trigonometry.maxDecimals = 8;
        Trigonometry.factorialArray = [];
        return Trigonometry;
    }();
    Trigonometry.init();

    var Time = function () {
        function Time() {}
        Time.millisecToSec = function (millisecond) {
            return millisecond * 0.001;
        };
        Time.secToMillisec = function (second) {
            return second * 1000;
        };
        Time.millisecToFps = function (millisecond) {
            return 1000 / millisecond;
        };
        Time.fpsToMillisec = function (refreshRate) {
            return 1000 / refreshRate;
        };
        return Time;
    }();

    var Random = function () {
        function Random() {}
        Random.float = function (min, max) {
            return min + Math.random() * (max - min);
        };
        Random.integer = function (min, max) {
            return Math.floor(min + Math.random() * (max - min + 1));
        };
        Random.distribution = function (min, max, iterations) {
            var total = 0;
            for (var i = 0; i < iterations; i++) {
                total += this.float(min, max);
            }
            return total / iterations;
        };
        Random.pick = function (value1, value2) {
            return Math.random() < 0.5 ? value1 : value2;
        };
        return Random;
    }();

    var NumArray = function () {
        function NumArray() {}
        NumArray.min = function (array) {
            return Math.min.apply(Math, array);
        };
        NumArray.max = function (array) {
            return Math.max.apply(Math, array);
        };
        NumArray.sum = function (array) {
            return array.reduce(function (a, b) {
                return a + b;
            }, 0);
        };
        NumArray.multiply = function (array) {
            return array.reduce(function (a, b) {
                return a * b;
            }, 0);
        };
        NumArray.average = function (array, length) {
            return NumArray.sum(array) / length;
        };
        return NumArray;
    }();

    var Bezier = function () {
        function Bezier() {}
        Bezier.quadratic = function (p0, p1, p2, t) {
            var oneMinusT = 1 - t;
            return Math.pow(oneMinusT, 2) * p0 + oneMinusT * 2 * t * p1 + t * t * p2;
        };
        Bezier.cubic = function (p0, p1, p2, p3, t) {
            var oneMinusT = 1 - t;
            var tByT = t * t;
            return Math.pow(oneMinusT, 3) * p0 + Math.pow(oneMinusT, 2) * 3 * t * p1 + oneMinusT * 3 * tByT * p2 + tByT * t * p3;
        };
        return Bezier;
    }();

    var Vector2 = function () {
        function Vector2(x, y) {
            this.x = x || 0.0;
            this.y = y || 0.0;
        }
        Vector2.prototype.isOrigin = function () {
            return this.x === 0 && this.y === 0 ? true : false;
        };
        Vector2.prototype.isPositive = function () {
            return this.x >= 0 && this.y >= 0 ? true : false;
        };
        Vector2.prototype.setFromArray = function (array, offset) {
            if (offset === undefined) {
                offset = 0;
            }
            this.x = array[offset];
            this.y = array[offset + 1];
            return this;
        };
        Vector2.prototype.toArray = function () {
            return [this.x, this.y];
        };
        Vector2.prototype.toString = function () {
            return '(x = ' + this.x + '; y = ' + this.y + ')';
        };
        Vector2.prototype.set = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        Vector2.prototype.clone = function () {
            return new Vector2(this.x, this.y);
        };
        Vector2.prototype.copy = function (v) {
            this.x = v.x;
            this.y = v.y;
            return this;
        };
        Vector2.prototype.origin = function () {
            this.x = 0.0;
            this.y = 0.0;
            return this;
        };
        Vector2.prototype.setFromAngle = function (angle) {
            if (angle) {
                var length_1 = this.getMagnitude();
                this.x = Trigonometry.cosine(angle) * length_1;
                this.y = Trigonometry.sine(angle) * length_1;
            }
            return this;
        };
        Vector2.prototype.getAngle = function () {
            return Math.atan2(this.y, this.x);
        };
        Vector2.prototype.getMagnitude = function (square) {
            if (square === void 0) {
                square = false;
            }
            return square ? this.getSquaredMagnitude() : Math.sqrt(this.getSquaredMagnitude());
        };
        Vector2.prototype.getSquaredMagnitude = function () {
            return this.x * this.x + this.y * this.y;
        };
        Vector2.prototype.getDistance = function (v, square) {
            if (square === void 0) {
                square = false;
            }
            this.subtract(v);
            var magnitude = this.getMagnitude(square);
            this.add(v);
            return magnitude;
        };
        Vector2.prototype.quadraticBezier = function (p0, p1, p2, t) {
            this.x = Bezier.quadratic(p0.x, p1.x, p2.x, t);
            this.y = Bezier.quadratic(p0.y, p1.y, p2.y, t);
            return this;
        };
        Vector2.prototype.cubicBezier = function (p0, p1, p2, p3, t) {
            this.x = Bezier.cubic(p0.x, p1.x, p2.x, p3.x, t);
            this.y = Bezier.cubic(p0.y, p1.y, p2.y, p3.y, t);
            return this;
        };
        Vector2.prototype.add = function (v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        };
        Vector2.prototype.addScalar = function (scalar) {
            this.x += scalar;
            this.y += scalar;
            return this;
        };
        Vector2.prototype.addScaledVector = function (v, scalar) {
            this.x += v.x * scalar;
            this.y += v.y * scalar;
            return this;
        };
        Vector2.prototype.subtract = function (v) {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        };
        Vector2.prototype.subtractScalar = function (scalar) {
            this.x -= scalar;
            this.y -= scalar;
            return this;
        };
        Vector2.prototype.subtractScaledVector = function (v, scalar) {
            this.x -= v.x * scalar;
            this.y -= v.y * scalar;
            return this;
        };
        Vector2.prototype.scale = function (value) {
            this.x *= value;
            this.y *= value;
            return this;
        };
        Vector2.prototype.multiply = function (v) {
            this.x *= v.x;
            this.y *= v.y;
            return this;
        };
        Vector2.prototype.multiplyScaledVector = function (v, scalar) {
            this.x *= v.x * scalar;
            this.y *= v.y * scalar;
            return this;
        };
        Vector2.prototype.divide = function (v) {
            this.x /= v.x;
            this.y /= v.y;
            return this;
        };
        Vector2.prototype.divideScaledVector = function (v, scalar) {
            this.x /= v.x * scalar;
            this.y /= v.y * scalar;
            return this;
        };
        Vector2.prototype.halve = function () {
            this.x *= 0.5;
            this.y *= 0.5;
            return this;
        };
        Vector2.prototype.max = function (v) {
            this.x = Math.max(this.x, v.x);
            this.y = Math.max(this.y, v.y);
            return this;
        };
        Vector2.prototype.min = function (v) {
            this.x = Math.min(this.x, v.x);
            this.y = Math.min(this.y, v.y);
            return this;
        };
        Vector2.prototype.maxScalar = function (scalar) {
            this.x = Math.max(this.x, scalar);
            this.y = Math.max(this.y, scalar);
            return this;
        };
        Vector2.prototype.minScalar = function (scalar) {
            this.x = Math.min(this.x, scalar);
            this.y = Math.min(this.y, scalar);
            return this;
        };
        Vector2.prototype.getMaxAxis = function () {
            return this.y > this.x ? 'y' : 'x';
        };
        Vector2.prototype.getMinAxis = function () {
            return this.y < this.x ? 'y' : 'x';
        };
        Vector2.prototype.setOppositeAxis = function (axis, value) {
            if (axis === 'y') {
                this.x = value;
            } else {
                this.y = value;
            }
            return this;
        };
        Vector2.prototype.normalize = function () {
            var length = this.getMagnitude();
            if (length && length != 1) {
                this.scale(1 / length);
            }
            return this;
        };
        Vector2.prototype.absolute = function () {
            this.x = Math.abs(this.x);
            this.y = Math.abs(this.y);
            return this;
        };
        Vector2.prototype.opposite = function () {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        };
        Vector2.prototype.clamp = function (rectangle) {
            this.x = Utils.clamp(this.x, rectangle.topLeftCorner.x, rectangle.bottomRightCorner.x);
            this.y = Utils.clamp(this.y, rectangle.topLeftCorner.y, rectangle.bottomRightCorner.y);
            return this;
        };
        Vector2.prototype.lerp = function (min, max, amount) {
            this.x = Utils.lerp(min.x, max.x, amount);
            this.y = Utils.lerp(min.y, max.y, amount);
            return this;
        };
        Vector2.prototype.dotProduct = function (v) {
            return this.x * v.x + this.y * v.y;
        };
        return Vector2;
    }();

    var Circle = function () {
        function Circle(positionX, positionY, radius) {
            this.shape = 'circle';
            this._radius = 0.0;
            this._diameter = 0.0;
            this.position = new Vector2(positionX, positionY);
            this.radius = radius;
        }
        Object.defineProperty(Circle.prototype, "radius", {
            get: function get() {
                return this._radius;
            },
            set: function set(radius) {
                this._radius = radius;
                this._diameter = this._radius * 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Circle.prototype, "diameter", {
            get: function get() {
                return this._diameter;
            },
            set: function set(diameter) {
                this._diameter = diameter;
                this._radius = this._diameter * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Circle.prototype.clone = function () {
            return new Circle(this.position.x, this.position.y, this.radius);
        };
        Circle.prototype.copy = function (circle) {
            this.position.copy(circle.position);
            this.radius = circle.radius;
            return this;
        };
        Circle.prototype.set = function (positionX, positionY, radius) {
            this.position.set(positionX, positionY);
            this.radius = radius;
            return this;
        };
        Circle.prototype.setPositionXY = function (positionX, positionY) {
            this.position.set(positionX, positionY);
            return this;
        };
        Circle.prototype.setPositionFromVector = function (position) {
            this.position.copy(position);
            return this;
        };
        Circle.prototype.scale = function (scalar) {
            this.radius *= scalar;
            return this;
        };
        Circle.prototype.isIn = function (v) {
            return v.getDistance(this.position, true) <= this.radius * this.radius;
        };
        Circle.prototype.draw = function (context, fillColor, strokeColor, strokeWidth) {
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
        };
        return Circle;
    }();

    var Rectangle = function () {
        function Rectangle(positionX, positionY, sizeX, sizeY) {
            this.shape = 'aabb';
            this.size = new Vector2(sizeX, sizeY);
            this.halfSize = new Vector2();
            this.setHalfSize();
            this.position = new Vector2(positionX, positionY);
            this.topLeftCorner = new Vector2(positionX - this.halfSize.x, positionY - this.halfSize.y);
            this.bottomRightCorner = new Vector2(positionX + this.halfSize.x, positionY + this.halfSize.y);
        }
        Rectangle.prototype.clone = function () {
            return new Rectangle(this.position.x, this.position.y, this.size.x, this.size.y);
        };
        Rectangle.prototype.copy = function (rectangle) {
            this.setSizeFromVector(rectangle.size);
            this.setPositionFromVector(rectangle.position);
            return this;
        };
        Rectangle.prototype.set = function (positionX, positionY, sizeX, sizeY) {
            this.setSizeXY(sizeX, sizeY);
            this.setPositionXY(positionX, positionY);
            return this;
        };
        Rectangle.prototype.setPositionX = function (x) {
            this.setPosition('x', x);
            return this;
        };
        Rectangle.prototype.setPositionY = function (y) {
            this.setPosition('y', y);
            return this;
        };
        Rectangle.prototype.setPosition = function (property, value) {
            this.position[property] = value;
            this.topLeftCorner[property] = value - this.halfSize[property];
            this.bottomRightCorner[property] = value + this.halfSize[property];
        };
        Rectangle.prototype.setPositionXY = function (positionX, positionY) {
            this.position.set(positionX, positionY);
            this.setCorners();
            return this;
        };
        Rectangle.prototype.setPositionFromVector = function (position) {
            this.position.copy(position);
            this.setCorners();
            return this;
        };
        Rectangle.prototype.setSizeX = function (width) {
            this.setSize('x', width);
            return this;
        };
        Rectangle.prototype.setSizeY = function (height) {
            this.setSize('y', height);
            return this;
        };
        Rectangle.prototype.setSize = function (property, value) {
            this.size[property] = value;
            this.setHalfSize();
            this.topLeftCorner[property] = this.position[property] - this.halfSize[property];
            this.bottomRightCorner[property] = this.position[property] + this.halfSize[property];
        };
        Rectangle.prototype.setSizeXY = function (width, height) {
            this.size.set(width, height);
            this.setHalfSize();
            this.setCorners();
            return this;
        };
        Rectangle.prototype.setSizeFromVector = function (size) {
            this.size.copy(size);
            this.setHalfSize();
            this.setCorners();
            return this;
        };
        Rectangle.prototype.setCorners = function () {
            this.topLeftCorner.set(this.position.x - this.halfSize.x, this.position.y - this.halfSize.y);
            this.bottomRightCorner.set(this.position.x + this.halfSize.x, this.position.y + this.halfSize.y);
        };
        Rectangle.prototype.setHalfSize = function () {
            this.halfSize.copy(this.size);
            this.halfSize.halve();
        };
        Rectangle.prototype.isIn = function (vector) {
            return Utils.isIn(vector.x, this.topLeftCorner.x, this.bottomRightCorner.x) && Utils.isIn(vector.y, this.topLeftCorner.y, this.bottomRightCorner.y);
        };
        Rectangle.prototype.draw = function (context, fillColor, strokeColor, strokeWidth) {
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
        };
        return Rectangle;
    }();

    var Vector3 = function () {
        function Vector3(x, y, z) {
            this.x = x || 0.0;
            this.y = y || 0.0;
            this.z = z || 0.0;
        }
        Vector3.prototype.isOrigin = function () {
            return this.x === 0 && this.y === 0 && this.z === 0 ? true : false;
        };
        Vector3.prototype.isPositive = function () {
            return this.x >= 0 && this.y >= 0 && this.z >= 0 ? true : false;
        };
        Vector3.prototype.setFromArray = function (array, offset) {
            if (offset === undefined) {
                offset = 0;
            }
            this.x = array[offset];
            this.y = array[offset + 1];
            this.z = array[offset + 2];
            return this;
        };
        Vector3.prototype.toArray = function () {
            return [this.x, this.y, this.z];
        };
        Vector3.prototype.toString = function () {
            return '(x = ' + this.x + '; y = ' + this.y + '; z = ' + this.z + ')';
        };
        Vector3.prototype.set = function (x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        };
        Vector3.prototype.clone = function () {
            return new Vector3(this.x, this.y, this.z);
        };
        Vector3.prototype.copy = function (v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            return this;
        };
        Vector3.prototype.origin = function () {
            this.x = 0.0;
            this.y = 0.0;
            this.z = 0.0;
            return this;
        };
        Vector3.prototype.getMagnitude = function (square) {
            if (square === void 0) {
                square = false;
            }
            return square ? this.getSquaredMagnitude() : Math.sqrt(this.getSquaredMagnitude());
        };
        Vector3.prototype.getSquaredMagnitude = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        };
        Vector3.prototype.getDistance = function (v, square) {
            if (square === void 0) {
                square = false;
            }
            this.subtract(v);
            var magnitude = this.getMagnitude(square);
            this.add(v);
            return magnitude;
        };
        Vector3.prototype.add = function (v) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            return this;
        };
        Vector3.prototype.addScalar = function (scalar) {
            this.x += scalar;
            this.y += scalar;
            this.z += scalar;
            return this;
        };
        Vector3.prototype.addScaledVector = function (v, scalar) {
            this.x += v.x * scalar;
            this.y += v.y * scalar;
            this.z += v.z * scalar;
            return this;
        };
        Vector3.prototype.subtract = function (v) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            return this;
        };
        Vector3.prototype.subtractScalar = function (scalar) {
            this.x -= scalar;
            this.y -= scalar;
            this.z -= scalar;
            return this;
        };
        Vector3.prototype.subtractScaledVector = function (v, scalar) {
            this.x -= v.x * scalar;
            this.y -= v.y * scalar;
            this.z -= v.z * scalar;
            return this;
        };
        Vector3.prototype.scale = function (value) {
            this.x *= value;
            this.y *= value;
            this.z *= value;
            return this;
        };
        Vector3.prototype.multiply = function (v) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
            return this;
        };
        Vector3.prototype.multiplyScaledVector = function (v, scalar) {
            this.x *= v.x * scalar;
            this.y *= v.y * scalar;
            this.z *= v.z * scalar;
            return this;
        };
        Vector3.prototype.divide = function (v) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
            return this;
        };
        Vector3.prototype.divideScaledVector = function (v, scalar) {
            this.x /= v.x * scalar;
            this.y /= v.y * scalar;
            this.z /= v.z * scalar;
            return this;
        };
        Vector3.prototype.halve = function () {
            this.x *= 0.5;
            this.y *= 0.5;
            this.z *= 0.5;
            return this;
        };
        Vector3.prototype.max = function (v) {
            this.x = Math.max(this.x, v.x);
            this.y = Math.max(this.y, v.y);
            this.z = Math.max(this.z, v.z);
            return this;
        };
        Vector3.prototype.min = function (v) {
            this.x = Math.min(this.x, v.x);
            this.y = Math.min(this.y, v.y);
            this.z = Math.min(this.z, v.z);
            return this;
        };
        Vector3.prototype.maxScalar = function (scalar) {
            this.x = Math.max(this.x, scalar);
            this.y = Math.max(this.y, scalar);
            this.z = Math.max(this.z, scalar);
            return this;
        };
        Vector3.prototype.minScalar = function (scalar) {
            this.x = Math.min(this.x, scalar);
            this.y = Math.min(this.y, scalar);
            this.z = Math.min(this.z, scalar);
            return this;
        };
        Vector3.prototype.normalize = function () {
            var length = this.getMagnitude();
            if (length && length != 1) {
                this.scale(1 / length);
            }
            return this;
        };
        Vector3.prototype.absolute = function () {
            this.x = Math.abs(this.x);
            this.y = Math.abs(this.y);
            this.z = Math.abs(this.z);
            return this;
        };
        Vector3.prototype.opposite = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
        };
        Vector3.prototype.dotProduct = function (v) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        };
        Vector3.prototype.cross = function (v) {
            var x = this.x,
                y = this.y,
                z = this.z;
            this.x = y * v.z - z * v.y;
            this.y = z * v.x - x * v.z;
            this.z = x * v.y - y * v.x;
            return this;
        };
        return Vector3;
    }();

    var Matrix3x3 = function () {
        function Matrix3x3(x1, x2, x3, y1, y2, y3, t1, t2, t3) {
            this.m = new Float32Array(9);
            this.make(x1, x2, x3, y1, y2, y3, t1, t2, t3);
        }
        Matrix3x3.prototype.make = function (x1, x2, x3, y1, y2, y3, t1, t2, t3) {
            this.m[0] = x1 || 0.0;
            this.m[1] = x2 || 0.0;
            this.m[2] = x3 || 0.0;
            this.m[3] = y1 || 0.0;
            this.m[4] = y2 || 0.0;
            this.m[5] = y3 || 0.0;
            this.m[6] = t1 || 0.0;
            this.m[7] = t2 || 0.0;
            this.m[8] = t3 || 0.0;
        };
        Matrix3x3.prototype.copy = function (matrix3x3) {
            var m = matrix3x3.m;
            this.make(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]);
            return this;
        };
        Matrix3x3.prototype.toArray = function () {
            return this.m;
        };
        Matrix3x3.prototype.toString = function () {
            return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ';' + this.m[3] + ',' + this.m[4] + ',' + this.m[5] + ';' + this.m[6] + ',' + this.m[7] + ',' + this.m[8] + ')';
        };
        Matrix3x3.prototype.identity = function () {
            this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix3x3.prototype.scale = function (vector2) {
            this.make(vector2.x, 0.0, 0.0, 0.0, vector2.y, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix3x3.prototype.rotate = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix3x3.prototype.translate = function (vector2) {
            this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, vector2.x, vector2.y, 1.0);
            return this;
        };
        Matrix3x3.prototype.multiply = function (matrix3x3) {
            var m1 = this.m;
            var m2 = matrix3x3.m;
            this.make(m1[0] * m2[0] + m1[3] * m2[1] + m1[6] * m2[2], m1[1] * m2[0] + m1[4] * m2[1] + m1[7] * m2[2], m1[2] * m2[0] + m1[5] * m2[1] + m1[8] * m2[2], m1[0] * m2[3] + m1[3] * m2[4] + m1[6] * m2[5], m1[1] * m2[3] + m1[4] * m2[4] + m1[7] * m2[5], m1[2] * m2[3] + m1[5] * m2[4] + m1[8] * m2[5], m1[0] * m2[6] + m1[3] * m2[7] + m1[6] * m2[8], m1[1] * m2[6] + m1[4] * m2[7] + m1[7] * m2[8], m1[2] * m2[6] + m1[5] * m2[7] + m1[8] * m2[8]);
            return this;
        };
        return Matrix3x3;
    }();

    var Matrix4x3 = function () {
        function Matrix4x3(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
            this.m = new Float32Array(16);
            this.xAxis = new Vector3();
            this.yAxis = new Vector3();
            this.zAxis = new Vector3();
            this.make(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3);
        }
        Matrix4x3.prototype.make = function (x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
            this.m[0] = x1 || 0.0;
            this.m[1] = x2 || 0.0;
            this.m[2] = x3 || 0.0;
            this.m[3] = 0.0;
            this.m[4] = y1 || 0.0;
            this.m[5] = y2 || 0.0;
            this.m[6] = y3 || 0.0;
            this.m[7] = 0.0;
            this.m[8] = z1 || 0.0;
            this.m[9] = z2 || 0.0;
            this.m[10] = z3 || 0.0;
            this.m[11] = 0.0;
            this.m[12] = t1 || 0.0;
            this.m[13] = t2 || 0.0;
            this.m[14] = t3 || 0.0;
            this.m[15] = 1.0;
        };
        Matrix4x3.prototype.copy = function (matrix4x3) {
            var m = matrix4x3.m;
            this.make(m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10], m[12], m[13], m[14]);
            return this;
        };
        Matrix4x3.prototype.toArray = function () {
            return this.m;
        };
        Matrix4x3.prototype.toString = function () {
            return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';' + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';' + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';' + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
        };
        Matrix4x3.prototype.identity = function () {
            this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
            return this;
        };
        Matrix4x3.prototype.scale = function (vector3) {
            this.make(vector3.x, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0);
            return this;
        };
        Matrix4x3.prototype.rotateX = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(1.0, 0.0, 0.0, 0.0, cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0);
            return this;
        };
        Matrix4x3.prototype.rotateY = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(cos, 0.0, -sin, 0.0, 1.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0);
            return this;
        };
        Matrix4x3.prototype.rotateZ = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
            return this;
        };
        Matrix4x3.prototype.translate = function (vector3) {
            this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, vector3.x, vector3.y, vector3.z);
            return this;
        };
        Matrix4x3.prototype.multiply = function (matrix4x3) {
            var m1 = this.m;
            var m2 = matrix4x3.m;
            this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14]);
            return this;
        };
        Matrix4x3.prototype.lookAtRH = function (eye, target, up) {
            this.zAxis.copy(eye).subtract(target).normalize();
            this.xAxis.copy(up).cross(this.zAxis).normalize();
            this.yAxis.copy(this.zAxis).cross(this.xAxis);
            this.make(this.xAxis.x, this.yAxis.x, this.zAxis.x, this.xAxis.y, this.yAxis.y, this.zAxis.y, this.xAxis.z, this.yAxis.z, this.zAxis.z, -this.xAxis.dotProduct(eye), -this.yAxis.dotProduct(eye), -this.zAxis.dotProduct(eye));
            return this;
        };
        return Matrix4x3;
    }();

    var Matrix4x4 = function () {
        function Matrix4x4(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
            this.m = new Float32Array(16);
            this.make(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4);
        }
        Matrix4x4.prototype.make = function (x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
            this.m[0] = x1 || 0.0;
            this.m[1] = x2 || 0.0;
            this.m[2] = x3 || 0.0;
            this.m[3] = x4 || 0.0;
            this.m[4] = y1 || 0.0;
            this.m[5] = y2 || 0.0;
            this.m[6] = y3 || 0.0;
            this.m[7] = y4 || 0.0;
            this.m[8] = z1 || 0.0;
            this.m[9] = z2 || 0.0;
            this.m[10] = z3 || 0.0;
            this.m[11] = z4 || 0.0;
            this.m[12] = t1 || 0.0;
            this.m[13] = t2 || 0.0;
            this.m[14] = t3 || 0.0;
            this.m[15] = t4 || 0.0;
        };
        Matrix4x4.prototype.copy = function (matrix4x4) {
            var m = matrix4x4.m;
            this.make(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
            return this;
        };
        Matrix4x4.prototype.toArray = function () {
            return this.m;
        };
        Matrix4x4.prototype.toString = function () {
            return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';' + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';' + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';' + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
        };
        Matrix4x4.prototype.identity = function () {
            this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix4x4.prototype.scale = function (vector3) {
            this.make(vector3.x, 0.0, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix4x4.prototype.rotateX = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(1.0, 0.0, 0.0, 0.0, 0.0, cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix4x4.prototype.rotateY = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(cos, 0.0, -sin, 0.0, 0.0, 1.0, 0.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix4x4.prototype.rotateZ = function (angle) {
            var cos = Trigonometry.cosine(angle);
            var sin = Trigonometry.sine(angle);
            this.make(cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
            return this;
        };
        Matrix4x4.prototype.translate = function (vector3) {
            this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, vector3.x, vector3.y, vector3.z, 1.0);
            return this;
        };
        Matrix4x4.prototype.multiply = function (matrix4x4) {
            var m1 = this.m;
            var m2 = matrix4x4.m;
            this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], 0.0, m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], 0.0, m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], 0.0, m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14], 1.0);
            return this;
        };
        Matrix4x4.prototype.perspective = function (fovy, aspect, znear, zfar) {
            var f = Math.tan(Trigonometry.halfpi - 0.5 * fovy * Trigonometry.pi / 180);
            var rangeInv = 1.0 / (znear - zfar);
            this.make(f / aspect, 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (znear + zfar) * rangeInv, -1.0, 0.0, 0.0, znear * zfar * rangeInv * 2, 0.0);
            return this;
        };
        Matrix4x4.prototype.orthographic = function (left, right, top, bottom, near, far) {
            var w = right - left;
            var h = top - bottom;
            var p = far - near;
            var x = (right + left) / w;
            var y = (top + bottom) / h;
            var z = (far + near) / p;
            this.make(2 / w, 0.0, 0.0, 0.0, 0.0, 2 / h, 0.0, 0.0, 0.0, 0.0, -2 / p, 0.0, -x, -y, -z, 1.0);
            return this;
        };
        return Matrix4x4;
    }();

    exports.Trigonometry = Trigonometry;
    exports.Utils = Utils;
    exports.Time = Time;
    exports.Random = Random;
    exports.NumArray = NumArray;
    exports.Bezier = Bezier;
    exports.Circle = Circle;
    exports.Rectangle = Rectangle;
    exports.Vector2 = Vector2;
    exports.Vector3 = Vector3;
    exports.Matrix3x3 = Matrix3x3;
    exports.Matrix4x3 = Matrix4x3;
    exports.Matrix4x4 = Matrix4x4;

    return exports;

}({}));
