function Filler(){
  this.position={row:1,column:1};
  this.pathUp();

}

Filler.prototype.getPosition = function(){};
Filler.prototype.move = function(){};

/*Filler.prototype.getBoardWidth = function(){
  var w= board.col;
  console.log(w);
};*/
Filler.prototype.pathUp = function(){
  var upSquare= board.col*this.position.row -board.col + this.position.column+1;
  var upClass= $('div:nth-of-type('+upSquare+')').attr('class');
  if(this.position.row>0 && upClass==="square")
  {return true;}
};


Filler.prototype.pathDown = function(){
  var downSquare= board.col*this.position.row +board.col + this.position.column+1;
  var downClass= $('div:nth-of-type('+downSquare+')').attr('class');
  if(this.position.row<9 && downClass==="square")
  {return true;}
};
Filler.prototype.pathLeft = function(){
  var leftSquare= board.col*this.position.row + this.position.column;
  var leftClass= $('div:nth-of-type('+leftSquare+')').attr('class');
  if(this.position.row<9 && leftClass==="square")
  {return true;}
};
Filler.prototype.pathRight = function(){
  var rightSquare= board.col*this.position.row + this.position.column+2;
  var rightClass= $('div:nth-of-type('+rightSquare+')').attr('class');
  if(this.position.row<9 && rightClass==="square")
  {return true;}
};

var fill = new Filler();
