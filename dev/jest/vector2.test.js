const Type6 = require('../../dist/type6.cjs');

let vector1 = new Type6.Vector2(2.0,2.2);
let vector2 = new Type6.Vector2(1.0,3.0);

test("vector1 values", () => {
  expect(vector1.x).toBe(2.0);
  expect(vector1.y).toBe(2.2);
});

test("vector2 values", () => {
  expect(vector2.x).toBe(1.0);
  expect(vector2.y).toBe(3.0);
});

test("vector1 + vector2 =", () => {
  vector1.add(vector2);
  expect(vector1.x).toBe(3.0);
  expect(vector1.y).toBe(5.2);
});

test("vector1 isOrigin = false", () => {
  expect(vector1.isOrigin()).toBe(false);
});

test("vector1 isOrigin = true", () => {
  vector1.origin();
  expect(vector1.isOrigin()).toBe(true);
});

test("vector1 to be (1,1)", () => {
  vector1.setScalar(1.0,1.0);
  expect(vector1.x).toBe(1.0);
  expect(vector1.y).toBe(1.0);
});

test("vector2 = vector1", () => {
  vector2.copy(vector1);
  expect(vector2.x).toBe(1.0);
  expect(vector2.y).toBe(1.0);
});

test("vector1.y = 0", () => {
  vector1.y = 0;
  expect(vector1.y).toBe(0);
});

test("vector1 squaredMagnitude = 1", () => {
  let squaredMagnitude = vector1.getMagnitude(true);
  expect(squaredMagnitude).toBe(1);
});

test("vector1 magnitude = 1", () => {
  let magnitude = vector1.getMagnitude(false);
  expect(magnitude).toBe(1);
});