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

        if (!isFinite(v)) {
          return v;
        }

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

        if (Trigonometry.sineDecimals <= 2 && angle < 0.28 && angle > -0.28) {
          return angle;
        } else {
          return this.taylorSerie(3, Trigonometry.sineLoops[this.sineDecimals], angle, angle, true);
        }
      }
    }, {
      key: "cosine",
      value: function cosine(angle) {
        angle = this.normalizeRadian(angle);
        var squaredAngle = angle * angle;

        if (this.cosineDecimals <= 2 && angle <= 0.5 && angle >= -0.5) {
          return 1 - squaredAngle * 0.5;
        } else {
          return this.taylorSerie(2, Trigonometry.cosineLoops[this.cosineDecimals], 1, angle, true);
        }
      }
    }, {
      key: "arctan2",
      value: function arctan2(x, y) {
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
      }
    }, {
      key: "arctan",
      value: function arctan(angle) {
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
      key: "isPositive",
      value: function isPositive() {
        return this.compareAxes('<=', 0);
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(scalar) {
        return this.compareAxes('!==', scalar);
      }
    }, {
      key: "isOrigin",
      value: function isOrigin() {
        return this.compareAxes('!==', 0);
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var array = [];

        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            array.push(this[axis]);
          }
        }

        return array;
      }
    }, {
      key: "toString",
      value: function toString() {
        var str = '(';

        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            str += "".concat(axis, " = ").concat(this[axis], " ; ");
          }
        }

        return str.slice(0, -2) + ')';
      }
    }, {
      key: "origin",
      value: function origin() {
        return this.updateAxes('=', 0.0);
      }
    }, {
      key: "getMagnitude",
      value: function getMagnitude() {
        var square = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var squaredMagnitude = this.getSquaredMagnitude();
        return square ? squaredMagnitude : Math.sqrt(squaredMagnitude);
      }
    }, {
      key: "getSquaredMagnitude",
      value: function getSquaredMagnitude() {
        var squaredMagnitude = 0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            squaredMagnitude += Math.pow(this[axis], 2);
          }
        }

        return squaredMagnitude;
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
        return this.updateAxesByVector('+=', vector, null);
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(vector, scalar) {
        return this.updateAxesByVector('+=', vector, scalar);
      }
    }, {
      key: "addScalar",
      value: function addScalar(scalar) {
        return this.updateAxes('+=', scalar);
      }
    }, {
      key: "subtract",
      value: function subtract(vector) {
        return this.updateAxesByVector('-=', vector, null);
      }
    }, {
      key: "subtractScaledVector",
      value: function subtractScaledVector(vector, scalar) {
        return this.updateAxesByVector('-=', vector, scalar);
      }
    }, {
      key: "subtractScalar",
      value: function subtractScalar(scalar) {
        return this.updateAxes('-=', scalar);
      }
    }, {
      key: "multiply",
      value: function multiply(vector) {
        return this.updateAxesByVector('*=', vector, null);
      }
    }, {
      key: "multiplyScaledVector",
      value: function multiplyScaledVector(vector, scalar) {
        return this.updateAxesByVector('*=', vector, scalar);
      }
    }, {
      key: "scale",
      value: function scale(scalar) {
        return this.updateAxes('*=', scalar);
      }
    }, {
      key: "divide",
      value: function divide(vector) {
        return this.updateAxesByVector('/=', vector, null);
      }
    }, {
      key: "divideScaledVector",
      value: function divideScaledVector(vector, scalar) {
        return this.updateAxesByVector('/=', vector, scalar);
      }
    }, {
      key: "halve",
      value: function halve() {
        return this.updateAxes('*=', 0.5);
      }
    }, {
      key: "max",
      value: function max(vector) {
        return this.updateAxesWithMathByVector(vector, 'max');
      }
    }, {
      key: "min",
      value: function min(vector) {
        return this.updateAxesWithMathByVector(vector, 'min');
      }
    }, {
      key: "maxScalar",
      value: function maxScalar(scalar) {
        return this.updateAxesWithMath(scalar, 'max');
      }
    }, {
      key: "minScalar",
      value: function minScalar(scalar) {
        return this.updateAxesWithMath(scalar, 'min');
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var length = this.getMagnitude();

        if (length && length != 1) {
          this.scale(1 / length);
        }

        return this;
      }
    }, {
      key: "absolute",
      value: function absolute(a) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            if (!a || a === axis) {
              this[axis] = Math.abs(this[axis]);
            }
          }
        }

        return this;
      }
    }, {
      key: "opposite",
      value: function opposite(a) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            if (!a || a === axis) {
              this[axis] = -this[axis];
            }
          }
        }

        return this;
      }
    }, {
      key: "dotProduct",
      value: function dotProduct(vector) {
        var dotProduct = 0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
            dotProduct += this[axis] * vector[axis];
          }
        }

        return dotProduct;
      }
    }, {
      key: "setFromArray",
      value: function setFromArray(array) {
        var i = 0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis) && array.length > i) {
            this[axis] = array[i];
          }

          i++;
        }
      }
    }, {
      key: "copy",
      value: function copy(vector) {
        this.updateAxesByVector('=', vector, null);
      }
    }, {
      key: "compareAxes",
      value: function compareAxes(operator, value) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            if (this[operator](axis, value)) {
              return false;
            }
          }
        }

        return true;
      }
    }, {
      key: "updateAxes",
      value: function updateAxes(operator, scalar) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            this[operator](axis, scalar);
          }
        }

        return this;
      }
    }, {
      key: "updateAxesByVector",
      value: function updateAxesByVector(operator, vector, scalar) {
        scalar = scalar !== null && scalar !== void 0 ? scalar : 1.0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
            this[operator](axis, vector[axis] * scalar);
          }
        }

        return this;
      }
    }, {
      key: "updateAxesWithMath",
      value: function updateAxesWithMath(scalar, operator) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            this[axis] = Math[operator](this[axis], scalar);
          }
        }

        return this;
      }
    }, {
      key: "updateAxesWithMathByVector",
      value: function updateAxesWithMathByVector(vector, operator) {
        for (var axis in this) {
          if (this.hasOwnProperty(axis) && vector.hasOwnProperty(axis)) {
            this[axis] = Math[operator](this[axis], vector[axis]);
          }
        }

        return this;
      }
    }, {
      key: '<=',
      value: function _(axis, value) {
        return this[axis] <= value;
      }
    }, {
      key: '!==',
      value: function _(axis, value) {
        return this[axis] !== value;
      }
    }, {
      key: '=',
      value: function _(axis, value) {
        this[axis] = value;
      }
    }, {
      key: '+=',
      value: function _(axis, value) {
        this[axis] += value;
      }
    }, {
      key: '-=',
      value: function _(axis, value) {
        this[axis] -= value;
      }
    }, {
      key: '*=',
      value: function _(axis, value) {
        this[axis] *= value;
      }
    }, {
      key: '/=',
      value: function _(axis, value) {
        this[axis] /= value;
      }
    }]);

    return Vector;
  }();

  /*
  MIT License

  Copyright (c) 2009 DWTechs

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  https://github.com/DWTechs/CheckHard.js
  */
  function isNumeric(number) {
    return !isNaN(number - parseFloat(number));
  }

  function getTag(tag) {
    if (tag == null) {
      return tag === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(tag);
  }

  function isNumber(number, typeCheck) {
    if (typeCheck === void 0) {
      typeCheck = true;
    }

    if (isSymbol(number)) {
      return false;
    }

    return typeCheck ? Number(number) === number : isNumeric(number);
  }

  function isSymbol(sym) {
    var type = typeof sym;
    return type == 'symbol' || type === 'object' && sym != null && getTag(sym) == '[object Symbol]';
  }

  function isArray(array, length) {
    return !isNil(array) && array.constructor === Array && (length ? array.length === length : true);
  }

  function isObject(object) {
    return object !== null && typeof object === "object" && !isArray(object);
  }

  function isNil(nil) {
    return nil == null;
  }

  var Vector2 = /*#__PURE__*/function (_Vector) {
    _inherits(Vector2, _Vector);

    var _super = _createSuper(Vector2);

    function Vector2(x, y) {
      var _this;

      _classCallCheck(this, Vector2);

      _this = _super.call(this);
      _this.x = 0.0;
      _this.y = 0.0;

      _this.set(x, y);

      return _this;
    }

    _createClass(Vector2, [{
      key: "set",
      value: function set(x, y) {
        if (isNumber(x) || isNumber(y)) {
          this.setAxis(x, y);
        } else if (isArray(x, 2)) {
          this.setFromArray(x);
        } else if (isObject(x)) {
          this.copy(x);
        }

        return this;
      }
    }, {
      key: "setFromRadian",
      value: function setFromRadian(angle) {
        if (angle) {
          var length = this.getMagnitude();
          this.x = Trigonometry.cosine(angle) * length;
          this.y = Trigonometry.sine(angle) * length;
        }

        return this;
      }
    }, {
      key: "setFromDegree",
      value: function setFromDegree(angle) {
        if (angle) {
          angle = Trigonometry.degreeToRadian(angle);
          this.setFromRadian(angle);
        }

        return this;
      }
    }, {
      key: "setMinAxis",
      value: function setMinAxis(scalar) {
        if (this.y < this.x) {
          this.y = scalar;
        } else {
          this.x = scalar;
        }

        return this;
      }
    }, {
      key: "setMaxAxis",
      value: function setMaxAxis(scalar) {
        if (this.y > this.x) {
          this.y = scalar;
        } else {
          this.x = scalar;
        }

        return this;
      }
    }, {
      key: "setOppositeAxis",
      value: function setOppositeAxis(axis, value) {
        if (axis === 'y') {
          this.x = value;
        } else {
          this.y = value;
        }

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
    }, {
      key: "setAxis",
      value: function setAxis(x, y) {
        var i = 0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            if (isNumber(arguments[i])) {
              this[axis] = arguments[i];
            }

            i++;
          }
        }
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
        return new Circle(this.radius, this.position);
      }
    }, {
      key: "copy",
      value: function copy(circle) {
        this.position.set(circle.position);
        this.radius = circle.radius;
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(positionX, positionY) {
        this.position.set(positionX, positionY);
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
        return new Rectangle(this.size.x, this.size.y, this.position);
      }
    }, {
      key: "copy",
      value: function copy(rectangle) {
        this.setSize(rectangle.size);
        this.setPosition(rectangle.position);
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(positionX, positionY) {
        this.position.set(positionX, positionY);
        this.setCorners();
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.size.set(width, height);
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
        this.topLeftCorner.set(this.position).subtract(this.halfSize);
        this.bottomRightCorner.set(this.position).add(this.halfSize);
      }
    }, {
      key: "setHalfSize",
      value: function setHalfSize() {
        this.halfSize.set(this.size).halve();
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

      _this.set(x, y, z);

      return _this;
    }

    _createClass(Vector3, [{
      key: "set",
      value: function set(x, y, z) {
        if (isNumber(x) || isNumber(y) || isNumber(z)) {
          this.setAxis(x, y, z);
        } else if (isArray(x, 3)) {
          this.setFromArray(x);
        } else if (isObject(x)) {
          this.copy(x);
        }

        return this;
      }
    }, {
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
    }, {
      key: "setAxis",
      value: function setAxis(x, y, z) {
        var i = 0;

        for (var axis in this) {
          if (this.hasOwnProperty(axis)) {
            if (isNumber(arguments[i])) {
              this[axis] = arguments[i];
            }

            i++;
          }
        }
      }
    }]);

    return Vector3;
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
        this.zAxis.set(eye).subtract(target).normalize();
        this.xAxis.set(up).cross(this.zAxis).normalize();
        this.yAxis.set(this.zAxis).cross(this.xAxis);
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
