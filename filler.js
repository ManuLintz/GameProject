function Filler(){
  this.position={row:"",col:""};
}
//the player choses a position
Filler.prototype.getPosition = function(i){
  this.position.row= parseInt($(i).attr('row'));
  this.position.col= parseInt($(i).attr('col'));
};

//these functions allow the player to move
Filler.prototype.moveUp = function(){
  if (this.pathUp()){
   this.position.row-=1;}
   else{wrongCommand();}
};
Filler.prototype.moveDown = function(){
  if (this.pathDown()){
   this.position.row+=1;}
   else{wrongCommand();}
};
Filler.prototype.moveLeft = function(){
  if (this.pathLeft()){
   this.position.col-=1;}
   else{wrongCommand();}
};
Filler.prototype.moveRight = function(){
  if (this.pathRight()){
   this.position.col+=1;}
   else{wrongCommand();}
};
//We check if there's room to go
Filler.prototype.pathUp = function(){
  var upSquare= board.col*this.position.row -board.col + this.position.col+1;
  var upClass= $('li:nth-of-type('+upSquare+')').attr('class');
  if(this.position.row>0 && upClass==="square")
  {return true;}
};
Filler.prototype.pathDown = function(){
  var downSquare= board.col*this.position.row +board.col + this.position.col+1;
  var downClass= $('li:nth-of-type('+downSquare+')').attr('class');
  if(this.position.row<9 && downClass==="square")
  {return true;}
};
Filler.prototype.pathLeft = function(){
  var leftSquare= board.col*this.position.row + this.position.col;
  var leftClass= $('li:nth-of-type('+leftSquare+')').attr('class');
  if(this.position.col>0 && leftClass==="square")
  {return true;}
};
Filler.prototype.pathRight = function(){
  var rightSquare= board.col*this.position.row + this.position.col+2;
  var rightClass= $('li:nth-of-type('+rightSquare+')').attr('class');
  if(this.position.col<9 && rightClass==="square")
  {return true;}
};
