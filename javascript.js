var playing = false;
var score;
var timeRemaining;
var correctAnswer;
var triesRemaining;
var myCountDown;
var seed;

document.getElementById("startReset").onclick = function() {
  if (playing) {
    location.reload();
  } else {
    playing = true;
    score = 0;
    triesRemaining = 2;
    document.getElementById("scoreVal").innerHTML = 0;
    document.getElementById("timer").style.display = "block";
    document.getElementById("counter").style.display = "block";
    document.getElementById("startResetVal").innerHTML = "Reset";
    timeRemaining = 30;
    document.getElementById("remainingTime").innerHTML = timeRemaining;
    startCountDown();
    seed = 1;
    generateQ();
    generateA();
  }
}


function generateQ() {
  var firstNum = Math.round(Math.random() * 9);
  var secondNum = Math.round(Math.random() * 20);
  document.getElementById("firstNum").innerHTML = firstNum;
  document.getElementById("secondNum").innerHTML = secondNum;
}

function generateA() {
  var firstNum = document.getElementById("firstNum").innerHTML;
  var secondNum = document.getElementById("secondNum").innerHTML;
  var random = Math.floor(Math.random() * 4) + 1;
  correctAnswer = firstNum * secondNum;
  document.getElementById("choice" + random).innerHTML = correctAnswer;
  var index = 1;
  while (index <= 4) {
    if (document.getElementById("choice" + index).innerHTML == "") {
      seed++;
      var randomWrong = Math.round(Math.random() * 200 + Math.sin(seed * 10));
      var wrongAnswer = (firstNum - randomWrong) * (secondNum + randomWrong) % 100;
      if (wrongAnswer != correctAnswer) {
        document.getElementById("choice" + index).innerHTML = Math.abs(wrongAnswer);
      } else {
        document.getElementById("choice" + index).innerHTML = Math.abs(correctAnswer + 4);
      }
    }
    index++;
  }
}

document.getElementById("box1").onclick = function() {
  if (playing) {
    if (correctAnswer == document.getElementById("choice1").innerHTML) {
      score++;
      document.getElementById("scoreVal").innerHTML = score;
      document.getElementById("correct").style.display = "block";
      setTimeout(function(){
        document.getElementById("correct").style.display = "none";
      }, 1000);
      triesRemaining = 2;
      timeRemaining = 30;
      document.getElementById("triesRemaining").innerHTML = triesRemaining;
      clearChoice();
      generateQ();
      generateA();
    } else {
      document.getElementById("wrong").style.display = "block";
      setTimeout(function(){
        document.getElementById("wrong").style.display = "none";
      }, 1000);
      if (triesRemaining == 1) {
        document.getElementById("triesRemaining").innerHTML = 0;
        losingAction();
      } else {
        triesRemaining--;
        document.getElementById("triesRemaining").innerHTML = triesRemaining;
      }
    }
  }
}
document.getElementById("box2").onclick = function() {
  if (playing) {
    if (correctAnswer == document.getElementById("choice2").innerHTML) {
      score++;
      document.getElementById("scoreVal").innerHTML = score;
      document.getElementById("correct").style.display = "block";
      setTimeout(function(){
        document.getElementById("correct").style.display = "none";
      }, 1000);
      triesRemaining = 2;
      timeRemaining = 30;
      document.getElementById("triesRemaining").innerHTML = triesRemaining;
      clearChoice();
      generateQ();
      generateA();
    } else {
      document.getElementById("wrong").style.display = "block";
      setTimeout(function(){
        document.getElementById("wrong").style.display = "none";
      }, 1000);
      if (triesRemaining == 1) {
        document.getElementById("triesRemaining").innerHTML = 0;
        losingAction();
      } else {
        triesRemaining--;
        document.getElementById("triesRemaining").innerHTML = triesRemaining;
      }
    }
  }
}
document.getElementById("box3").onclick = function() {
  if (playing) {
    if (correctAnswer == document.getElementById("choice3").innerHTML) {
      score++;
      document.getElementById("scoreVal").innerHTML = score;
      document.getElementById("correct").style.display = "block";
      setTimeout(function(){
        document.getElementById("correct").style.display = "none";
      }, 1000);
      triesRemaining = 2;
      timeRemaining = 30;
      document.getElementById("triesRemaining").innerHTML = triesRemaining;
      clearChoice();
      generateQ();
      generateA();
    } else {
      document.getElementById("wrong").style.display = "block";
      setTimeout(function(){
        document.getElementById("wrong").style.display = "none";
      }, 1000);
      if (triesRemaining == 1) {
        document.getElementById("triesRemaining").innerHTML = 0;
        losingAction();
      } else {
        triesRemaining--;
        document.getElementById("triesRemaining").innerHTML = triesRemaining;
      }
    }
  }
}
document.getElementById("box4").onclick = function() {
  if (playing) {
    if (correctAnswer == document.getElementById("choice4").innerHTML) {
      score++;
      document.getElementById("scoreVal").innerHTML = score;
      document.getElementById("correct").style.display = "block";
      setTimeout(function(){
        document.getElementById("correct").style.display = "none";
      }, 1000);
      triesRemaining = 2;
      timeRemaining = 30;
      document.getElementById("triesRemaining").innerHTML = triesRemaining;
      clearChoice();
      generateQ();
      generateA();
    } else {
      document.getElementById("wrong").style.display = "block";
      setTimeout(function(){
        document.getElementById("wrong").style.display = "none";
      }, 1000);
      if (triesRemaining == 1) {
        document.getElementById("triesRemaining").innerHTML = 0;
        losingAction();
      } else {
        triesRemaining--;
        document.getElementById("triesRemaining").innerHTML = triesRemaining;
      }
    }
  }
}

function startCountDown() {
  myCountDown = setInterval(function() {
    timeRemaining--;
    document.getElementById("remainingTime").innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      losingAction();
    }
  }, 1000);
}

function losingAction() {
  clearInterval(myCountDown);
  document.getElementById("correct").style.display = "none";
  document.getElementById("wrong").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("counter").style.display = "none";
  clearChoice();
  document.getElementById("question").innerHTML = "";
  document.getElementById("scoreVal").innerHTML = score;
  document.getElementById("startResetVal").innerHTML = "Start";
  window.alert("You lose! Your score is " + document.getElementById("scoreVal").innerHTML);
  document.getElementById("instruction").innerHTML = "Click Start to Start Game!";
  score = 0;
  location.reload();
}

function clearChoice() {
  for (i = 0; i < 4; i++) {
    document.getElementsByClassName("choice")[i].innerHTML = "";
  }
}
