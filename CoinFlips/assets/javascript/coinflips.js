
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
function displayAvg(inarray,barray) {
	var ans = inarray
  var tarray = barray
  var listOfList = []
	$('#resultline').text('average number of coin flips is ' + ans[0].toFixed(3))
	$('#maxline').text('maximum number of coin flips is  ' + ans[1].toFixed(3))
  listOfList = magic(barray)
}
function plotEm(array) {
  var useThis = array
  console.log('in plotEm ' + array)
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
      var data = google.visualization.arrayToDataTable(useThis)
      console.log("data = " + data)
      var options = {
          title: 'breakdown of flips',
        };
       var chart = new google.visualization.Histogram(document.getElementById('results'));
        chart.draw(data, options);
      }
     } 
// creat the necessary object for Googler charts     
function magic(aa){
  var res = []
  var test = ['x1',2]
  res.push(test)
  return(res)
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
   var x = findAvg(reso)
   displayAvg(x,reso)
   
}
function ht(numbTrials) {
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
          done = "T"
        }
        if((res == "T") && (state == 2) && (done == false)){
           state = 3
           reso[j] = count
           done = "T"
        }
        if((res == "H") && (state == 2) && (done == false)){
           state = 2
           done = "T"
         }
         if((res == "T") && (state == 1) && (done == false)){
           state = 1
           done = "T"
   	     }	
     }
    }
     var x = findAvg(reso)
     displayAvg(x,reso);
   }  
function findAvg(array){
	var sumo = 0
	var res = []
	for (i=0;i<array.length;i++){
       sumo += array[i]
	}
	res[0] = sumo/array.length
	res[1] = Math.max(...array)
	return(res)
}