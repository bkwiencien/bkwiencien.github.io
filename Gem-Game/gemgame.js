var targetScore = 0;
var currentScore = 0;
var numbWins = 0;
var numbLoses = 0;
var gem1 = {
   name: "gem1",
   value: 0
}
var gem2 = {
   name: "gem2",
   value: 0
}
var gem3 = {
   name: "gem3",
   value: 0
}
var gem4 = {
   name: "gem4",
   value: 0
}
var gemArray = [gem1,gem2,gem3,gem4];
function initialize() {
 targetScore = 0;
 currentScore = 0;
$("#totalscore").html("Your total score is " + currentScore);
 setUpAllGems();
 resetYourScore();
 generateTargetScore();
}
function setUpAllGems() {
  for (i=0;i<gemArray.length;i++) {
    var tempnum = Math.round(Math.random()*10);
    if (tempnum == 0) {
      tempnum = 1;
     }
     gemArray[i].value = tempnum  % 13;
     console.log(gemArray[i].name + "  has a value of " + gemArray[i].value);

  }
}
function generateTargetScore() {
// The random number shown at the start of the game should be between 19 - 120.
// $("#random-number").html(rnd);
    var tempnum = Math.round(Math.random()*1000);
    targetScore = tempnum % 120;
    if (targetScore < 19 ) {
      targetScore = 19;
    }    
    console.log("targetScore = " + targetScore);
    $("#target").html("target " + targetScore);

}
function process1() {
  currentScore = currentScore + gem1.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process2() {
  currentScore = currentScore + gem2.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process3() {
  currentScore = currentScore + gem3.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process4() {
  currentScore = currentScore + gem4.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function assesTheGame() {
 if (currentScore == targetScore) {
   numbWins++;
   $("#wins").html("wins " + numbWins);
   initialize();
 }
 if (currentScore > targetScore) {
   numbLoses++;
   $("#loses").html("loses " + numbLoses);
   initialize();
 }
}
function resetYourScore() {

   $("yourscore").html("Your total score is " + currentScore);
}
