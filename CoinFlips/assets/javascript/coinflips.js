var buckets = {
  varray:  [],
  temp:    [],
  init:    function() {
    this.varray = []
    this.temp   = []
    this.temp = ['bucket1(2-6)flips',0]
    this.varray.push(this.temp),
    this.temp = ['bucket2(7-10)flips',0]
    this.varray.push(this.temp)
    this.temp = ['bucket3(11-15)flips',0]
    this.varray.push(this.temp)
    this.temp = ['bucket4(16-20)flips',0]
    this.varray.push(this.temp)
    this.temp = ['bucket5(21 or more)flips',0]
    this.varray.push(this.temp)
  },
  allocate: function(v){
    if ((v>1) && (v<=6)) {
      this.varray[0][1]++
    }
    if ((v>6) && (v<=10)) {
      this.varray[1][1]++
    }
    if ((v>10) && (v<=15)) {
      this.varray[2][1]++
    }
    if ((v>15) && (v<=20)) {
      this.varray[3][1]++
    }
    if (v>=21) {
      this.varray[4][1]++
    }
  }
}
function initialize() {
	var a = 11
  buckets.init()
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
  plotEm()
}
function plotEm() {
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
      var data = google.visualization.arrayToDataTable(buckets.varray,true)
      console.log("data = " + data)
      var options = {
          title: 'Flip distribution',
          legend: { position: 'none' },
          isStacked: false,
          histogram: { lastBucketPercentile: 10 },
          //vAxis: { scaleType: 'mirrorLog' },
          histogram: {
             bucketSize: 0.02,
             maxNumBuckets: 200,
             minValue: 0,
             maxValue: 100
           },
        };
       var chart = new google.visualization.Histogram(document.getElementById('results'));
        chart.draw(data, options);
      }
     } 
function hh(numbTrials) {
   var reso = []
   var state = 0
   var res = null
   var count = 0
   buckets.init()
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
          buckets.allocate(count)
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
   buckets.init()
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
           buckets.allocate(count)
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
    console.log(buckets)
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