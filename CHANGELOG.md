Version 3.0.0-beta.2 (May 8th 2021)
-----------------------------
 * improved typings for Vector2 and Vector3 use with Typescript
 * improved performances

Version 3.0.0-beta.1 (May 7th 2021)
-----------------------------
 * improved typings for Vector2 and Vector3 use with Typescript

Version 3.0.0-beta.0 (May 5th 2021)
-----------------------------
 * Vector class:
    * Add isEqualTo(scalar) method
    * Fix Vector opposite method
    * improved performances
 * Vector2 class:
    * Add setFromScalar(), isEqualTo(), setFromRadian(), setFromDegree, setMinAxis(), setMaxAxis() methods
    * Delete set() and setFromAngle() methods
    * opposite() and absolute() methods now accept an axis name as parameter to set only this axis.
 * Vector3 class:
    * Add setFromScalar() and isEqualTo() method
    * Delete set() method
 * Circle class:
    * First parameter of set() method and constructor is now Radius.
    * Position parameters of constructor can be given as numbers, array, angle or Vector2
    * Delete set(), setPositionXY() and setPositionFromVector() methods 
    * Add setPosition(), setRadius() and setDiameter() methods
 * Rectangle class:
    * First parameters of constructor are now width and height.
    * Position parameters constructor can be given as numbers, array, angle or Vector2
    * setPosition() method now accept numbers, array, angle or Vector2
    * setSize() method now accept numbers, array, angle or Vector2
    * delete setPositionXY(), setPositionX(), setPositionFromVector() and setPositionY() methods
    * delete set(), setSizeXY(), setSizeX(), setSizeFromVector() and setSizeY() methods

Version 2.2.0 (September 06th 2020)
-----------------------------
 * Export Type6 as CommonJS module
 * Update Typescript to version 4
 * Automated Unit tests with Jest

Version 2.1.1 (August 30th 2020)
-----------------------------
 * Smaller package size
 * Vector Classes refactor

Version 2.1.0 (Augulst 29th 2020)
-----------------------------
 * Vector2 and Vector3 classes: 
    * delete setFromArray() method in 

Version 2.0.1 (May 13th 2020)
-----------------------------
 * Matrix4x3 class:
    * fix lookAtRH() method in 

Version 2.0.0 (May 09th 2020)
-----------------------------
 * New Matrix3x3 class
 * New website
 * New documentation

Version 1.1.0 (September 14th 2019)
-----------------------------
 * Added NumArray static class to work with array of numbers. Get min value, max value, sum, average...

Version 1.0.7 (September 13th 2019)
-----------------------------
 * millisecondToFramePerSecond() method in Time class returns the exact result instead of a rounded number.
 * framePerSecondToMillisecond() method in Time class returns the exact result instead of a rounded number.

Version 1.0.6 (June 01st 2019)
-----------------------------
 * Added contains() static method in Utils class.
 * Added contains() method in Rectangle class.
 * Added contains() method in Circle class.

Version 1.0.5 (April 02nd 2019)
-----------------------------
 * fixed declaration file.

Version 1.0.4 (March 21st 2019)
-----------------------------
 * Improved typings.

Version 1.0.3 (December 18th 2018)
-----------------------------
 * fixed declaration file.

Version 1.0.2 (December 17th 2018)
-----------------------------
 * fixed copy() method in Vector3 class.

Version 1.0.1 (October 07th 2018)
-----------------------------
 * Type6.js published on NPM at @lcluber/type6js.
 * Updated README.md with NPM installation procedure.

Version 1.0.0 (July 25th 2018)
-----------------------------
 * Stable library.
 * Comprehensive API.
 * Ready for production.
