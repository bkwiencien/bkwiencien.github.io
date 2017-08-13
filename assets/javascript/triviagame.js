var numberCorrect = 0;
var numberWrong = 0;
var numbWins = 0;
var numbLoses = 0;
var q1 = {
	question: "Who hosted queen for a day?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Jack Bailey",
	possibleAnswer3: "ED McMahon",
	correctAnswer: "Jack Bailey"
}
var q2 = {
	question: "Who wqs the first host of the tonight show?",
	passibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Joey Bishop",
	possibeAnswer3: "Jack Par",
	correctAnswer: "Jack Par"
}
function initialize() {
	console.log("initialize");
	var timeLeft = 120;
	console.log("time left = " + timeLeft);
	var gameTimer = setInterval(function() {
		timeLeft--;
		console.log("in the function")
		$("#timer").html("<center>Seconds Remaining: " + timeLeft + "</center>")
		if (timeLeft <= 0){
			clearInterval(gameTimer);
			$("#timer").html("seconds Remaining: 0");
		}
	},1000);
	console.log("here timeLeft = " + timeLeft);


}
