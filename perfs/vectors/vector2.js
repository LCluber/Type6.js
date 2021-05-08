const Type6 = require('../../dist/type6.cjs');

console.log('test new Type6.Vector2(x,x)');
let vectorsA = [];
let vectorsB = [];
let array = [6,6];
let startTime = new Date().getTime();
for (i = 0 ; i < 10000000 ; i++) {
    vectorsA.push(new Type6.Vector2(i,i));
}
let endTime = new Date().getTime();
let totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);

for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsB.push(new Type6.Vector2(i+4,i+4));
}

console.log('test Type6.Vector2.set(x,x)');
startTime = new Date().getTime();
for (i = 0, j = 1 ; i < vectorsA.length ; i++, j++) {
    vectorsA[i].set(j,j);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);

console.log('test Type6.Vector2.set([x,x])');
startTime = new Date().getTime();
for (i = 0, j = 1 ; i < vectorsA.length ; i++, j++) {
    vectorsA[i].set(array);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.set(vector)');
startTime = new Date().getTime();
for (i = 0 ; i < vectorsA.length ; i++) {
    vectorsA[i].set(vectorsB[i]);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.set(x)');
startTime = new Date().getTime();
for (i = 0, j = 1 ; i < vectorsA.length ; i++, j++) {
    vectorsA[i].set(i);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);


console.log('test Type6.Vector2.set(null, x)');
startTime = new Date().getTime();
for (i = 0, j = 1 ; i < vectorsA.length ; i++, j++) {
    vectorsA[i].set(null,i);
}
endTime = new Date().getTime();
totalTime = Type6.Time.millisecToSec(endTime - startTime);
console.log(totalTime);