function atomShape(x, y, d, h, n) {
  this.x = x;
  this.y = y;
  this.diameter = d;
  this.h = h;
  this.n = n;
  this.a = 0;
  this.tofill = true;
  this.col =  color(random(255),random(255),random(255),25);

  this.rotspeed = random(0.5,3);
  this.moveSpeed = random(1.0);


  this.display = function() {
    push();
    if (this.tofill == true){
      fill(this.col);
    }
    else {
      noFill();
    }
    translate(this.x, this.y);
    rotate(this.a);
    for (i = 0; i < this.n; i++) {
      rotate(i * (180.0 / this.n ));
      ellipse(0,0 , this.diameter, this.h)
    }
    pop();
    this.a = this.a +this.rotspeed;
  }

  this.update = function() {
    this.x = this.x + random(this.moveSpeed * -1 ,this.moveSpeed);
    this.y = this.y + random(this.moveSpeed * -1 ,this.moveSpeed);
  }
  //
  this.beingClicked = function(){
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.dia) {
     // change this to change color alpha to 1/3 of current alpha ;

   }
 }
//
  this.intersectsWith = function(anotherAtom){
    if (dist(this.x,this.y,anotherAtom.x,anotherAtom.y) < (( this.diameter * 0.5)  +  ( anotherAtom.diameter * 0.5))){
     return true;
    }
    else {
     return false;
    }
  }
}
