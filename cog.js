function cog(x, y, orad, irad, n) {
  this.x = x;
  this.y = y;
  this.orad = orad;
  this.irad = irad;
  this.numofCogs = n;
  this.rang = 360.0 / this.numofCogs
//  println(this.rang);

  this.display = function() {
    push();
    smooth();
    //
    translate(this.x, this.y);
    noFill();
    stroke(100, 100, 100, 50);
    strokeWeight(1);
    ellipse(0, 0, 2*this.orad + 8, 2*this.orad + 8);
   // ellipse(0, 0, 2*this.irad, 2*this.irad);

    var angle = 360 / this.numofCogs;
    var halfAngle = angle/2.0;
    strokeWeight(3);
    beginShape();
    for (var a = 0; a < 360; a += angle) {
      var sx = 0 + cos(a) * this.orad;
      var sy = 0 + sin(a) * this.orad;
      vertex(sx, sy);
      sx = 0 + cos(a+halfAngle) * this.irad;
      sy = 0 + sin(a+halfAngle) * this.irad;
      vertex(sx, sy);
    }
     endShape(CLOSE);


    /*
    beginShape()


    for (i = 0; i < this.numofCogs; i++) {
      rotate(360.0 / (2 * this.numofCogs));
        vertex(0,140)
      rotate(360.0 / (2 * this.numofCogs));
        vertex(0,60);
    }

    endShape();
    */
  }


}

/*
 push();
  translate(width*0.5, height*0.5);
  //rotate(frameCount / 50.0);
  star(0, 0, 80, 100, 40);
  pop();

  push();
  //translate(width*0.8, height*0.5);
  //rotate(frameCount / -100.0);
  //star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

*/
