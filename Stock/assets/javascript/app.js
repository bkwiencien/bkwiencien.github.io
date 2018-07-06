$(document).ready(function(){ 


//$("body").css("cursor", "progress");
// quincy hacks
console.log('i am here')
// quincy hack
//window.location.href = 'plot.html';

var id = localStorage.getItem("symbol");
var stockName = localStorage.getItem("Name");

document.title = "Stock Price: "+ stockName

$('#hourly').addClass('active');

function successCallback(){

    $('.main').css('visibility','visible');
}
function failureCallback(){
  alert('lost connecton');
  console.log("lost connection")
 // window.open ('../home/home.html','_self',false);
   window.open("index.html")

}
let promise = LastHour(id, stockName).then(successCallback, failureCallback);

$('#hourly').on("click", function(event) {
  $('.active').removeClass('active');
  $(this).addClass('active');
  LastHour(id, stockName);
});


$('#LastDay').on("click", function(event) {

$('.active').removeClass('active');
$(this).addClass('active');
LastDay(id, stockName);
});

$('#Lastmonth').on("click", function(event) {
$('.active').removeClass('active');
$(this).addClass('active');
LastMonth(id, stockName);
});

$('#Lastyear').on("click", function(event) {
$('.active').removeClass('active');
$(this).addClass('active');
LastYear(id, stockName);
});

$('#backToPortfolio').on("click", function(event) {
  localStorage.setItem("userName",name);
  localStorage.setItem("stocksList",st);
  window.open ('../home/home.html','_self',false);
});

});
