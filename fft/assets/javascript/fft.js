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
		var e = document.getElementById("choosefreq");
		var strFreq = e.options[e.selectedIndex].text;
		this.freq=parseInt(strFreq)
		var layout = {
             title: "Sine plot " + this.freq,
        xaxis: {
        type: "linear",
        range: [
        0,
        2*this.pi],
        autorange: true
      },
      yaxis: {
      type: "linear",
      range: [-1,1],
      autorange: true
      },
      height: 598,
      width: 1080,
      autosize: true,
      showlegend: false
     }
		for (var j=0;j<100;j++) {
			this.xAxis.push(theta)
			this.yAxis.push(Math.sin(theta))
			theta = theta + .01*2*this.pi
		}
		var dd = [this.xAxis,this.yAxis]
		Plotly.newPlot('sineplot',dd,layout);

	},
}
function initialize() {
	console.log("initialize")
	sineWave.init()
}