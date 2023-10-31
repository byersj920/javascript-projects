// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){

let takeOffButton = document.getElementById("takeoff");
let shuttleHeight = document.getElementById('spaceShuttleHeight');
let shuttleBackground = document.getElementById('shuttleBackground');
let flightStatus = document.getElementById('flightStatus');
let rocket = document.getElementById('rocket');
rocket.style.position = 'absolute';
let rocketBottomDefault = 0;
let rocketLeftDefault = 255;
rocket.style.bottom = rocketBottomDefault + 'px';
rocket.style.left = rocketLeftDefault + 'px';

takeOffButton.addEventListener('click', function(){
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmation === true){
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground.style.backgroundColor = 'blue';
        shuttleHeight.innerHTML = 10000;
    }
});

let landingButton = document.getElementById('landing');
landingButton.addEventListener('click', function(){
let confirmationLand = window.confirm("Are you ready to land?");
if (confirmationLand === true){
    flightStatus.innerHTML = 'Shuttle has landed';
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;
}
});


let abortButton = document.getElementById('missionAbort');
abortButton.addEventListener('click', function(){
let abortConfirm = window.confirm('Are you sure you want to abort the mission???');
if (abortConfirm === true){
    flightStatus.innerHTML = 'Abort Mission';
    shuttleBackground.style.backgroundColor = 'red';
    shuttleHeight.innerHTML = 0;
}
});

let upButton = document.getElementById('up');
let downButton = document.getElementById('down');
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');

upButton.addEventListener('click', function(){
shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
rocketBottomDefault += 10;
rocket.style.bottom = rocketBottomDefault + 'px';
});

downButton.addEventListener('click', function(){
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    rocketBottomDefault -= 10;
    rocket.style.bottom = rocketBottomDefault + 'px';
});

rightButton.addEventListener('click', function(){
    rocketLeftDefault += 10;
    rocket.style.left = rocketLeftDefault + 'px';
});

leftButton.addEventListener('click', function(){
    rocketLeftDefault -= 10;
    rocket.style.left = rocketLeftDefault + 'px';
});















});