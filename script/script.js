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

function endGame(){
    clearInterval(gameIntervalID);
    mole.remove();
    
    document.querySelector('.end-modal .score').innerText='The game is over! Your result is:' + points + ' scores!';
    
    document.querySelector('.end-modal').style.display='block';
    
    document.querySelector('.end-modal button').addEventListener('click', function(){
        window.location=''
    })
    
}

function flashBackground(){ //zmiana koloru po uderzeniu kreta
        let body = document.querySelector('body');
        body.style.backgroundColor='red';
        
        setTimeout(function(){
            body.style.backgroundColor='green';
          
        },100)
    }    

function startGame(){
    mole=makeMole();
    gameIntervalID=setInterval(function(){
        mole.remove();
        mole=makeMole();
        reduceTime();
    }, 1000)
}

function init(){
    points=0;
    time=10;
    mole=null;
    
    displayPoints(points);
    displayTimes(time);
    
    document.querySelector('.start-modal button').addEventListener('click', function(){
        document.querySelector('.start-modal').style.display='none';
        startGame();
    })
}
    
init();
   
})()
