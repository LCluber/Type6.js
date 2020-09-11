const type6 = require("../../dist/type6.cjs");

let vector1 = new type6.Vector2(2.0,2.2);
let vector2 = new type6.Vector2(1.0,1.0);
console.log(vector1.toString());
console.log(vector2.toString());
vector1.add(vector2);
console.log(vector1.toString());
console.log(type6.Utils.round(6.7, 0));
console.log(type6.Random.float(4, 10));
console.log(type6.Trigonometry.twopi);

let cosine = type6.Trigonometry.cosineEquation( 1, 3.14, 0, 0 );
let sine = type6.Trigonometry.sineEquation( 1, 3.14, 0, 0 );
console.log(cosine);
console.log(sine);

let circle = new type6.Circle( 0, 0, type6.Random.integer(100,200) );
circle.position.set(2,3).add(vector2);
console.log(circle);