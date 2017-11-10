var squareArr = ['zero', 'one', 'two', 'three'];

$(document).ready(initiateApp);
function initiateApp(){
    $('.square').click(moveCircle);
}
 function moveCircle() {
     if($(this).has('#target')){
         $('#target').hide();
     }
     randomPickSquare(4);
 }

 function randomPickSquare(totalNum) {
     var current = $('.square').attr('id');
     for(var i = 0; i< squareArr.length; i++){
         if(squareArr[i] == current){
             squareArr.splice(i, 1);
         }
     }
     var randomSquareNum = Math.ceil(Math.random()*totalNum-1);
     var newPosition = squareArr[randomSquareNum];
     placeTargetToNewPlace(newPosition);
 }

 function placeTargetToNewPlace(num) {
    var circle = $('#target').css('display', 'block');
    var selector = "#" + num;
     var newPlace = $(selector);
         newPlace.append(circle);
     // $('#target').show();
 }