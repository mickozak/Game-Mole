(function(){
   
let mole;
let time;
let points;
let gameIntervalID;
    
function addPoint(){
    points++;
    displayPoints(points);
}
    
function reduceTime(){
    time--;
    displayTimes(time);
    if(time===0){
        endGame()
    }
}
