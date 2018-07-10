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
		var e = document.getElementById("choosefreq");
		var strFreq = e.options[e.selectedIndex].text;
		this.freq=parseInt(strFreq)
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
        },
      height: 598,
      width: 1080,
      autosize: true,
      showlegend: true,
     }
		for (var j=0;j<150;j++) {
			this.xAxis.push(theta)
			this.yAxis.push(Math.sin(2*theta*Math.PI/this.freq))
			console.log(Math.sin(2*theta*Math.PI/this.freq))
			theta = theta + .048
		}
		dd = [this.xAxis,this.yAxis]
		Plotly.purge('sineplot');
		console.log("after purge " + dd)
		Plotly.plot('sineplot',dd,layout)
	    $("body").css("cursor", "default");

	},
}
function initialize() {
	console.log("initialize")
	sineWave.init()
}