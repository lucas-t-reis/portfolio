
// Canvas setup    
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var particles = [];
var num_particles = 200;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function setRandomColor() {

    var r = 0, g = 0, b = 0;
    while(r < 150 && g < 150 && b < 150) {

        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return "rgb(" + r + "," + g + "," + b + ")";
    

}
// Particle Object
var Particle = function () {
    
    // Initializing it in a random place in screen
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    // Random velocity
    this.Vx = Math.random() * 4 - 2;
    this.Vy = Math.random() * 4 - 2;
    this.Color = setRandomColor();
}

// Draw the particle on the @canvas
Particle.prototype.Draw = function (ctx) {
    ctx.fillStyle = this.Color;
    ctx.fillRect(this.x, this.y, 3,3);
}

// Update the particle position
Particle.prototype.Update = function() {
    
    this.x += this.Vx;
    this.y += this.Vy;

    if(this.x <= 0 || this.x >= canvas.width) this.Vx = -this.Vx;
    if(this.y <= 0 || this.y >= canvas.height) this.Vy = -this.Vy;
}

function animationLoop() {

        // Clear the board
        ctx.clearRect(0,0, canvas.width, canvas.height);

        for(var i = 0; i < num_particles; i++) {
            particles[i].Update();
            particles[i].Draw(ctx);
        }

        requestAnimationFrame(animationLoop)
}

// Let there be PARTICLES!!!
for(var i = 0; i < num_particles; i++)
    particles.push(new Particle());

animationLoop();