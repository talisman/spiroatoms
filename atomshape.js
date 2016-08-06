function atomShape(x, y, d, h, n) {
  this.x = x;
  this.y = y;
  this.dia = d;
  this.h = h;
  this.n = n;
  this.a = 0;
  this.overlap = false;
  this.clicked = false;
  this.col = color(random(255), random(255), random(255), 25);

  this.rotspeed = random(0.5, 3);
  this.moveSpeed = random(1.0);




  this.display = function() {
    push();
    smooth();
    /*
    if overlap -> display with this grey stroke , fill half 
      else if clicked -> display with wide stroke regular fill
        else -> display this stroke regular fill
    */
    if (this.overlap)
      {
        stroke(100,100,100,50);
        strokeWeight(1);
        fill(red(this.col),green(this.col),blue(this.col),alpha(this.col)*0.5);
      }
      else if (this.clicked){
        stroke(0,0,0,50);
        strokeWeight(3);
        fill(this.col);
      }
      else
        { 
          fill(this.col);
          stroke(0,0,0,100);
          strokeWeight(1);
        }
    translate(this.x, this.y);
    rotate(this.a);
    for (i = 0; i < this.n; i++) {
      rotate( 180.0 / this.n);
      ellipse(0, 0, this.dia, this.h)
    }
    pop();
    this.a = this.a + this.rotspeed;
  }

  this.update = function() {
      this.x = this.x + random(this.moveSpeed * -1, this.moveSpeed);
      this.y = this.y + random(this.moveSpeed * -1, this.moveSpeed);
    }
    //

  this.beingClicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.dia) {
      return true;
    } else {
      return false;
    }
  }
  this.intersectsWith = function(anotherAtom) {
    if (dist(this.x, this.y, anotherAtom.x, anotherAtom.y) < ((this.dia * 0.5) + (anotherAtom.dia * 0.5))) {
      return true;
    } else {
      return false;
    }
  }
}