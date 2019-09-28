class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = [random(255), random(255), random(255)];
  }

  show() {
    strokeWeight(sizeSlider.value());
    stroke(this.color);
    point(this.x, this.y);
  }
}
