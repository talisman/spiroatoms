function Gears (x,y,o_radius,i_radius,numofspikes) {
  this.Outcog = new Cog(x,y,o_radius,o_radius*0.9,numofspikes);
  this.Outcog.placevrtx();
  this.Incog = new Cog(
              ((o_radius - (0.5 * (o_radius - o_radius * 0.9))) - i_radius),
              0,i_radius,(i_radius - (o_radius - o_radius *0.9)),numofspikes * 0.8);
  this.Incog.placevrtx();
  this.display = function(){
    this.Outcog.display();
    this.Incog.display();
  }
  
  
  
}