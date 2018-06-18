var targetScore = 0;
var currentScore = 0;
var numbWins = 0;
var numbLoses = 0;
var winningSound = "07075007.wav";
var gem1 = {
   name: "gem1",
   value: 0,
   spinState:  0,
   soundFile:  "service-bell_daniel_simion.mp3"
}
var gem2 = {
   name: "gem2",
   value: 0,
   spinState: 0,
   soundFile: "07074120.wav"
}
var gem3 = {
   name: "gem3",
   value: 0,
   spinState:  0,
   soundFile: "07071002.wav"
}
var gem4 = {
   name: "gem4",
   value: 0,
   spinState:  0,
   soundFile: "07042155.wav"
}
var gemArray = [gem1,gem2,gem3,gem4];
function initialize() {
 targetScore = 0;
 currentScore = 0;
 spinState    = 0;
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
   if (gemToProcess == "gem1") {
     currentScore = currentScore + gem1.value;
     spinIt("gem1");
   }
   if (gemToProcess == "gem2") {
     currentScore = currentScore + gem2.value;
     spinIt("gem2");
   }
   if (gemToProcess == "gem3") {
     currentScore = currentScore + gem3.value;
     spinIt("gem3");
   }
   if (gemToProcess == "gem4") {
     currentScore = currentScore + gem4.value;
     spinIt("gem4");
   }
   $("#totalscore").html("Your total score is " + currentScore);
   assesTheGame()
   });
function assesTheGame() {
 if (currentScore == targetScore) {
   numbWins++;
   $("#wins").html("wins " + numbWins);
   playSound(winningSound);
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
function spinIt(id) {
  var state = parseInt(id[3]);
  var mygem = gemArray[state-1];
  var mystate = gemArray[state-1].spinState;
  var indo = mystate%2;
  var audioFile = gemArray[state-1].soundFile;
  if (indo == 0) {
     $("#"+id).css({'transform': 'rotate(-90deg)'});
     gemArray[state-1].spinState = gemArray[state-1].spinState +1;
     playSound(audioFile);
  } else {
    $("#"+id).css({'transform': 'rotate(+90deg)'});
    gemArray[state-1].spinState = gemArray[state-1].spinState + 1
    playSound(audioFile);
  }     
}
function playSound(ff){
  var head = "assets/sounds/";
  var aud = new Audio();
  aud.src = head+ff;
//var aud = new Audio('sound.ogg');
//Now lets play the music
aud.play();
  //ff.play();
}