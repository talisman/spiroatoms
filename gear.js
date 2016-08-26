function gear (x,y,o_radius,i_radius,numofspikes) {
  // this.linedraw = [];
  this.x = x ;
  this.y = y;
  this.x2 = x + o_radius - i_radius;
  this.y2 = y;
  this.out_cog = new Cog(this.x,this.y,o_radius,o_radius*0.9,numofspikes);
  this.in_cog = new Cog(this.x2,this.y2,i_radius,i_radius*0.9,numofspikes);
  
  this.update = function (){
      
    
  }
  
  
  this.display = function(){
    push();
    this.out_cog.display();
    this.in_cog.display();
    pop();
  }
  
  
  
}