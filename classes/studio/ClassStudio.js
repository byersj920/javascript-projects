//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
const CrewCanidate = require('./crewCanidate.js');

let bubba = new CrewCanidate ('Bubba Bear', '135kg', [88, 85, 90]);
let maltese = new CrewCanidate ('Merry Maltese', '1.5kg', [93, 88, 97]);
let gator = new CrewCanidate ('Glad Gator', '225kg', [75, 76, 62]);

console.log(bubba);
console.log(maltese);
console.log(gator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba.addScore(83);
console.log(bubba.scores);
console.log(maltese.average());

/* This code is used to boost old Gator boy up to accepted.*/
while (gator.status() != 'Accepted!'){
    gator.addScore(100);
}

/* Final printout */
console.log(`---------------Status Report!---------------
${bubba.name} earned an average of ${bubba.average()}% and has status: ${bubba.status()}
${maltese.name} earned an average of ${maltese.average()}% and has status: ${maltese.status()}
${gator.name} earned an average of ${gator.average()}% and has status: ${gator.status()}`)


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.