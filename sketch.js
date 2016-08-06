var shapes = [];
var numOfShapes;
var btn;
var cg;


function setup() {
  numOfShapes = 6;
  createCanvas(700, 700);
  angleMode(DEGREES);
  cg = new Gears(width / 2, height / 2, 160, 80, 40);

  colorMode(RGB, 255, 255, 255, 100);
  for (var j = 0; j < numOfShapes; j++) {
    shapes[j] = new atomShape(random(50, width - 50), random(50, height - 50), random(85, 150), random(5, 45), round(random(2, 6)) * 2);
  }
  var btn = createButton('A button');
}


function mousePressed() {
  for (var i = 0; i < shapes.length; i++) {
    if (shapes[i].beingClicked() == true) {
      shapes[i].clicked = true;
    } else {
      shapes[i].clicked = false;
    }
  }
}

function draw() {
  background(255);
  cg.display();
 
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].update();
    shapes[i].overlap = false;
    for (var j = 0; j < shapes.length; j++) {
      if (i != j) {
        if (shapes[i].intersectsWith(shapes[j])) {
          shapes[j].overlap = true;
          shapes[i].overlap = true;
        }
      }
    }
  }
}