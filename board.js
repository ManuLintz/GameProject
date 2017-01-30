function Board(row,col,level){
  this.row= row;
  this.col= col;
  this.level = level;
  this.buildBoard();
  this.buildObstacles();

}

Board.prototype.buildBoard = function(){
  for (var boardHeight=0; boardHeight < this.col; boardHeight++){
    for (var boardWidth=0; boardWidth < this.row; boardWidth++){
      $('.container').append('<li class="square" row="'+boardHeight+'" col="'+boardWidth+'"></li>');
    }
  }
};


Board.prototype.buildObstacles = function(){

  for (var obs=0; obs <this.level; obs++){
    var rand =_.random(1,100);
    //console.log(rand);
    $('.square:nth-of-type('+rand+')').addClass('obstacle');
}

};

var board = new Board (10,10,2);
