let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){
     return Math.round(Math.random()*10)}
   };
let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){
      return Math.round(Math.random()*10)}
   };

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){
     return Math.round(Math.random()*10)}
   };

let ultraPup = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){
      return Math.round(Math.random()*10)}
   };

let littleGuy = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){
      return Math.round(Math.random()*10)}
   };
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

let crew = [superChimpOne, salamander, superChimpTwo, ultraPup, littleGuy];

let report = function(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}. They took ${animal.move()} steps today.`);
};

crew.map(report);

let fitnessTest = function (arr){
   let theResults = [];
   let stepCount = 0;
   let turnCount = 0;
   for (let i = 0; i < arr.length; i++){
      stepCount = 0;
      turnCount = 0;
      while (stepCount < 20){
         turnCount += 1;
         stepCount = stepCount + (arr[i].move());
      }
      theResults.push(`${arr[i].name} took ${turnCount} turns to take 20 steps.`);
   }
   return theResults;
};

let raceStart = function(arr){
   let raceResults = fitnessTest(arr);
   for (let i = 0; i < arr.length; i++){
      console.log(raceResults[i]);
   }
};
console.log("----------Let's Race!!!----------");
raceStart(crew);