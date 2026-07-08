// At the Beginning
let a = [10, 20, 30, 40];
let e = 50;
a.unshift(e);
console.log(a);

// At the End
let a = [10, 20, 30, 40];
let e = 50;
a.push(e);
console.log(a);

// At a Given Position
let a = [10, 20, 30, 40];
let pos = 2;
let e = 50;
a.splice(pos, 0, e);
console.log(a);

// Multiple Elements
let a = [10, 20, 30, 40];
let pos = 2;
let e1 = 50, e2 = 60;
a.splice(pos, 0, e1, e2);
console.log(a);

// Delete from the Beginning of JS Array
let a = [10, 20, 30, 40];
let res = a.shift();
console.log(res);

// Delete from a Given Position in a JS Array
let a = [10, 20, 30, 40];
let idx = 2;
let res = a.splice(idx, 1);
console.log(res);

// Delete an Element from the End of a JS Array
let a = [10, 20, 30, 40];
let res = a.pop();
console.log(res);

// Delete First Occurrence from a JS Array
let a = [10, 20, 30, 20, 40];
let x = 20;
let idx = a.indexOf(x);
if (idx !== -1) {
  a.splice(idx, 1);
}
console.log(a);

// Delete last Occurrence from a JS Array
let a = [10, 20, 30, 20, 40];
let x = 20;
let idx = a.lastIndexOf(x);
if (idx !== -1) {
  a.splice(idx, 1);
}
console.log(a);

// Delete all Occurrences in a JS Array
let a = [10, 20, 30, 20, 40];
let x = 20;
let res = a.filter(e => e !== x);
console.log(res);

