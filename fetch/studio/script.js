window.addEventListener("load", function(){
    let container = document.getElementById('container')
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(response){
            let collection = response;
            console.log(collection);
            for (let i = 0; i < collection.length; i++){
                let astronautEntry = `<div class="astronaut">
                <div class="bio">
                    <h3>${collection[i].firstName} ${collection[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${collection[i].hoursInSpace}</li>
                    <li>Active: ${collection[i].active}</li>
                    <li>Skills: ${collection[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${collection[i].picture}">
            </div>`;
                container.innerHTML += astronautEntry;
            }
        });
    });
});