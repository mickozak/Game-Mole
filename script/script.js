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

function makeMole(){
    
    let molePosX = Math.round(Math.random()*(window.innerWidth-window.innerHeight/10));
    let molePosY = Math.round(Math.random()*(window.innerHeight-window.innerHeight/10));
    
    let mole = document.createElement('div');
    mole.classList.add('mole');
    
    mole.style.left = molePosX + 'px';
    mole.style.top = molePosY + 'px';
    
    mole.addEventListener('click',function(){
        mole.remove();
        addPoint();
        flashBackground();
    })
    
    document.querySelector('body').appendChild(mole);
    
    return mole;
    
} 
