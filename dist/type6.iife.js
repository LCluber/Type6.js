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
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/LCluber/Type6.js
 */
var Type6 = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "round",
      value: function round(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.round(x * decimals) / decimals;
      }
    }, {
      key: "floor",
      value: function floor(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.floor(x * decimals) / decimals;
      }
    }, {
      key: "ceil",
      value: function ceil(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.ceil(x * decimals) / decimals;
      }
    }, {
      key: "trunc",
      value: function trunc(x, decimals) {
        decimals = Math.pow(10, decimals);
        var v = +x * decimals;
        if (!isFinite(v)) return v;
        return (v - v % 1) / decimals || (v < 0 ? -0 : v === 0 ? v : 0);
      }
    }, {
      key: "roundToNearest",
      value: function roundToNearest(x, nearest) {
        return Math.round(x / nearest) * nearest;
      }
    }, {
      key: "mix",
      value: function mix(x, y, ratio) {
        return (1 - ratio) * x + ratio * y;
      }
    }, {
      key: "getSign",
      value: function getSign(x) {
        return x ? x < 0 ? -1 : 1 : 0;
      }
    }, {
      key: "opposite",
      value: function opposite(x) {
        return -x;
      }
    }, {
      key: "clamp",
      value: function clamp(x, min, max) {
        return Math.min(Math.max(x, min), max);
      }
    }, {
      key: "normalize",
      value: function normalize(x, min, max) {
        return (x - min) / (max - min);
      }
    }, {
      key: "lerp",
      value: function lerp(min, max, amount) {
        return (max - min) * amount + min;
      }
    }, {
      key: "map",
      value: function map(x, sourceMin, sourceMax, destMin, destMax) {
        return this.lerp(destMin, destMax, this.normalize(x, sourceMin, sourceMax));
      }
    }, {
      key: "isIn",
      value: function isIn(x, min, max) {
        return x >= min && x <= max;
      }
    }, {
      key: "isOut",
      value: function isOut(x, min, max) {
        return x < min || x > max;
      }
    }]);

    return Utils;
  }();

  var Trigonometry = /*#__PURE__*/function () {
    function Trigonometry() {
      _classCallCheck(this, Trigonometry);
    }

    _createClass(Trigonometry, null, [{
      key: "init",
      value: function init() {
        Trigonometry.createRoundedPis();
        Trigonometry.createFactorialArray();
      }
    }, {
      key: "createRoundedPis",
      value: function createRoundedPis() {
        var decimals = 2;
        this.pi = Utils.round(Math.PI, decimals);
        this.twopi = Utils.round(Math.PI * 2, decimals);
        this.halfpi = Utils.round(Math.PI * 0.5, decimals);
      }
    }, {
      key: "createFactorialArray",
      value: function createFactorialArray() {
        var maxSin = this.sineLoops[this.sineLoops.length - 1] * 3;
        var maxCos = this.cosineLoops[this.cosineLoops.length - 1] * 2;

        for (var i = 1, f = 1; i <= Math.max(maxSin, maxCos); i++) {
          f *= this.factorial(i);
          this.factorialArray.push(f);
        }
      }
    }, {
      key: "factorial",
      value: function factorial(i) {
        return i > 1 ? i - 1 : 1;
      }
    }, {
      key: "setSinePrecision",
      value: function setSinePrecision(value) {
        if (value >= 0 && value <= this.maxDecimals) {
          this.sineDecimals = value;
          return value;
        }

        return this.sineDecimals = this.maxDecimals;
      }
    }, {
      key: "setCosinePrecision",
      value: function setCosinePrecision(value) {
        if (value >= 0 && value <= this.maxDecimals) {
          this.cosineDecimals = value;
          return value;
        }

        return this.cosineDecimals = this.maxDecimals;
      }
    }, {
      key: "setArctanPrecision",
      value: function setArctanPrecision(value) {
        if (value >= 0 && value <= this.maxDecimals) {
          this.arctanDecimals = value;
          return value;
        }

        return this.arctanDecimals = this.maxDecimals;
      }
    }, {
      key: "degreeToRadian",
      value: function degreeToRadian(degree) {
        return degree * this.pi / 180;
      }
    }, {
      key: "radianToDegree",
      value: function radianToDegree(radian) {
        return radian * 180 / this.pi;
      }
    }, {
      key: "normalizeRadian",
      value: function normalizeRadian(angle) {
        if (angle > this.pi || angle < -this.pi) {
          return angle - this.twopi * Math.floor((angle + this.pi) / this.twopi);
        }

        return angle;
      }
    }, {
      key: "sine",
      value: function sine(angle) {
        angle = this.normalizeRadian(angle);
        if (Trigonometry.sineDecimals <= 2 && angle < 0.28 && angle > -0.28) return angle;else return this.taylorSerie(3, Trigonometry.sineLoops[this.sineDecimals], angle, angle, true);
      }
    }, {
      key: "cosine",
      value: function cosine(angle) {
        angle = this.normalizeRadian(angle);
        var squaredAngle = angle * angle;
        if (this.cosineDecimals <= 2 && angle <= 0.5 && angle >= -0.5) return 1 - squaredAngle * 0.5;else return this.taylorSerie(2, Trigonometry.cosineLoops[this.cosineDecimals], 1, angle, true);
      }
    }, {
      key: "arctan2",
      value: function arctan2(x, y) {
        var angle = y / x;

        if (x > 0) {
          return this.arctan(angle);
        } else if (x < 0) {
          if (y < 0) return this.arctan(angle) - this.pi;else return this.arctan(angle) + this.pi;
        } else {
          if (y < 0) return -this.halfpi;else if (y > 0) return this.halfpi;else return false;
        }
      }
    }, {
      key: "arctan",
      value: function arctan(angle) {
        var loops = Trigonometry.arctanLoops[this.arctanDecimals];
        if (angle < 1 && angle > -1) return this.taylorSerie(3, loops, angle, angle, false);else {
          if (angle >= 1) {
            angle = 1 / angle;
            return -(this.taylorSerie(3, loops, angle, angle, false) - this.halfpi);
          } else {
            angle = -1 / angle;
            return this.taylorSerie(3, loops, angle, angle, false) - this.halfpi;
          }
        }
      }
    }, {
      key: "sineEquation",
      value: function sineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.sine(period + shiftX) + shiftY;
      }
    }, {
      key: "cosineEquation",
      value: function cosineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.cosine(period + shiftX) + shiftY;
      }
    }, {
      key: "arctanEquation",
      value: function arctanEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.arctan(period + shiftX) + shiftY;
      }
    }, {
      key: "taylorSerie",
      value: function taylorSerie(start, max, x, angle, needFactorial) {
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
      }
    }]);

    return Trigonometry;
  }();
  Trigonometry.sineLoops = [9, 11, 13, 15, 17, 18, 19, 21, 23];
  Trigonometry.cosineLoops = [6, 8, 10, 12, 14, 16, 18, 20, 22];
  Trigonometry.arctanLoops = [17, 19, 21, 23, 25, 27, 29, 31, 33];
  Trigonometry.sineDecimals = 2;
  Trigonometry.cosineDecimals = 2;
  Trigonometry.arctanDecimals = 2;
  Trigonometry.maxDecimals = 8;
  Trigonometry.factorialArray = [];
  Trigonometry.init();

  var Time = /*#__PURE__*/function () {
    function Time() {
      _classCallCheck(this, Time);
    }

    _createClass(Time, null, [{
      key: "millisecToSec",
      value: function millisecToSec(millisecond) {
        return millisecond * 0.001;
      }
    }, {
      key: "secToMillisec",
      value: function secToMillisec(second) {
        return second * 1000;
      }
    }, {
      key: "millisecToFps",
      value: function millisecToFps(millisecond) {
        return 1000 / millisecond;
      }
    }, {
      key: "fpsToMillisec",
      value: function fpsToMillisec(refreshRate) {
        return 1000 / refreshRate;
      }
    }]);

    return Time;
  }();

  var Random = /*#__PURE__*/function () {
    function Random() {
      _classCallCheck(this, Random);
    }

    _createClass(Random, null, [{
      key: "float",
      value: function float(min, max) {
        return min + Math.random() * (max - min);
      }
    }, {
      key: "integer",
      value: function integer(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
      }
    }, {
      key: "distribution",
      value: function distribution(min, max, iterations) {
        var total = 0;

        for (var i = 0; i < iterations; i++) {
          total += this["float"](min, max);
        }

        return total / iterations;
      }
    }, {
      key: "pick",
      value: function pick(value1, value2) {
        return Math.random() < 0.5 ? value1 : value2;
      }
    }]);

    return Random;
  }();

  var NumArray = /*#__PURE__*/function () {
    function NumArray() {
      _classCallCheck(this, NumArray);
    }

    _createClass(NumArray, null, [{
      key: "min",
      value: function min(array) {
        return Math.min.apply(Math, _toConsumableArray(array));
      }
    }, {
      key: "max",
      value: function max(array) {
        return Math.max.apply(Math, _toConsumableArray(array));
      }
    }, {
      key: "sum",
      value: function sum(array) {
        return array.reduce(function (a, b) {
          return a + b;
        }, 0);
      }
    }, {
      key: "multiply",
      value: function multiply(array) {
        return array.reduce(function (a, b) {
          return a * b;
        }, 0);
      }
    }, {
      key: "average",
      value: function average(array, length) {
        return NumArray.sum(array) / length;
      }
    }]);

    return NumArray;
  }();

  var Bezier = /*#__PURE__*/function () {
    function Bezier() {
      _classCallCheck(this, Bezier);
    }

    _createClass(Bezier, null, [{
      key: "quadratic",
      value: function quadratic(p0, p1, p2, t) {
        var oneMinusT = 1 - t;
        return Math.pow(oneMinusT, 2) * p0 + oneMinusT * 2 * t * p1 + t * t * p2;
      }
    }, {
      key: "cubic",
      value: function cubic(p0, p1, p2, p3, t) {
        var oneMinusT = 1 - t;
        var tByT = t * t;
        return Math.pow(oneMinusT, 3) * p0 + Math.pow(oneMinusT, 2) * 3 * t * p1 + oneMinusT * 3 * tByT * p2 + tByT * t * p3;
      }
    }]);

    return Bezier;
  }();

  var Vector = /*#__PURE__*/function () {
    function Vector() {
      _classCallCheck(this, Vector);
    }

    _createClass(Vector, [{
      key: "setScalar",
      value: function setScalar(x, y, z, w) {
        this.x = x !== null && x !== void 0 ? x : this.x;
        this.y = y !== null && y !== void 0 ? y : this.y;
        if (this.hasOwnProperty('z')) this.z = z !== null && z !== void 0 ? z : this.z;
        if (this.hasOwnProperty('w')) this.w = w !== null && w !== void 0 ? w : this.w;
        return this;
      }
    }, {
      key: "setArray",
      value: function setArray(array, offset) {
        var _a, _b, _c, _d;

        if (offset === undefined) {
          offset = 0;
        }

        this.x = (_a = array[offset]) !== null && _a !== void 0 ? _a : this.x;
        this.y = (_b = array[offset + 1]) !== null && _b !== void 0 ? _b : this.y;
        if (this.hasOwnProperty('z')) this.z = (_c = array[offset + 2]) !== null && _c !== void 0 ? _c : this.z;
        if (this.hasOwnProperty('w')) this.w = (_d = array[offset + 3]) !== null && _d !== void 0 ? _d : this.w;
        return this;
      }
    }, {
      key: "copy",
      value: function copy(vector) {
        var _a, _b, _c, _d;

        this.x = (_a = vector.x) !== null && _a !== void 0 ? _a : this.x;
        this.y = (_b = vector.y) !== null && _b !== void 0 ? _b : this.y;
        if (this.hasOwnProperty('z')) this.z = (_c = vector.z) !== null && _c !== void 0 ? _c : this.z;
        if (this.hasOwnProperty('w')) this.w = (_d = vector.w) !== null && _d !== void 0 ? _d : this.w;
        return this;
      }
    }, {
      key: "isPositive",
      value: function isPositive() {
        return this.x >= 0 && this.y >= 0 && (!this.hasOwnProperty('z') || this.z >= 0) && (!this.hasOwnProperty('w') || this.w >= 0) ? true : false;
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(scalar) {
        return this.x === scalar && this.y === scalar && (!this.hasOwnProperty('z') || this.z === scalar) && (!this.hasOwnProperty('w') || this.w === scalar) ? true : false;
      }
    }, {
      key: "isOrigin",
      value: function isOrigin() {
        return this.x === 0 && this.y === 0 && (!this.hasOwnProperty('z') || this.z === 0) && (!this.hasOwnProperty('w') || this.w === 0) ? true : false;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return Object.values(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        var z = '',
            w = '';
        if (this.hasOwnProperty('z')) z = "; z = ".concat(this.z, ")");
        if (this.hasOwnProperty('w')) w = "; w = ".concat(this.w, ")");
        return "(x = ".concat(this.x, "; y = ").concat(this.y).concat(z).concat(w, ")");
      }
    }, {
      key: "origin",
      value: function origin() {
        this.x = 0.0;
        this.y = 0.0;
        if (this.hasOwnProperty('z')) this.z = 0.0;
        if (this.hasOwnProperty('w')) this.w = 0.0;
        return this;
      }
    }, {
      key: "getMagnitude",
      value: function getMagnitude() {
        var square = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return square ? this.getSquaredMagnitude() : Math.sqrt(this.getSquaredMagnitude());
      }
    }, {
      key: "getSquaredMagnitude",
      value: function getSquaredMagnitude() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2) + (this.hasOwnProperty('z') ? Math.pow(this.z, 2) : 0) + (this.hasOwnProperty('w') ? Math.pow(this.w, 2) : 0);
      }
    }, {
      key: "getDistance",
      value: function getDistance(vector) {
        var square = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.subtract(vector);
        var magnitude = this.getMagnitude(square);
        this.add(vector);
        return magnitude;
      }
    }, {
      key: "add",
      value: function add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        if (this.hasOwnProperty('z')) this.z += vector.z;
        if (this.hasOwnProperty('w')) this.w += vector.w;
        return this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(vector, scalar) {
        this.x += vector.x * scalar;
        this.y += vector.y * scalar;
        if (this.hasOwnProperty('z')) this.z += vector.z * scalar;
        if (this.hasOwnProperty('w')) this.w += vector.w * scalar;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        if (this.hasOwnProperty('z')) this.z += scalar;
        if (this.hasOwnProperty('w')) this.w += scalar;
        return this;
      }
    }, {
      key: "subtract",
      value: function subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        if (this.hasOwnProperty('z')) this.z -= vector.z;
        if (this.hasOwnProperty('w')) this.w -= vector.w;
        return this;
      }
    }, {
      key: "subtractScaledVector",
      value: function subtractScaledVector(vector, scalar) {
        this.x -= vector.x * scalar;
        this.y -= vector.y * scalar;
        if (this.hasOwnProperty('z')) this.z -= vector.z * scalar;
        if (this.hasOwnProperty('w')) this.w -= vector.w * scalar;
        return this;
      }
    }, {
      key: "subtractScalar",
      value: function subtractScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        if (this.hasOwnProperty('z')) this.z -= scalar;
        if (this.hasOwnProperty('w')) this.w -= scalar;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        if (this.hasOwnProperty('z')) this.z *= vector.z;
        if (this.hasOwnProperty('w')) this.w *= vector.w;
        return this;
      }
    }, {
      key: "multiplyScaledVector",
      value: function multiplyScaledVector(vector, scalar) {
        this.x *= vector.x * scalar;
        this.y *= vector.y * scalar;
        if (this.hasOwnProperty('z')) this.z *= vector.z * scalar;
        if (this.hasOwnProperty('z')) this.w *= vector.w * scalar;
        return this;
      }
    }, {
      key: "scale",
      value: function scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        if (this.hasOwnProperty('z')) this.z *= scalar;
        if (this.hasOwnProperty('w')) this.w *= scalar;
        return this;
      }
    }, {
      key: "divide",
      value: function divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        if (this.hasOwnProperty('z')) this.z /= vector.z;
        if (this.hasOwnProperty('w')) this.w /= vector.w;
        return this;
      }
    }, {
      key: "divideScaledVector",
      value: function divideScaledVector(vector, scalar) {
        this.x /= vector.x * scalar;
        this.y /= vector.y * scalar;
        if (this.hasOwnProperty('z')) this.z /= vector.z * scalar;
        if (this.hasOwnProperty('w')) this.w /= vector.w * scalar;
        return this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        if (this.hasOwnProperty('z')) this.z /= scalar;
        if (this.hasOwnProperty('w')) this.w /= scalar;
        return this;
      }
    }, {
      key: "halve",
      value: function halve() {
        this.x *= 0.5;
        this.y *= 0.5;
        if (this.hasOwnProperty('z')) this.z *= 0.5;
        if (this.hasOwnProperty('w')) this.w *= 0.5;
        return this;
      }
    }, {
      key: "max",
      value: function max(vector) {
        this.x = Math.max(this.x, vector.x);
        this.y = Math.max(this.y, vector.y);
        if (this.hasOwnProperty('z')) this.z = Math.max(this.z, vector.z);
        if (this.hasOwnProperty('w')) this.w = Math.max(this.w, vector.w);
        return this;
      }
    }, {
      key: "min",
      value: function min(vector) {
        this.x = Math.min(this.x, vector.x);
        this.y = Math.min(this.y, vector.y);
        if (this.hasOwnProperty('z')) this.z = Math.min(this.z, vector.z);
        if (this.hasOwnProperty('w')) this.w = Math.min(this.w, vector.w);
        return this;
      }
    }, {
      key: "maxScalar",
      value: function maxScalar(scalar) {
        this.x = Math.max(this.x, scalar);
        this.y = Math.max(this.y, scalar);
        if (this.hasOwnProperty('z')) this.z = Math.max(this.z, scalar);
        if (this.hasOwnProperty('w')) this.w = Math.max(this.w, scalar);
        return this;
      }
    }, {
      key: "minScalar",
      value: function minScalar(scalar) {
        this.x = Math.min(this.x, scalar);
        this.y = Math.min(this.y, scalar);
        if (this.hasOwnProperty('z')) this.z = Math.min(this.z, scalar);
        if (this.hasOwnProperty('w')) this.w = Math.min(this.w, scalar);
        return this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var length = this.getMagnitude();
        if (length && length != 1) this.scale(1 / length);
        return this;
      }
    }, {
      key: "absolute",
      value: function absolute(axis) {
        if (!axis || axis === 'x') this.x = Math.abs(this.x);
        if (!axis || axis === 'y') this.y = Math.abs(this.y);
        if (this.hasOwnProperty('z') && (!axis || axis === 'z')) this.z = Math.abs(this.z);
        if (this.hasOwnProperty('w') && (!axis || axis === 'w')) this.w = Math.abs(this.w);
        return this;
      }
    }, {
      key: "opposite",
      value: function opposite(axis) {
        if (!axis || axis === 'x') this.x = -this.x;
        if (!axis || axis === 'y') this.y = -this.y;
        if (this.hasOwnProperty('z') && (!axis || axis === 'z')) this.z = -this.z;
        if (this.hasOwnProperty('w') && (!axis || axis === 'w')) this.w = -this.w;
        return this;
      }
    }, {
      key: "dotProduct",
      value: function dotProduct(vector) {
        return this.x * vector.x + this.y * vector.y + (this.hasOwnProperty('z') ? this.z * vector.z : 0) + (this.hasOwnProperty('w') ? this.w * vector.w : 0);
      }
    }]);

    return Vector;
  }();

  var Vector2 = /*#__PURE__*/function (_Vector) {
    _inherits(Vector2, _Vector);

    var _super = _createSuper(Vector2);

    function Vector2(x, y) {
      var _this;

      _classCallCheck(this, Vector2);

      _this = _super.call(this);
      _this.x = 0.0;
      _this.y = 0.0;

      _this.setScalar(x, y);

      return _this;
    }

    _createClass(Vector2, [{
      key: "setRadian",
      value: function setRadian(angle) {
        if (angle) {
          var length = this.getMagnitude();
          this.x = Trigonometry.cosine(angle) * length;
          this.y = Trigonometry.sine(angle) * length;
        }

        return this;
      }
    }, {
      key: "setDegree",
      value: function setDegree(angle) {
        if (angle) {
          angle = Trigonometry.degreeToRadian(angle);
          this.setRadian(angle);
        }

        return this;
      }
    }, {
      key: "setMinAxis",
      value: function setMinAxis(scalar) {
        if (this.y < this.x) this.y = scalar;else this.x = scalar;
        return this;
      }
    }, {
      key: "setMaxAxis",
      value: function setMaxAxis(scalar) {
        if (this.y > this.x) this.y = scalar;else this.x = scalar;
        return this;
      }
    }, {
      key: "setOppositeAxis",
      value: function setOppositeAxis(axis, value) {
        if (axis === 'y') this.x = value;else this.y = value;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector2(this.x, this.y);
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        return Trigonometry.arctan2(this.y, this.x);
      }
    }, {
      key: "quadraticBezier",
      value: function quadraticBezier(p0, p1, p2, t) {
        this.x = Bezier.quadratic(p0.x, p1.x, p2.x, t);
        this.y = Bezier.quadratic(p0.y, p1.y, p2.y, t);
        return this;
      }
    }, {
      key: "cubicBezier",
      value: function cubicBezier(p0, p1, p2, p3, t) {
        this.x = Bezier.cubic(p0.x, p1.x, p2.x, p3.x, t);
        this.y = Bezier.cubic(p0.y, p1.y, p2.y, p3.y, t);
        return this;
      }
    }, {
      key: "getMaxAxis",
      value: function getMaxAxis() {
        return this.y > this.x ? 'y' : 'x';
      }
    }, {
      key: "getMinAxis",
      value: function getMinAxis() {
        return this.y < this.x ? 'y' : 'x';
      }
    }, {
      key: "clamp",
      value: function clamp(rectangle) {
        this.x = Utils.clamp(this.x, rectangle.topLeftCorner.x, rectangle.bottomRightCorner.x);
        this.y = Utils.clamp(this.y, rectangle.topLeftCorner.y, rectangle.bottomRightCorner.y);
        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(min, max, amount) {
        this.x = Utils.lerp(min.x, max.x, amount);
        this.y = Utils.lerp(min.y, max.y, amount);
        return this;
      }
    }]);

    return Vector2;
  }(Vector);

  var Circle = /*#__PURE__*/function () {
    function Circle(radius, positionX, positionY) {
      _classCallCheck(this, Circle);

      this.shape = 'circle';
      this._radius = 0.0;
      this._diameter = 0.0;
      this.position = new Vector2(positionX, positionY);
      this.radius = radius;
    }

    _createClass(Circle, [{
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set(radius) {
        this._radius = radius;
        this._diameter = this._radius * 2;
      }
    }, {
      key: "diameter",
      get: function get() {
        return this._diameter;
      },
      set: function set(diameter) {
        this._diameter = diameter;
        this._radius = this._diameter * 0.5;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Circle(this.radius, this.position.x, this.position.y);
      }
    }, {
      key: "copy",
      value: function copy(circle) {
        this.position.copy(circle.position);
        this.radius = circle.radius;
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(positionX, positionY) {
        this.position.setScalar(positionX, positionY);
        return this;
      }
    }, {
      key: "setRadius",
      value: function setRadius(radius) {
        this.radius = radius;
        return this;
      }
    }, {
      key: "setDiameter",
      value: function setDiameter(diameter) {
        this.diameter = diameter;
        return this;
      }
    }, {
      key: "scale",
      value: function scale(scalar) {
        this.radius *= scalar;
        return this;
      }
    }, {
      key: "isIn",
      value: function isIn(v) {
        return v.getDistance(this.position, true) <= this.radius * this.radius;
      }
    }, {
      key: "draw",
      value: function draw(context, fillColor, strokeColor, strokeWidth) {
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
    }]);

    return Circle;
  }();

  var Rectangle = /*#__PURE__*/function () {
    function Rectangle(width, height, positionX, positionY) {
      _classCallCheck(this, Rectangle);

      this.shape = 'aabb';
      this.position = new Vector2(positionX, positionY);
      this.size = new Vector2(width, height);
      this.halfSize = new Vector2();
      this.topLeftCorner = new Vector2();
      this.bottomRightCorner = new Vector2();
      this.setHalfSize();
      this.setCorners();
    }

    _createClass(Rectangle, [{
      key: "clone",
      value: function clone() {
        return new Rectangle(this.size.x, this.size.y, this.position.x, this.position.y);
      }
    }, {
      key: "copy",
      value: function copy(rectangle) {
        this.setSize(rectangle.size.x, rectangle.size.y);
        this.setPosition(rectangle.position.x, rectangle.position.y);
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(positionX, positionY) {
        this.position.setScalar(positionX, positionY);
        this.setCorners();
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.size.setScalar(width, height);
        this.setHalfSize();
        this.setCorners();
      }
    }, {
      key: "isIn",
      value: function isIn(vector) {
        return Utils.isIn(vector.x, this.topLeftCorner.x, this.bottomRightCorner.x) && Utils.isIn(vector.y, this.topLeftCorner.y, this.bottomRightCorner.y);
      }
    }, {
      key: "draw",
      value: function draw(context, fillColor, strokeColor, strokeWidth) {
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
    }, {
      key: "setCorners",
      value: function setCorners() {
        this.topLeftCorner.copy(this.position).subtract(this.halfSize);
        this.bottomRightCorner.copy(this.position).add(this.halfSize);
      }
    }, {
      key: "setHalfSize",
      value: function setHalfSize() {
        this.halfSize.copy(this.size).halve();
      }
    }]);

    return Rectangle;
  }();

  var Vector3 = /*#__PURE__*/function (_Vector) {
    _inherits(Vector3, _Vector);

    var _super = _createSuper(Vector3);

    function Vector3(x, y, z) {
      var _this;

      _classCallCheck(this, Vector3);

      _this = _super.call(this);
      _this.x = 0.0;
      _this.y = 0.0;
      _this.z = 0.0;

      _this.setScalar(x, y, z);

      return _this;
    }

    _createClass(Vector3, [{
      key: "clone",
      value: function clone() {
        return new Vector3(this.x, this.y, this.z);
      }
    }, {
      key: "cross",
      value: function cross(v) {
        var x = this.x,
            y = this.y,
            z = this.z;
        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;
        return this;
      }
    }]);

    return Vector3;
  }(Vector);

  var Quaternion = /*#__PURE__*/function (_Vector) {
    _inherits(Quaternion, _Vector);

    var _super = _createSuper(Quaternion);

    function Quaternion(x, y, z, w) {
      var _this;

      _classCallCheck(this, Quaternion);

      _this = _super.call(this);
      _this.x = 0.0;
      _this.y = 0.0;
      _this.z = 0.0;
      _this.w = 0.0;

      _this.setScalar(x, y, z, w);

      return _this;
    }

    _createClass(Quaternion, [{
      key: "conjugate",
      value: function conjugate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(q) {
        var qax = this.x,
            qay = this.y,
            qaz = this.z,
            qaw = this.w;
        var qbx = q.x,
            qby = q.y,
            qbz = q.z,
            qbw = q.w;
        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        return this;
      }
    }, {
      key: "multiplyByVector",
      value: function multiplyByVector(v) {
        var qx = this.x,
            qy = this.y,
            qz = this.z,
            qw = this.w;
        var vx = v.x,
            vy = v.y,
            vz = v.z;
        this.x = qw * vx + qy * vz - qz * vy;
        this.y = qw * vy + qz * vx - qx * vz;
        this.z = qw * vz + qx * vy - qy * vx;
        this.w = -qx * vx - qy * vy - qz * vz;
        return this.v;
      }
    }]);

    return Quaternion;
  }(Vector);

  var Matrix3x3 = /*#__PURE__*/function () {
    function Matrix3x3(x1, x2, x3, y1, y2, y3, t1, t2, t3) {
      _classCallCheck(this, Matrix3x3);

      this.m = new Float32Array(9);
      this.make(x1, x2, x3, y1, y2, y3, t1, t2, t3);
    }

    _createClass(Matrix3x3, [{
      key: "make",
      value: function make(x1, x2, x3, y1, y2, y3, t1, t2, t3) {
        this.m[0] = x1 || 0.0;
        this.m[1] = x2 || 0.0;
        this.m[2] = x3 || 0.0;
        this.m[3] = y1 || 0.0;
        this.m[4] = y2 || 0.0;
        this.m[5] = y3 || 0.0;
        this.m[6] = t1 || 0.0;
        this.m[7] = t2 || 0.0;
        this.m[8] = t3 || 0.0;
      }
    }, {
      key: "copy",
      value: function copy(matrix3x3) {
        var m = matrix3x3.m;
        this.make(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]);
        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.m;
      }
    }, {
      key: "toString",
      value: function toString() {
        return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ';' + this.m[3] + ',' + this.m[4] + ',' + this.m[5] + ';' + this.m[6] + ',' + this.m[7] + ',' + this.m[8] + ')';
      }
    }, {
      key: "identity",
      value: function identity() {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "scale",
      value: function scale(vector2) {
        this.make(vector2.x, 0.0, 0.0, 0.0, vector2.y, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "rotate",
      value: function rotate(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "translate",
      value: function translate(vector2) {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, vector2.x, vector2.y, 1.0);
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(matrix3x3) {
        var m1 = this.m;
        var m2 = matrix3x3.m;
        this.make(m1[0] * m2[0] + m1[3] * m2[1] + m1[6] * m2[2], m1[1] * m2[0] + m1[4] * m2[1] + m1[7] * m2[2], m1[2] * m2[0] + m1[5] * m2[1] + m1[8] * m2[2], m1[0] * m2[3] + m1[3] * m2[4] + m1[6] * m2[5], m1[1] * m2[3] + m1[4] * m2[4] + m1[7] * m2[5], m1[2] * m2[3] + m1[5] * m2[4] + m1[8] * m2[5], m1[0] * m2[6] + m1[3] * m2[7] + m1[6] * m2[8], m1[1] * m2[6] + m1[4] * m2[7] + m1[7] * m2[8], m1[2] * m2[6] + m1[5] * m2[7] + m1[8] * m2[8]);
        return this;
      }
    }]);

    return Matrix3x3;
  }();

  var Matrix4x3 = /*#__PURE__*/function () {
    function Matrix4x3(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
      _classCallCheck(this, Matrix4x3);

      this.m = new Float32Array(16);
      this.xAxis = new Vector3();
      this.yAxis = new Vector3();
      this.zAxis = new Vector3();
      this.make(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3);
    }

    _createClass(Matrix4x3, [{
      key: "make",
      value: function make(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
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
      }
    }, {
      key: "copy",
      value: function copy(matrix4x3) {
        var m = matrix4x3.m;
        this.make(m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10], m[12], m[13], m[14]);
        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.m;
      }
    }, {
      key: "toString",
      value: function toString() {
        return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';' + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';' + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';' + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
      }
    }, {
      key: "identity",
      value: function identity() {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
        return this;
      }
    }, {
      key: "scale",
      value: function scale(vector3) {
        this.make(vector3.x, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0);
        return this;
      }
    }, {
      key: "rotateX",
      value: function rotateX(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(1.0, 0.0, 0.0, 0.0, cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0);
        return this;
      }
    }, {
      key: "rotateY",
      value: function rotateY(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, 0.0, -sin, 0.0, 1.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0);
        return this;
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, sin, 0.0, -sin, cos, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
        return this;
      }
    }, {
      key: "translate",
      value: function translate(vector3) {
        this.make(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, vector3.x, vector3.y, vector3.z);
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(matrix4x3) {
        var m1 = this.m;
        var m2 = matrix4x3.m;
        this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14]);
        return this;
      }
    }, {
      key: "lookAtRH",
      value: function lookAtRH(eye, target, up) {
        this.zAxis.copy(eye).subtract(target).normalize();
        this.xAxis.copy(up).cross(this.zAxis).normalize();
        this.yAxis.copy(this.zAxis).cross(this.xAxis);
        this.make(this.xAxis.x, this.yAxis.x, this.zAxis.x, this.xAxis.y, this.yAxis.y, this.zAxis.y, this.xAxis.z, this.yAxis.z, this.zAxis.z, -this.xAxis.dotProduct(eye), -this.yAxis.dotProduct(eye), -this.zAxis.dotProduct(eye));
        return this;
      }
    }]);

    return Matrix4x3;
  }();

  var Matrix4x4 = /*#__PURE__*/function () {
    function Matrix4x4(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
      _classCallCheck(this, Matrix4x4);

      this.m = new Float32Array(16);
      this.make(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4);
    }

    _createClass(Matrix4x4, [{
      key: "make",
      value: function make(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
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
      }
    }, {
      key: "copy",
      value: function copy(matrix4x4) {
        var m = matrix4x4.m;
        this.make(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.m;
      }
    }, {
      key: "toString",
      value: function toString() {
        return '(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ';' + this.m[4] + ',' + this.m[5] + ',' + this.m[6] + ',' + this.m[7] + ';' + this.m[8] + ',' + this.m[9] + ',' + this.m[10] + ',' + this.m[11] + ';' + this.m[12] + ',' + this.m[13] + ',' + this.m[14] + ',' + this.m[15] + ')';
      }
    }, {
      key: "identity",
      value: function identity() {
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "scale",
      value: function scale(vector3) {
        this.make(vector3.x, 0.0, 0.0, 0.0, 0.0, vector3.y, 0.0, 0.0, 0.0, 0.0, vector3.z, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "rotateX",
      value: function rotateX(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "rotateY",
      value: function rotateY(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, 0.0, -sin, 0.0, 0.0, 1.0, 0.0, 0.0, sin, 0.0, cos, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(angle) {
        var cos = Trigonometry.cosine(angle);
        var sin = Trigonometry.sine(angle);
        this.make(cos, sin, 0.0, 0.0, -sin, cos, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        return this;
      }
    }, {
      key: "translate",
      value: function translate(vector3) {
        this.make(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, vector3.x, vector3.y, vector3.z, 1.0);
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(matrix4x4) {
        var m1 = this.m;
        var m2 = matrix4x4.m;
        this.make(m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2], m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2], m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2], 0.0, m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6], m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6], m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6], 0.0, m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10], m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10], m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10], 0.0, m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12], m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13], m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14], 1.0);
        return this;
      }
    }, {
      key: "perspective",
      value: function perspective(fovy, aspect, znear, zfar) {
        var f = Math.tan(Trigonometry.halfpi - 0.5 * fovy * Trigonometry.pi / 180);
        var rangeInv = 1.0 / (znear - zfar);
        this.make(f / aspect, 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (znear + zfar) * rangeInv, -1.0, 0.0, 0.0, znear * zfar * rangeInv * 2, 0.0);
        return this;
      }
    }, {
      key: "orthographic",
      value: function orthographic(left, right, top, bottom, near, far) {
        var w = right - left;
        var h = top - bottom;
        var p = far - near;
        var x = (right + left) / w;
        var y = (top + bottom) / h;
        var z = (far + near) / p;
        this.make(2 / w, 0.0, 0.0, 0.0, 0.0, 2 / h, 0.0, 0.0, 0.0, 0.0, -2 / p, 0.0, -x, -y, -z, 1.0);
        return this;
      }
    }]);

    return Matrix4x4;
  }();

  exports.Bezier = Bezier;
  exports.Circle = Circle;
  exports.Matrix3x3 = Matrix3x3;
  exports.Matrix4x3 = Matrix4x3;
  exports.Matrix4x4 = Matrix4x4;
  exports.NumArray = NumArray;
  exports.Quaternion = Quaternion;
  exports.Random = Random;
  exports.Rectangle = Rectangle;
  exports.Time = Time;
  exports.Trigonometry = Trigonometry;
  exports.Utils = Utils;
  exports.Vector2 = Vector2;
  exports.Vector3 = Vector3;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
