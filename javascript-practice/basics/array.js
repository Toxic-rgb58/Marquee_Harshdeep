// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);

// console.log(animals);


// animals.push("chickens", "cats", "dogs");
// console.log(animals);

// Task 2 push() pop() shift() unshift() methods



// const num = [1, 2, 3, 4, 5];
// const count = num.push(6);
// console.log(count);

// console.log(num);
// console.log("pushing elements 7, 8, 9 to the array");
// num.push(7, 8, 9);
// console.log(num);
// console.log("removing last element from the array");
// num.pop();
// console.log(num);
// console.log("removing first element from the array from shift method");
// num.shift();
// console.log(num);
// console.log("adding 0 to the beginning of the array from unshift method");
// num.unshift(0);
// console.log(num);


// console.log("to check if the array contains 5 or not");

// if(num.includes(5)){
//     console.log("array contains 5");
// } else {
//     console.log("array does not contain 5");
// }


// TASK 3 includes() method



// const array = [1, 2, 3];
// console.log(array.includes(2));

// const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("cat"));
// console.log(pets.includes("at"));

// includes(searchElement)
// includes(searchElement, fromIndex)


// TASK 4 slice() method

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));

// console.log(animals.slice(2, 4));

// console.log(animals.slice(1, 5));

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());

// Task 5 splice() method

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");

// console.log(months);


// months.splice(4, 1, "May");
// console.log(months);


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// TASK 6 forEach() method

// const array = ["a", "b", "c"];
// array.forEach((element) => console.log(element));

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);

// forEach is synchronous: When you pass an async function to forEach, 
// it does not pause for the await. It kicks off the first loop iteration,
//  hits the await, pauses only that specific callback instance,
//   and immediately jumps to the second iteration.Race condition on sum:
//    Because none of the iterations have finished yet,
//     the variable sum is still 0 for all three loops.
//      They all calculate 0 + rating around the exact same time.Early log: 
//      The forEach loop completes its execution instantly, 
//      and console.log(sum) runs while the async functions are still sitting in the
//       microtask queue. At that microsecond, sum is still 0.

// forEach(callbackFn)
// forEach(callbackFn, thisArg)



// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));


// MAP 

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const keysArray = kvArray.map(({ key }) => key);

console.log(keysArray);