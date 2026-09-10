// AP CSP - Unit 1, Lesson 4A
// Make the rocket fall
//
// landerY is the tip of the nose cone.
// Every other shape says how far BELOW the tip it sits -
// the same way the robot's eyes sat 25 above its head.

let landerY = 40;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(16, 26, 43);
  noStroke();

  // The pad does not move, so it has a fixed number
  fill(91, 107, 130);
  rect(200, 355, 300, 26);

  // 172 below the tip
  fill(255, 170, 60);
  ellipse(200, landerY + 172, 28, 18);

  // 156 below the tip
  fill(120, 130, 150);
  ellipse(200, landerY + 156, 44, 22);

  // 105 below the tip
  fill(214, 222, 235);
  rect(200, landerY + 105, 60, 90);

  // the tip itself, and its base 60 below
  fill(224, 74, 74);
  triangle(200, landerY, 230, landerY + 60, 170, landerY + 60);

  // 85 below the tip
  fill(90, 169, 230);
  circle(200, landerY + 85, 26);

  // 165 below the tip
  fill(154, 169, 189);
  rect(174, landerY + 165, 8, 30);
  rect(226, landerY + 165, 8, 30);

  // TODO: add one line here to make landerY grow

}

// Then try:
//   make it fall faster
//   make it fall slower
//   make it go up
