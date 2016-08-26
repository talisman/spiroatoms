function Cog(x, y, orad, irad, n) {
  this.x = x;
  this.y = y;
  this.orad = orad;
  this.irad = irad;
  this.numofCogs = n;
  this.angle = 360.0 / this.numofCogs ;
  this.rotation = 0;
  this.rotationSpeed = floor(random(3, 8));

  this.update = function() {
    this.rotation = this.rotation + this.angle / this.rotationSpeed;
  }

  this.setPosition = function(x,y){
    this.x = x;
    this.y = y;
  }

  this.display = function() {
    push();
    smooth();
    translate(this.x, this.y);
    noFill();
    stroke(100, 100, 100, 50);
    strokeWeight(3);
    ellipse(0, 0, this.orad * 2, this.orad * 2);
    rotate(this.rotation);
    line(this.irad, 0, this.orad, 0);
    this.update();
    pop();
  }


}