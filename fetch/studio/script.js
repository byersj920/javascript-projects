window.addEventListener("load", function(){
    let container = document.getElementById('container')
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(response){
            let collection = response;
            console.log(collection);
            for (let i = 0; i < collection.length; i++){
                let skillSet = collection[i].skills;
                let prettySkills = [];
                let prettyActive = '';
                if (collection[i].active === true){
                    prettyActive = '<li style = "color: green">';
                } else {
                    prettyActive = '<li style = "color: red">';
                }
                for (let j = 0; j < skillSet.length; j++){
                    let newEntry = ` ${skillSet[j]}`;
                    prettySkills.push(newEntry);
                }
                sortedCollection = [];
                
                let astronautEntry = `<div class="astronaut">
                <div class="bio">
                    <h3>${collection[i].firstName} ${collection[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${collection[i].hoursInSpace}</li>
                    ${prettyActive}Active: ${collection[i].active}</li>
                    <li>Skills:${prettySkills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${collection[i].picture}">
            </div>`;
                container.innerHTML += astronautEntry;
            }
        });
    });
});