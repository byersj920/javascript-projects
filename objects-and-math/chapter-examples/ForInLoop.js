let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne){
   console.log(`${item}: ${tortoiseOne[item]}`);
}

console.log(Math.round(-3.51));
console.log(Math.trunc(-3.87));

let num = Math.floor(Math.random()*10);

console.log(num);
console.log(Math.random());
console.log(Math.round(0.1));