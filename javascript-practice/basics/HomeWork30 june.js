// Q1. Print numbers from 1 to 10 using a for loop.
for(let i = 0; i < 10; i++){
    console.log(i+1);
}

// Q2. Print numbers from 10 to 1 using a while loop.
let j = 10;
while(j >= 1){
    console.log(j);
    j--;
}

// Q3. Print even numbers from 1 to 20 using a for loop.
for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Q4. Print odd numbers from 1 to 15 using a while loop.
let k = 1;
while(k <= 15){
    if(k % 2 != 0){
        console.log(k);
    }
    k++;
}

// Q5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 ... 5 × 10 = 50).
for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// Q6. Find the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(`Sum of numbers from 1 to 100 is: ${sum}`);

//  by math 
let sumMath = (100 * (100 + 1)) / 2;
console.log(`Sum of numbers from 1 to 100 using math formula is: ${sumMath}`);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is odd or even.
let userInput = 5; 
for(let i = 1; i <= userInput; i++){
    if(i % 2 == 0){
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
