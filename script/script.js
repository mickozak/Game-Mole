function Game(container) {
    this.points = 0
    this.time = 10
    this.mole = null
    this.gameIntervalId = null

    this.gameContainer = container

    this.pointsContainer = null
    this.timeContainer = null
    this.startModal = null
    this.endModal = null

    this.init()
}

Game.prototype.init = function () {
    this.makeUI()

    this.displayPoints('Your points: ' + this.points)
    this.displayTime('Your time: ' + this.time)


    this.startModal.querySelector('button')
        .addEventListener(
            'click',
            () => {
                this.startModal.style.display = 'none'
                this.startGame()
            }
        )
}

Game.prototype.makeUI = function () {
    this.gameContainer.classList.add('game')

    this.pointsContainer = document.createElement('div')
    this.pointsContainer.classList.add('points')

    this.timeContainer = document.createElement('div')
    this.timeContainer.classList.add('time')

    this.startModal = document.createElement('div')
    this.startModal.classList.add('modal')
    this.startModal.classList.add('start-modal')
    this.startModal.innerHTML = '<h4>Game Mole <br>Click to play!</h4><button>Play!</button>'

    this.endModal = document.createElement('div')
    this.endModal.classList.add('modal')
    this.endModal.classList.add('end-modal')
    this.endModal.innerHTML = '<h4>The game is over. <br>Your result is:</h4><h4 class="score"></h4><button>Restart!</button>'

    this.gameContainer.appendChild(this.pointsContainer)
    this.gameContainer.appendChild(this.timeContainer)
    this.gameContainer.appendChild(this.startModal)
    this.gameContainer.appendChild(this.endModal)

}

Game.prototype.addPoint = function () {
    this.points++
    this.displayPoints('Your points: ' + this.points)
}

Game.prototype.reduceTime = function () {
    this.time--
    this.displayTime('Your time: ' + this.time)
    if (this.time === 0) {
        this.endGame()
    }
}

Game.prototype.displayPoints = function (pointsParam) {
    this.pointsContainer.innerText = pointsParam
}


Game.prototype.displayTime = function (timeParam) {
    this.timeContainer.innerText = timeParam
}

Game.prototype.makeMole = function () {
    var molePosX = Math.round(Math.random() * (window.innerWidth - window.innerHeight / 10))
    var molePosY = Math.round(Math.random() * (window.innerHeight - window.innerHeight / 10))

    var mole = document.createElement('div')
    mole.classList.add('mole')
    mole.style.left = molePosX + 'px'
    mole.style.top = molePosY + 'px'

    mole.addEventListener(
        'click',
        () => {
            this.mole.remove()
            this.addPoint()
            this.flashBackground()
        }
    )

    this.gameContainer.appendChild(mole)

    return mole
}

Game.prototype.endGame = function () {
    clearInterval(this.gameIntervalId)
    this.mole.remove()

    this.endModal.querySelector('.score').innerText = this.points + ' points!'
    this.endModal.style.display = 'block'
    this.endModal.querySelector('button')
        .addEventListener(
            'click',
            () => {
                window.location = ''
            }
        )
}

Game.prototype.flashBackground = function () {
    this.gameContainer.style.backgroundColor = 'red'
    setTimeout(
        () => {
            this.gameContainer.style.backgroundColor = 'green'
        },
        100
    )
}

Game.prototype.startGame = function () {
    this.mole = this.makeMole()
    this.gameIntervalId = setInterval(
        () => {
            this.mole.remove()
            this.mole = this.makeMole()
            this.reduceTime()
        },
        1000
    )
}
