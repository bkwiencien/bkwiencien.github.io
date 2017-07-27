 Ties = Ties + 1;
var ComputerWins = 0;
var Userwins = 0;
var Ties    = 0;
var netresult = "  ";
function rock() {
var computerchoice="";
var result;
   updateYouChoose("R");
   computerchoice = computerChose();
   updatecomputerChoose(computerchoice);
   result = "R" + computerchoice;
   netresult = "R" + computerchoice;
   asses(netresult);
   return("R");
}
function paper(){
  updateYouChoose("P");
  computerchoice = computerChose();
  updatecomputerChoose(computerchoice);
  netresult = "P" + computerchoice;
  asses(netresult);
  return("P");
}
function scissors(){
 var result;
 updateYouChoose("S");
 computerchoice = computerChose();
 updatecomputerChoose(computerchoice);
 netresult = "S" + computerchoice;
 asses(netresult);
 return("S");
}
function computerChose(){
var tempnum = 0;
var gener   = 0;
var compchoice = " ";
tempnum = Math.round(Math.random()*10)+1;
gener = tempnum % 3;
if (gener == 0){
 return("R");
}
if (gener == 1) {
 return("P");
}
if (gener == 2){
 return("S");
}
}
function updateYouChoose(x) {
var YourChoice = x;
var element = document.getElementById("youchoose");
element.innerHTML = "You Chose: " + x;
}
function updatecomputerChoose(x) {
var element = document.getElementById("computerchose");
element.innerHTML = "Computer choce: " + x;
}
function asses(x) {
if (x == "RR" || x == "SS" || x == "PP") {
 Ties++;
 var element = document.getElementById("ties");
 element.innerHTML = "Ties: " + Ties;
}
if (x == "RS") {
  Userwins++;
  var element = document.getElementById("userwins");
  element.innerHTML = ("Your wins: " + Userwins);
}
if ( x == "SR") {
  ComputerWins++;
  var element = document.getElementById("computerwins");
  element.innerHTML = "Computer wins: " + ComputerWins;
}
if ( x == "SP") {
  Userwins++;
  var element = document.getElementById("userwins");
  element.innerHTML = "Your wins: " + Userwins;
}
if (x == "RP") {
  ComputerWins++;
  var element = document.getElementById("computerwins");
  element.innerHTML = "Computer wins: " + ComputerWins;
}
if (x == "PS") {
  ComputerWins++;
  var element = document.getElementById("computerwins");
  element.innerHTML = "Computer wins: " + ComputerWins;
}
if ( x == "PR") {
  Userwins++;
  var element = document.getElementById("userwins");
  element.innerHTML = "Your wins: " + Userwins;
}
}
