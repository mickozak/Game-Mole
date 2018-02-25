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
  
function displayPoints(points){
    let pointsContainer = document.querySelector('.points');
    pointsContainer.innerText='Your points: ' + points;
} 
    
function displayTimes(timeParam){
    let timeContainer = document.querySelector('.time');
    timeContainer.innerText='Your time: ' + time;
}
