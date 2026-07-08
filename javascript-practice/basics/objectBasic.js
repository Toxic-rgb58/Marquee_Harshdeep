let obj = {
    name: "mahi",
    age: 23,
    job: "Developer"
};
console.log(obj);

// constructor function

let obj1 = new Object();
obj1.name= "mahi",
obj1.age= 23,
obj1.job= "Developer"

console.log(obj1);

// Accessing Object Properties

let obj2 = { name: "mahi", age: 23 };

// Using Dot Notation
console.log(obj2.name);

// Using Bracket Notation
console.log(obj2["age"]);


let car = {
    "name" : "DOGE",
    "model"  : "2024",
    "color" : "Black"
}
console.log(car.name);
console.log(car["model"]);
console.log(car.color);
console.log(car["color"]);
console.log(car["model"]);
console.log(car.model);

// updating Object Properties

car.name = "Tesla";
car["model"] = "2025";
console.log(car.name);
console.log(car.model);

// Adding New Properties to an Object

car.price = "$50,000";
car["warranty"] = "5 years";
console.log(car.price);
console.log(car.warranty);

// Deleting Properties from an Object

delete car.color;
delete car["warranty"];
console.log(car.color); 
console.log(car.warranty); 
