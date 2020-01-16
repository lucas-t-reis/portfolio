
// Canvas setup
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// Loading resources
const playerImg = document.getElementById('player')
// Setting up structures
const player =  {
    x: 50,
    y: 50,
    speed: 4,
    dx: 0,
    dy: 0
}
//ctx.font = '30px Arial';
//ctx.fillText('Testing grounds', 250, 250);

function drawPlayer() { ctx.drawImage(playerImg, player.x, player.y, 100, 100) }

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

function moveRight() { player.dx += player.speed }
function moveLeft() { player.dx -= player.speed }
function moveUp() {  player.dy -= player.speed }
function moveDown() { player.dy += player.speed }

var keyDown = function(e) {

    console.log(e.key);
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