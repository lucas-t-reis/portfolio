
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

function drawPlayer() { ctx.drawImage(player.playerImg, player.x, player.y, 100, 100) }

function collision(dx, dy) {
    // Wall - rect width = collision at 500px
    // Wall - rect height = collision at 500px
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

    clear()
    drawPlayer()
    newPos()
    requestAnimationFrame(update)

}

// To fix the cost of changing direction, speed must increase twofold
function moveRight() { 
    let v = player.speed
    if(movementController.lastKey == "ArrowLeft") v = 2*v 
    player.dx += v
}
function moveLeft() {
    let v = player.speed
    if(movementController.lastKey == "ArrowRight") v = 2*v 
    player.dx -= v
}
function moveUp() {  
    let v = player.speed
    if(movementController.lastKey=="ArrowDown") v = 2*v
    player.dy -= v
}
function moveDown() { 
    let v = player.speed
    if(movementController.lastKey == "ArrowUp") v = 2*v
    player.dy += v 

}

var keyDown = function(e) {


    if(e.repeat) return
    console.log(e.key)
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

    console.log(e.key)
    switch(e.key){
        case 'ArrowRight':
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'ArrowDown':
         player.dx = 0
         player.dy = 0
         break
    }

    movementController.lastKey = e.key
}


update()

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)