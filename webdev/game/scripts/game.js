
// Canvas setup
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// Setting up structures
const player =  {

    playerImg: document.getElementById('player'),
    x: 50,
    y: 50,
    speed: 4,
    dx: 0,
    dy: 0

}

const movementController = {
    lastKey: "x"
}

function drawPlayer() { 
    player.playerImg.style.right = player.x + "px;"
 }

function collision(dx, dy) {

    if(player.x <= 0 || player.x >=500 || player.y <= 0 || player.y >= 500) {
        player.x -= dx;
        player.y -= dy;
    }
} 

function newPos() {

    player.x += player.dx;
    player.y += player.dy;

    collision(player.dx, player.dy)
}


function clear() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

function update() {

   // clear()
    newPos()
    drawPlayer()
    requestAnimationFrame(update)

}

// To fix the cost of changing direction, speed must increase twofold
function moveRight() { player.dx += player.speed }
function moveLeft() { player.dx -= player.speed }
function moveUp() { player.dy -= player.speed }
function moveDown() { player.dy += player.speed }

var keyDown = function(e) {

    if(e.repeat) return
    switch(e.key){
        case 'ArrowRight':
        moveRight()
        break
        case 'ArrowLeft':
        moveLeft()
        break
        case 'ArrowUp':
        moveUp()
        break
        case 'ArrowDown':
        moveDown()
        break
    }
}

var keyUp = function(e) {

    switch(e.key){
        case 'ArrowRight':
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'ArrowDown':
            player.dx = 0
            player.dy = 0
            break
    }
}

update()

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)