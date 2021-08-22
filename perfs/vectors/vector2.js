const Type6 = require('../../dist/type6.cjs');

console.log('test new Type6.Vector2(x,x)');
let vectorsA = [];
let vectorsB = []; // new Type6.Vector2(10,11);
let array = [6,6];
let startTime = new Date().getTime();
for (i = 0 ; i < 20000000 ; i++) {
    vectorsA.push(new Type6.Vector2());
}
let endTime = new Date().getTime();
let totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);

for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsB.push(new Type6.Vector2(i,i));
}


console.log('test Type6.Vector2.setFromScalar(x,x)');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].setFromScalar(vectorsB[i].x,vectorsB[i].y);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.setFromArray([x,x])');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].setFromArray(array);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.copy(vector)');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].copy(vectorsB[i]);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.setFromScalar(x)');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].setFromScalar(i);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.setFromScalar(null, y)');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].setFromScalar(null,i);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);