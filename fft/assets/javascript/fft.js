var sineWave = {
	xAxis: [],
	yAxis: [],
	freq:        0,
	pi:          Math.PI,
	getInput: function (){
		console.log("in getInput")
	},
	init: function() {
		this.xAxix = []
		this.yAxis = []
		this.freq = 0
	},
	generateData: function() {
		var theta = 0.0
		var dd = []
		var base = .048
		var baseNumb = 150
		var e = document.getElementById("choosefreq");
		var strFreq = e.options[e.selectedIndex].text;
		this.freq=parseInt(strFreq)
		var trace1 = {
         x: [],
         y: [],
         line: {
          color: 'rgba (31, 119, 180, 1)', 
          dash: 'solid', 
          width: 1.5
         }, 
        mode: 'lines', 
        name: 'plot freq '+ this.freq, 
        type: 'scatter', 
        xaxis: 'x1', 
        yaxis: 'y1',
       };  // end of trace1
		var layout = {
	    x: [],
	    y: [],		
        title: "Sine plot " + this.freq,
        xaxis: {
        type: "scatter",
        showgrid: true,
        range: [0,2*this.pi],
        autorange: false,
        },
        yaxis: {
        type: "scatter",
        showgrid: true,
        range: [-1,1],
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
		for (var j=0;j<baseNumb*this.freq;j++) {
			this.xAxis.push(theta)
			this.yAxis.push(Math.sin(2*theta*Math.PI*this.freq))
			theta = theta + base/this.freq
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