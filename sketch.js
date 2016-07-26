var ashp= [];
var numOfShapes;

function setup() {
  numOfShapes = 8;
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(RGB,255,255,255,100);
  for (var j = 0 ; j < numOfShapes ;j++){
  ashp[j] = new atomShape(random(0,width),random(0,height),random(60,90),random(5,30),round(random(2,6))*2);
  }
}

function draw() {
  background(255);
  for (j=0 ;j < ashp.length; j++){
    ashp[j].display();
    ashp[j].update();
    ashp[j].tofill = true;
    for ( i = 0 ; i < ashp.length ; i ++){
      if (i != j ){
        if(ashp[j].intersectsWith(ashp[i])){
          ashp[j].tofill = false;
          ashp[i].tofill = false;
        }
       // else{
         // ashp[i].tofill =true;
         // ashp[j].tofill =true;
          
        //}
          
      }
    }
  }
}