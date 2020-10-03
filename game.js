var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var chossencol=[];
var started = false;
var level = 0;
$(".btn").click(function(){
  var usechossencolor = $(this).attr("id");
  chossencol.push(usechossencolor);
  playSound(usechossencolor);
  animatePress(usechossencolor);
  checkanswer(chossencol.length-1);
});
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkanswer(currentAnswer){
  if (gamePattern[currentAnswer]===chossencol[currentAnswer]){
    console.log("success");

    if(chossencol.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
    }
    else {
      console.log("failure");
      wer();
      wr();
      WrongSound();
      startOver();
    }
  }
function nextSequence(){
  chossencol = [];
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  $("#level-title").text("Level " + level);
  playSound(randomChosenColour);

}

function playSound(name){
  var audio = new Audio("sounds/"+name+'.mp3');
  audio.play();
}

function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed");
  },100);
}
function WrongSound(){
  var audio1 = new Audio("sounds/wrong.mp3");
  audio1.play();
}
function wr(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
}
function wer(){
  $("#level-title").text("Game Over Press any key to restart");
}
function startOver(){
level = 0 ;
gamePattern = [];
started = false;

}
