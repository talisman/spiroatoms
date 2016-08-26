var shapes = [];
var numOfShapes;
var cogs = [];
var gear;

function setup() {
  numOfShapes = 0;
  createCanvas(400, 400);
  angleMode(DEGREES);
  for (var i = 0; i < numOfShapes; i++) {
    cogs[i] = new Cog(random(width / 5, (width / 5) * 4), random(height / 5, (height / 5) * 4), random(40, 80), random(25, 50), floor(random(20, 40)));
  }


  colorMode(RGB, 255, 255, 255, 100);
  for (var j = 0; j < numOfShapes; j++) {
    shapes[j] = new atomShape(random(50, width - 50), random(50, height - 50), random(85, 150), random(5, 45), round(random(2, 6)) * 2);
  }

  gear = new gear(width / 2, height / 2, 80, 55, 40);

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
  //clear();
  gear.display();
  for (var j = 0; j < cogs.length; j++) {
    cogs[j].display();
  }
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