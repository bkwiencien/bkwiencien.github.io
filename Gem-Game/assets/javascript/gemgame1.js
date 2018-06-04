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
     var valueOfGem = generateGemValue();
     gemArray[i].value = valueOfGem;
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
  $(".selection").on("click",function() {
   var gemToProcess = $(this).attr("id");
   //console.log("gemToProcess " + gemToProcess);
   console.log(gemToProcess);
   if (gemToProcess == "gem1") {
     currentScore = currentScore + gem1.value;
   }
   if (gemToProcess == "gem2") {
     currentScore = currentScore + gem2.value;
   }
   if (gemToProcess == "gem3") {
     currentScore = currentScore + gem3.value;
   }
   if (gemToProcess == "gem4") {
     currentScore = currentScore + gem4.value;
   }
   $("#totalscore").html("Your total score is " + currentScore);
   assesTheGame()
   });
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
function generateGemValue() {
  var tempnum = Math.round(Math.random()*10);
    if (tempnum == 0) {
      tempnum = 1;
     }
     return(tempnum);
}
