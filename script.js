let force;
const g = 0.005;
let planets;
let planet;
let scale = 1;
let trail = document.querySelector("#trail");
window.onload = function() {
    start();
}

function start() {
    cnv = document.querySelector("#canvas");
    cnv.width = 4000;
    cnv.height = 4000;
    ctx = cnv.getContext("2d");
    cnv.style.backgroundColor = "rgba(0, 0, 0)";
    setup();
    setInterval(draw, 1000 / 50);
}

function setup() {
    setBackground();
    let n = 14;

    planets = new Array();
    let sun = 100;
    planets.push(new Planet(cnv.width / 2, 2000, 0, 0, sun, "yellow"));
    let sign = 1;
    for (let i = 1; i < n; i++) {
        let x = cnv.width / 2;
        let y = Math.floor(Math.random() * cnv.height);
        sign = Math.sign(2000 - y);
        let d = Math.sqrt(Math.pow(x - 2000, 2) + Math.pow(y - 2000, 2))
        let xv = sign * 10 / Math.sqrt(d / sun);
        let yv = 0;
        let r = Math.floor(Math.random() * 10) + 4;
        planet = new Planet(x, y, xv, yv, r, "blue");
        planets.push(planet);
    }
    sign = 1;
    for (let i = 1; i < n; i++) {
        let x = Math.floor(Math.random() * cnv.width);
        sign = Math.sign(2000 - x);
        let y = cnv.width / 2;
        let xv = 0;
        let d = Math.sqrt(Math.pow(x - 2000, 2) + Math.pow(y - 2000, 2))
        let yv = -sign * 10 / Math.sqrt(d / sun);
        let r = Math.ceil(Math.random() * 3) + 1;
        planet = new Planet(x, y, xv, yv, r, "red");
        planets.push(planet);
    }
}

function dist(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function draw() {
    trail = document.querySelector("#trail");
    if (trail.checked == false) {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        setBackground();
    }
    for (let i = 0; i < planets.length; i++) {
        planets[i].show();
        planets[i].update();

    }
    // if () {
    //     console.log("\n\n\n\n    ", dist(planets[0], planets[1]), "    \n\n\n\n    a")
    //     planets[0].fx = -planets[0].fx;
    //     planets[1].fx = -planets[1].fx;
    // }
}