var start = false;
var win= false;
var life= 3;
var playerScore=0;
var pause = false;
var board = new Board (10,10,2);
var fill = new Filler();

function displayLife(){
  var nbOfLifes = life;
  $('.life').empty();
  for(var i =0; i<nbOfLifes; i++){
  $('.life').append("<div class='heart'></div>");
  }
  return;
}
function displayScore(){
  var score = playerScore;
  $('.score p').text(score);
}
function drawPath(){
  var column= fill.position.col;
  var row= fill.position.row;
  $('li[col='+ column+'][row='+row+']').addClass('wire');
}

function resetGame (){
  var message;
  clearInterval(a);//this stops the clock;
  if (life>=0){playerScore +=1;
  message= 'You pass to the next level! Your score is '+playerScore+' and you have '+life+' bonus left. Click me to continue!';}
  else{message='You lose! Your score is '+playerScore+' Click me to play again!';
     playerScore=0;life=3;}
  displayScore();
  $('.board').hide();
  $('.message').css('display','block');
  $('.message p').text(message);
  $('.message p').on('click',function(){
  $('.message').css('display','none');
  $('.board').empty();
  fill.position.row="";
  fill.position.col="";
  $('.board').show();
  board.buildBoard();
  board.buildObstacles();
  start=false;
  win=false;
  pause = false;
  firstSquare();
  $('.blanco').removeClass().addClass('tiles');});
  displayLife();

}

function clockDown(){
  i=40;
  a=  setInterval (function(){
    if (i>0)
  {$('.tiles').first().removeClass().addClass('blanco');
    i--;}
    else{  pause=true;
      playerLoses(50);}
},150);}

function resetClock(){
  clearInterval(a);
  $('.blanco').removeClass().addClass('tiles');
  clockDown();
}

function playerLoses(i){
  pause=true;
  life-=i;
  resetGame ();
}

function firstSquare(){
$('.square').on('click', function() {
    var that = this;
    if(start===false){
      start=true;
      $(that).addClass('wire');
     fill.getPosition(that);
     clockDown();
   }
 });
}

function keyCommands(){

   $("body").keydown(function(){
     if(win===false && pause===false){
     if(fill.pathUp()||fill.pathRight()||fill.pathDown()||fill.pathLeft()){
     switch (event.keyCode) {

          case 38:
        fill.moveUp();
        drawPath();
         resetClock();
       console.log('up!');
         break;

         case 40:
        fill.moveDown();
        drawPath();
         resetClock();
         console.log('down!');
         break;

         case 37:
        fill.moveLeft();
        drawPath();
        resetClock();
       console.log('left!');
         break;

        case 39:
        fill.moveRight();
        drawPath();
        resetClock();
       console.log('right!');
        break;}}

        else{
          var score = $('.wire').length;
            if (score===98){
              win=true;
              pause=true;
              life+=1;
              resetGame ();
                }

            else if(score===97) {
              playerLoses(1);
                }
            else if(score===96) {
              playerLoses(2);
                    }
            else  {
              playerLoses(50);
                    }
              }
          }
   });
}


$(document).ready(function(){

firstSquare();
keyCommands();
displayLife();

});
