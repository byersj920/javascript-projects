// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let c = Math.round(2*Math.PI*radius);
  return c;
}

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, orbitalSpeed = 28000){
  let time = Math.round(orbitCircumference(radius)*numOrbits/orbitalSpeed*100)/100;
  return time;
 /*  console.log(`The mission will travel ${orbitCircumference(radius)} km around the planet, and it will take ${time} hours to complete.`);
 */}
missionDuration(5);
// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = function(idNumbers){
  return idNumbers[Math.floor(Math.random()*3)];
}
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];
// Code your oxygenExpended function here:

function objectExpanded(candObj){
  missionDuration(3)

  let oxygenUsed = Math.round(candObj.o2Used(missionDuration(3)*1000))/1000;

  return `${candObj.name} will perform the spacewalk, which will last ${missionDuration(3)} hours and require ${oxygenUsed}kg of oxygen.`
}

console.log(objectExpanded(selectRandomEntry(crew)));
 