function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

   button.addEventListener('click', function(){
    paragraph.innerHTML = "Houston! We have liftoff!";
   });

   missionAbort.addEventListener('mouseover', function (){
    missionAbort.style.backgroundColor = 'red';
   });
    missionAbort.addEventListener('mouseleave', function(){
        missionAbort.style.backgroundColor = '';
    });
    missionAbort.addEventListener('click', function(){
        response = window.confirm("Are you sure you want to abort the mission?? This might be kinda bad...");
        if (response === true){
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home...'
        }
    });
}

window.addEventListener("load", init);
