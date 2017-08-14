var numberCorrect = 0;
var numberWrong = 0;
var unanswered  = 0
var gameAssesed = false;
var q1 = {
	question: "Who hosted queen for a day?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Jack Bailey",
	possibleAnswer3: "ED McMahon",
	correctAnswer: "Jack Bailey",
	correctAnswerByID: "radio10",
	answeredCorrectly: "N",
	answerSupplied:    "N"
}
var q2 = {
	question: "Who was the first host of the tonight show?",
	possibleAnswer1: "Johnny Carson",
	possibleAnswer2: "Joey Bishop",
	possibleAnswer3: "Jack Paar",
	correctAnswer: "Jack Paar",
	correctAnswerById: "radio21",
	answeredCorrectly: "N",
	answerSupplied:    "N"
}
var q3 = {
	question: "Daddy in Make Room for Daddy was played by?",
	possibleAnswer1: "Ralph Waldo Emerson",
	possibleAnswer2: "Frank Sinatra",
	possibleAnswer3: "Danny Thomas",
	correctAnswer: "Danny Thomas",
	correctAnswerById: "radio22",
	answeredCorrectly: "N",
	answerSupplied:    "N"
}
var q4 = {
	  question: "Who played the beaver in Leave it to Beaver?",
	  possibleAnswer1: "Jerry Mathers",
	  possibleAnswer2: "Tommy Kirk",
	  possibleAnswer3: "Bobby Driscoll",
	  correctAnswer:   "Jerry Mathers",
	  correctAnswerById: "radio03",
	  answeredCorrectly: "N",
	  answerSupplied:    "N"
}	
var q5 = {
	  question: "Who played the Andy's girlfriend on the Andy Grifith Show?",
	  possibleAnswer1: "Aneta Corsaut",
	  possibleAnswer2: "Arnold Schwarzenegger",
	  possibleAnswer3: "Dame Edith Evans",
	  correctAnswer:   "Aneta Corsaut",
	  correctAnswerById: "radio04",
	  answeredCorrectly: "N",
	  answerSupplied:    "N"
}	    

theQuestions = [q1,q2,q3,q4,q5];
theRadios =[];
function initialize() {
	$("#startbutton").remove();
	createQuestions();
	var timeLeft = 31;
	var gameTimer = setInterval(function() {
		timeLeft--;
		$("#timer").html("<center>Seconds Remaining: " + timeLeft + "</center>")
		if (timeLeft == 29){
			$("#tv").attr("src","assets/images/tv1000.jpeg");
		}
		if (timeLeft == 28){
			$("#tv").attr("src","assets/images/tv14.jpeg");
		}
		if (timeLeft == 27){
			$("#tv").attr("src","assets/images/tv7.jpeg");
		}
		if (timeLeft == 25){
			$("#tv").attr("src","assets/images/tv1.jpeg");
		}
		if (timeLeft == 24){
			$("#tv").attr("src","assets/images/tv2000.jpeg");
		}
		if (timeLeft == 23){
			$("#tv").attr("src","assets/images/tv5.jpeg");
		}
		if (timeLeft == 20){
			$("#tv").attr("src","assets/images/tv2.jpeg");
		}
		if (timeLeft == 18){
			$("#tv").attr("src","assets/images/tv21.jpeg");
		}
		if (timeLeft == 17){
			$("#tv").attr("src","assets/images/tv6.jpeg");
		}
		if (timeLeft == 16){
			$("#tv").attr("src","assets/images/tv22.jpeg");
		}
		if (timeLeft == 15){
			$("#tv").attr("src","assets/images/tv3.jpeg");
		}
		if (timeLeft == 14){
			$("#tv").attr("src","assets/images/tv20.jpeg");
		}
		if (timeLeft == 13){
			$("#tv").attr("src","assets/images/tv4.jpeg");
		}
		if (timeLeft == 12){
			$("#tv").attr("src","assets/images/tv50.jpeg");
		}
		if (timeLeft == 11){
			$("#tv").attr("src","assets/images/tv30.jpeg");
		}
		if (timeLeft == 10){
			$("#tv").attr("src","assets/images/tv300.jpeg");
		}
		if (timeLeft == 8){
			$("#tv").attr("src","assets/images/tv13.jpeg");
		}
		if (timeLeft == 7){
			$("#tv").attr("src","assets/images/tv11.jpeg");
		}
		if (timeLeft == 6){
			$("#tv").attr("src","assets/images/tv200.jpeg");
		}
		if (timeLeft == 5){
			$("#tv").attr("src","assets/images/tv8.jpeg");
		}
		if (timeLeft == 4){
			$("#tv").attr("src","assets/images/tv100.jpeg");
		}
		if (timeLeft == 3){
			$("#tv").attr("src","assets/images/tv12.jpeg");
		}
		if (timeLeft == 2){
			$("#tv").attr("src","assets/images/tv60.jpeg");
		}
		if (timeLeft == 1){
			$("#tv").attr("src","assets/images/tv40.jpeg");
		}
		if (timeLeft <= 0){
			clearInterval(gameTimer);
			assesTheGame();
			$("#tv").attr("src","assets/images/tv9.jpeg");
			$("#timer").html("seconds Remaining: 0 Game Over");
		}
	},1000);

}
function createQuestions() {
   var idTemplate = "radio";
   var questionText = "";
   var w;
   var nameOfRadio = "radio";
   for (j=0;j<5;j++) {
   	 w = theQuestions[j];
   $("#questions").append("<section>" + w.question);
      for (i=0;i<3;i++){
      	nameOfRadio = "radio" +j;
      if (i==0){
   	    questionText = w.possibleAnswer1;
      }
      if (i==1){
   	    questionText = w.possibleAnswer2;
      }
      if (i==2){
   	    questionText = w.possibleAnswer3;
      }
      $("#questions").append(questionText+ " ");
      var radioYes = document.createElement("input");
      radioYes.setAttribute("type","radio");
      radioYes.setAttribute("id","radio"+i+j);
      console.log("id = radio" + i + j);
      radioYes.setAttribute("name",nameOfRadio);
      var len = theRadios.length;
      theRadios[len] = nameOfRadio;
      radioYes.setAttribute("data","radio"+i+j);
      radioYes.setAttribute("value","radio"+i+j);
      $("#questions").append(radioYes);
      $("#questions").append("<br>");
   }
   $("#questions").append("</section>");  
}
   var buttonYes = document.createElement("input");
   buttonYes.setAttribute("type","button");
   buttonYes.setAttribute("onclick","javascript:finito()");
   buttonYes.setAttribute("value","Done with trivia questions");
   buttonYes.innerHTML = "Done!!!"
   $("#donebutton").append(buttonYes);

}
function assesTheGame() {
  var whoWasChosen;
  processTheClicks();
  console.log("in assesTheGame");
  for (j=0;j<theQuestions.length;j++) {
      var w = theQuestions[j];
      if (w.answeredCorrectly == "Y") {
      	numberCorrect++;
      } 
      if (w.answerSupplied == "N"){
      	 unanswered++;
      }
      if (w.answerSupplied == "Y" && w.answeredCorrectly == "N") {
      	 numberWrong++;
      }
    }  
   if (!gameAssesed){
      $("#correct").html("correct: " + numberCorrect);
      $("#wrong").html("wrong: " + numberWrong);
      $("#unanswered").html("unanswered: " + unanswered);                               
      gameAssesed = true;
   }
}
function processTheClicks() {
	
	if ($("#radio00").is(":checked")) {
	    q1.answerSupplied="Y";
    }
	if ($("#radio10").is(":checked")) {
		q1.answeredCorrectly="Y";
		q1.answerSupplied ="Y";
	}
	if($("#radio11").is(":checked")) {
		q2.answerSupplied = "Y";
	}
	if ($("#radio20").is(":checked")) {
		q1.answerSupplied ="Y";
	}
	if ($("#radio01").is(":checked")){
		q2.answerSupplied = "Y";
	}
	if ($("#radio21").is(":checked")) {
		q2.answeredCorrectly = "Y";
		q2.answerSupplied = "Y";
	}
	if ($("#radio22").is(":checked")) {
		q3.answeredCorrectly = "Y";
		q3.answerSupplied ="Y";
	}	
	if ($("#radio12").is(":checked")) {
		q3.answerSupplied = "Y";
	}
	if ($("#radio02").is(":checked")) {
		q3.answerSupplied = "Y";
	}
	if ($("#radio03").is(":checked")) {
		q4.answeredCorrectly = "Y";
		q4.answerSupplied = "Y";
	}	
	if ($("#radio13").is(":checked")) {
		q4.answerSupplied = "Y";
	}
	if ($("#radio23").is(":checked")) {
		q4.answerSupplied = "Y";
	}
	if ($("#radio04").is(":checked")) {
		q5.answeredCorrectly = "Y";
		q5.answerSupplied = "Y";
	}	
	if ($("#radio14").is(":checked")) {
		q5.answerSupplied = "Y";
	}
	if ($("#radio24").is(":checked")) {
		q5.answerSupplied = "Y";
	}
}
function finito() {
	assesTheGame();
	$("#doneparagraph").html("clicked done check below for score");
}









