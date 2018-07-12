var sineWave = {
	xAxis: [],
	yAxis: [],
	freq1:        0,
	freq2:        0,
	hfreq:        0,
	pi:          Math.PI,
	getInput: function (){
		console.log("in getInput")
	},
	init: function() {
		this.xAxix = []
		this.yAxis = []
		this.freq1 = 0
	},
	generateData: function() {
		var theta = 0.0
		var dd = []
		var base = .048
		var baseNumb = 150
		var e = document.getElementById("choosefreq");
		var strFreq1 = e.options[e.selectedIndex].text;
		this.freq1=parseInt(strFreq1)
		var e = document.getElementById("choosefreqa");
		var strFreq1 = e.options[e.selectedIndex].text;
		this.freq2=parseInt(strFreq1)
		console.log("freq2 is " + this.freq2)
		if (this.freq1 >= this.freq2){
			this.hfreq = this.freq1 } else {
		    this.hfreq = this.freq2		
		}
		var trace1 = {
         x: [],
         y: [],
         line: {
          color: 'rgba (31, 119, 180, 1)', 
          dash: 'solid', 
          width: 1.5
         }, 
        mode: 'lines', 
        name: 'plot freq '+ this.freq1 + " " + this.freq2, 
        type: 'scatter', 
        xaxis: 'x1', 
        yaxis: 'y1',
       };  // end of trace1
		var layout = {
	    x: [],
	    y: [],		
        title: "combined plot " + this.freq1 + " " + this.freq2,
        xaxis: {
        type: "scatter",
        showgrid: true,
        range: [0,2*this.pi],
        autorange: false,
        },
        yaxis: {
        type: "scatter",
        showgrid: true,
        range: [-2,2],
        autorange: false,
        showline: true,
        },
      height: 598,
      width: 1080,
      autosize: true,
      showlegend: true,
     }
        this.xAxis = []
        this.yAxis = []
		for (var j=0;j<baseNumb*this.hfreq;j++) {
			this.xAxis.push(theta)
			this.yAxis.push(Math.sin(2*theta*Math.PI*this.freq1) + Math.sin(2*theta*Math.PI*this.freq2))
			theta = theta + base/this.hfreq
		}
		dd = [this.xAxis,this.yAxis]
		trace1.x = this.xAxis
		trace1.y = this.yAxis
		var data = [trace1]
		Plotly.newPlot('sineplot',{data: data,layout:layout})

	},
}
function initialize() {
	console.log("initialize")
	sineWave.init()
}