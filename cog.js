function Cog(x, y, orad, irad, n) {
  this.x = x;
  this.y = y;
  this.orad = orad;
  this.irad = irad;
  this.numofCogs = n;
  this.angle = 360.0 / this.numofCogs
  this.halfang = this.angle * 0.5;
  this.vrtx = [];
  //  println(this.rang);


  this.placevrtx = function() {
    for (var a = 0; a < 360; a += this.angle) {
      var vx = 0 + cos(a) * this.orad;
      var vy = 0 + sin(a) * this.orad;
      this.vrtx.push(vx);
      this.vrtx.push(vy);

      vx = 0 + cos(a + this.halfang) * this.irad;
      vy = 0 + sin(a + this.halfang) * this.irad;
      this.vrtx.push(vx);
      this.vrtx.push(vy);
    }
  }

  this.display = function() {
    push();
    smooth();
    translate(this.x, this.y);
    noFill();
    stroke(100, 100, 100, 50);
    strokeWeight(1);
    //ellipse(0, 0, 2 * this.orad + 8, 2 * this.orad + 8);
    //  ellipse(0, 0, 2*this.irad, 2*this.irad);
    strokeWeight(1);

    beginShape();
    for (var i = 0; i < this.vrtx.length; i += 2) {
      vertex(this.vrtx[i], this.vrtx[i + 1])
    }
    endShape(CLOSE);

  }


}