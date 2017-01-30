var start = false;

function drawPath(){
  var column= fill.position.col;
  var row= fill.position.row;
  $('li[col='+ column+'][row='+row+']').addClass('wire');
}
$(document).ready(function(){
  $('.square').on('click', function() {
    var that = this;
    if(start===false){
      start=true;
      $(that).addClass('wire');
     fill.getPosition(that);
   }
   });



   $("body").keydown(function(){
     if(fill.pathUp()||fill.pathRight()||fill.pathDown()||fill.pathLeft()){
     switch (event.keyCode) {
          case 38:
        fill.moveUp();
        drawPath();
       console.log('up!');
         break;

         case 40:
        fill.moveDown();
        drawPath();
        console.log('down!');
         break;

         case 37:
        fill.moveLeft();
        drawPath();
       console.log('left!');
         break;

        case 39:
        fill.moveRight();
        drawPath();
       console.log('right!');
        break;}}

        else{
          alert("Game Over Bitch");
        }


     });






});
