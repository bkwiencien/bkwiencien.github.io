function initialize() {
	var a = 11
	console.log('in init')
}
function flip(){
	var nn = Math.random()*1000
	var res = parseInt(nn) % 2
	if (res == 0 ){
		return('H')
	} else {
		return('T')
	}
}
function getParms() {
	var seq = $('#chsequence').val()
	var numb = $('#numbtrials').val()
	if (seq == 'hh') {
		hh(parseInt(numb))
	} else {
		ht(parseInt(numb))
	}
}
function hh(numbTrials) {
   var aresults = []
   var state = 0
   while (j=0;numbTrials-1;j++){
   	  while (state != 3){
   	  	state = 3
   	  }
   }
}
function ht(numbTrials) {
   var aresults = []
   var state = 0;
}