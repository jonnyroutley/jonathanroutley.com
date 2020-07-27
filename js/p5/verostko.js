// Initalise variables
let cycle = 0;
let limit = 1000;
// let fr = 20;
let targetDiv = document.getElementById("p5-container")
let divWidth = targetDiv.clientWidth
let octaveSlider;

function setup() {
    let canvas = createCanvas(divWidth, 500);
    canvas.parent('p5-container');
    canvas.mouseClicked(canvClick);
    background(245);
    let c = color(75, 129, 132, 50);
    stroke(c);  

    speedSlider = createSlider(1, 10, 1, 1);
    speedSlider.parent(targetDiv)
    // octaveSlider.position(canvas.x, canvas.y);
    speedSlider.style('width', '80px');
}

let x1,
    y1,
    x2,
    y2;
let t = 0;

function draw() {
    // frameRate(fr);
    let speed = speedSlider.value();
    noiseDetail(10, 0.05);

    for (let i = 0; i < speed; i++){
        x1 = map(noise(t, 1), 0, 1, width/4, width);
        y1 = map(noise(t, 2), 0, 1, 125, height);
        x2 = map(noise(t, 3), 0, 1, width/4, width);
        y2 = map(noise(t, 4), 0, 1, 125, height);
        line(x1, y1, x2, y2);
        t+=0.008;
    }
    if (cycle >= limit) {
        noLoop()
    }
    cycle ++
    
}

function mouseClicked(){
    cycle = 0;
    loop()
}
//click anywhere to continue current cycle
function canvClick() {
    clear();
    background(245);
    cycle = 0;
    loop();
}

