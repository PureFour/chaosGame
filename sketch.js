//Main variables
let running = false;
let HIGTH = (WIDTH = 800);
let points = [];
let a, b, c, x, y;
let factor;
let fpsSlider, aSlider, bSlider, cSlider, sizeSlider, factorSlider;
let startButton;

function setup() {
  createCanvas(HIGTH, WIDTH);

  //Menu
  fpsSlider = createSlider(0, 60, 30, 1);
  fpsSlider.position(10, 10);
  fpsSlider.style("width", "110px");

  aSlider = createSlider(100, 500, 100, 1);
  aSlider.position(30, 180);
  aSlider.style("width", "100px");
  aSlider.style("rotate", "90");

  bSlider = createSlider(100, 500, 100, 1);
  bSlider.position(700, 180);
  bSlider.style("width", "100px");
  bSlider.style("rotate", "90");

  cSlider = createSlider(100, 700, 400, 1);
  cSlider.position(350, 750);
  cSlider.style("width", "100px");

  sizeSlider = createSlider(0, 5, 2, 1);
  sizeSlider.position(160, 10);
  sizeSlider.style("width", "50px");

  factorSlider = createSlider(1, 3, 2, 0.5);
  factorSlider.position(560, 10);
  factorSlider.style("width", "50px");

  startButton = createButton("Start chaos game");
  startButton.position(350, 50);
  startButton.mousePressed(startGame);
  //
  a = createVector(100, 100);
  b = createVector(700, 100);
  c = createVector(400, 700);
  x = y = 0;
  background(29, 32, 43);
}
function draw() {
  frameRate(fpsSlider.value());
  if (running) {
    addNewPoint();
    drawPoints();
  } else {
    background(29, 32, 43);
    textSize(15);
    text("Drawing speed", 10, 50);
    textSize(15);
    text("Particles size", 150, 50);
    textSize(15);
    text("Factor", 560, 50);
    updateStartingPoints();
    factor = factorSlider.value();
  }
}
function drawPoints() {
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }
}
function addNewPoint() {
  for (let i = 0; i < 100; i++) {
    let r = random([a, b, c]);
    switch (r) {
      case a:
        x = (a.x + x) / factor;
        y = (a.y + y) / factor;
        points.push(new Point(x, y));
        break;
      case b:
        x = (b.x + x) / factor;
        y = (b.y + y) / factor;
        points.push(new Point(x, y));
        break;
      case c:
        x = (c.x + x) / factor;
        y = (c.y + y) / factor;
        points.push(new Point(x, y));
        break;
      default:
        break;
    }
  }
}
function startGame() {
  running = true;
}
function updateStartingPoints() {
  a.y = aSlider.value();
  b.y = bSlider.value();
  c.x = cSlider.value();
  strokeWeight(10);
  stroke(0, 255, 0);
  point(a.x, a.y);
  point(b.x, b.y);
  point(c.x, c.y);
}
