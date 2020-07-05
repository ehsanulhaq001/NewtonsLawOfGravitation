function Planet(x, y, xv, yv, r, color) {
    this.x = x;
    this.y = y;
    this.xv = xv * scale;
    this.yv = yv * scale;
    this.r = r;
    this.m = Math.pow(this.r, 3);
    this.xa = 0;
    this.ya = 0;
    this.fx = 0;
    this.fy = 0;
    this.preFx = 0;
    this.preFy = 0;
    this.show = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    this.update = function() {
        this.fx = 0;
        this.fy = 0;
        for (let i = 0; i < planets.length; i++) {
            if (this != planets[i]) {
                this.fx += g * this.m * planets[i].m / Math.pow(dist(this, planets[i]), 2) * Math.sign(planets[i].x - this.x);
                this.fy += g * this.m * planets[i].m / Math.pow(dist(this, planets[i]), 2) * Math.sign(planets[i].y - this.y);
            }
            this.preFx = this.fx;
            this.preFy = this.fy;
        }
        this.xa = this.fx / this.m;
        this.ya = this.fy / this.m;
        this.x += this.xv;
        this.y += this.yv;
        this.xv += this.xa;
        this.yv += this.ya;
    }
}