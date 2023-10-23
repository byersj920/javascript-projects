class CrewCanidate {
    constructor (name, mass, scores = []){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore (number){
        this.scores.push(number);
    }
    average(){
        let averageResult = 0;
        for (let i = 0; i < this.scores.length; i++){
            averageResult += this.scores[i];
        }
        averageResult = averageResult/this.scores.length;
        return Math.round(averageResult*10)/10;
    }
    status(){
        let statusCheck = this.average();
        let statusReport = '';
        if (statusCheck >= 90){
            statusReport = 'Accepted!';
        } else if (statusCheck >= 80){
            statusReport = 'Reserve';
        } else if (statusCheck >= 70){
            statusReport = 'Probitionary';
        } else{
            statusReport = 'Rejected';
        }
        return statusReport;
    }
}

module.exports = CrewCanidate;