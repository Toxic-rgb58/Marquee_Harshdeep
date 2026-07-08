let arr = [1,2,3,5,3,2,1,8,9,0]
console.log(arr.reverse())
let res = arr.sort((a, b) => b - a)
console.log(res)

let arrOne = [1,2,3,4,5]
let arrTwo = [6,7,8,9,10]

let newArr = arrTwo.concat(arrOne)
console.log(newArr)

let bikes = ['Yamaha', 'Honda', 'Suzuki', 'KTM', 'Bajaj']
console.log(bikes)

const colors = ['red', 'green', 'blue'];

// Destructuring
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  
console.log(secondColor); 
console.log(thirdColor);


const user = ['Alice'];
const [name, role = 'Guest'] = user;

console.log(name); 
console.log(role);


let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); 
console.log(b);

const fruits = ['apple', 'banana', 'orange', 'grape'];

const [firstFruit, ...restOfFruits] = fruits;

console.log(firstFruit);
console.log(restOfFruits);

const matrix = [1, [2, 3], 4];
const [one, [two, three], four] = matrix;

console.log(two);  
console.log(three); 