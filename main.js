var start = false;
function gameOver(){
  alert ('Game over!!!');
}

function drawPath(){
  var column= fill.position.col;
  var row= fill.position.row;
  $('li[col='+ column+'][row='+row+']').addClass('wire');
}



/*function resetClockColor(){
    $('.clock').removeClass('run');
    clockColor();

}

function clockColor(){
  $('.clock').addClass('run');
}*/
////////////////////////////////////////////
var playerPlayed = false;
var a;
var test= 100;

function res(){
  clearInterval(a);
  test=100;
}

a=setInterval (function(){
  console.log(test);
  if (test===0){
    clearInterval(a);
  }
  test--;
},1000);


////////////////////////////////////////////
var gameClock;

function gameEnd(){
   gameClock=setTimeout (function(){

     alert ('Game over!!!');
},5000);}
/////////////////////////////////////////////
function game(){
$('.square').on('click', function() {
  var that = this;
  if(start===false){
    start=true;
    $(that).addClass('wire');
   fill.getPosition(that);
   gameEnd();
 }
 });


$("body").keydown(function(){
   if(fill.pathUp()||fill.pathRight()||fill.pathDown()||fill.pathLeft()){
   switch (event.keyCode) {
        case 38:
      fill.moveUp();
      drawPath();
       clearTimeout( gameClock );
       gameEnd();
       $('.clock').addClass('run');
     console.log('up!');
       break;

       case 40:
      fill.moveDown();
      drawPath();
      clearTimeout( gameClock );
      gameEnd();
       $('.clock').addClass('run');
      console.log('down!');
       break;

       case 37:
      fill.moveLeft();
      drawPath();
      clearTimeout( gameClock );
      gameEnd();
    resetClockColor();
     console.log('left!');
       break;

      case 39:
      fill.moveRight();
      drawPath();
      clearTimeout( gameClock );
      gameEnd();
     console.log('right!');
      break;}}

      else{
          var score = $('.wire').length;
          if (score===98){alert("you win!");
          $('.board-container').empty();
          board.buildBoard();}
          else{alert("Game Over Bitch");
          $('.board-container').empty();
          board.buildBoard();
          return game();}
        }
    });
  }

$(document).ready(function(){


    game();
  });
