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
   var reso = []
   var state = 0
   var res = null
   var count = 0
   var nn = numbTrials -1 
   for (j=0;j<nn;j++){
   	  var done = false
   	  state = parseInt(1)
   	  count = 0
   	  while (state != 3){
   	  	res = flip().trim()
   	  	count++
   	  	done = false
   	  	if ((res == "H") && (state == 1) && (done == false)){
          state = 2
          done = true
        }
        if((res == "T") && (state == 2) && (done == false)){
          state = 1
          done  = true
        }
        if((res == "H") && (state == 2) && (done == false)){
          state = 3
          reso[j] = count
          done = true
        }
        if((res == "T") && (state == 1) && (done == false)){
          state = 1
          done = true
        }
   	  }
   }
   console.log("mean  = " + findAvg(reso))
}
function ht(numbTrials) {
   var reso = []
   var state = 0
   var res = null
   var count = 0
   var nn = numbTrials -1 
}
function findAvg(array){
	var sumo = 0
	for (i=0;i<array.length;i++){
       sumo += array[i]
	}
	return(sumo/array.length)
}