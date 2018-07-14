var sineWave = {
	xAxis: [],
	yAxis: [],
	freq1:        0,
	freq2:        0,
  freq3:        0,
	hfreq:        0,
	pi:          Math.PI,
	init: function() {
		this.xAxix = []
		this.yAxis = []
		this.freq1 = 0
		this.freq2 = 0
    this.freq3 = 0;
		this.hfreq = 0
	},
  getAxis: function() {
    var res = []
    res.push(this.xAxis)
    res.push(this.yAxis)
    return(res)
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
    var e = document.getElementById("choosefreqb");
    var strFreq1 = e.options[e.selectedIndex].text;
		this.freq3=parseInt(strFreq1)
		if (this.freq1 >= this.freq2){
			this.hfreq = this.freq1 } else {
		    this.hfreq = this.freq2		
		}
    if (this.freq3 > this.hfreq) {
      this.hfreq = this.freq3
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
        name: 'plot freq '+ this.freq1 + " " + this.freq2 + " " + this.freq3, 
        type: 'scatter', 
        xaxis: 'x1', 
        yaxis: 'y1',
       };  // end of trace1
		var layout = {
	    x: [],
	    y: [],		
        title: "combined plot " + this.freq1 + " " + this.freq2 + " " + this.freq3,
        xaxis: {
        type: "scatter",
        showgrid: true,
        range: [0,2*this.pi],
        autorange: false,
        },
        yaxis: {
        type: "scatter",
        showgrid: true,
        range: [-3,3],
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
    theta = 0    
    for (var j=0;j<16384;j++) {
			this.xAxis.push(theta)
			this.yAxis.push(Math.sin(2*theta*Math.PI*this.freq1) + Math.sin(2*theta*Math.PI*this.freq2)+Math.sin(2*theta*Math.PI*this.freq3))
			theta = theta + base/(this.hfreq)
		}
		dd = [this.xAxis,this.yAxis]
		trace1.x = this.xAxis
		trace1.y = this.yAxis
		var data = [trace1]
		Plotly.newPlot('sineplot',{data: data,layout:layout})
		$("#label3").show()
		$("#fft").show()
	},
}
var ffto = {
  amplitudes:  [],
  yAxis:       [],
  init: function() {
    this.amplitudes = []
  },
  fft2: function(X) {
    var N = X.length;
  if (N <= 1) {
    return X;
  }
  var M = N/2;
  var even = [];
  var odd = [];
  even.length = M;
  odd.length = M;
  for (var i = 0; i < M; ++i) {
    even[i] = X[i*2];
    odd[i] = X[i*2+1];
  }
  even = this.fft2(even);
  odd = this.fft2(odd);
  var a = -2*math.pi;
  for (var k = 0; k < M; ++k) {
    // t = exp(-2PI*i*k/N) * X_{k+N/2} (in two steps)
    var t = math.exp(math.complex(0, a*k/N));
    t = math.multiply(t, odd[k]);
    X[k] = odd[k] = math.add(even[k], t);
    X[k+M] = even[k] = math.subtract(even[k], t);
  }
  return X;
  },
  generateFFT: function() {
   // var win = window.open("plot.html","_blank")
   // win.focus()
    var XX = sineWave.getAxis();
    this.amplitudes = XX[1]
    var Y = this.fft2(this.amplitudes);
    var realY = []
    var realX = []
    for (var jj=0;jj<Y.length;jj++){
      realY.push(Y[jj].re)
      realX.push(jj)
    }
    $("#sineplot").hide()
    var trace2 = {
         x: [],
         y: [],
         line: {
          color: 'rgba (31, 119, 180, 1)', 
          dash: 'solid', 
          width: 1.5
         }, 
        mode: 'lines', 
        name: '--------', 
        type: 'scatter', 
        xaxis: 'x1', 
        yaxis: 'y1',
       };  // end of trace2
   var layout = {
      x: [],
      y: [],    
        title: "fft plot ",
        xaxis: {
        type: "scatter",
        showgrid: true,
        range: [0,20000],
        autorange: false,
        },
        yaxis: {
        type: "scatter",
        showgrid: true,
        range: [-100,100],
        autorange: false,
        showline: true,
        },
      height: 598,
      width: 1080,
      autosize: true,
      showlegend: true,
     } // end of layout
    console.log(data)
    trace2.x=realX
    trace2.y=realY
    var data = [trace2]
    Plotly.newPlot('fftdisplay',{data: data,layout:layout})
  },
}
function initialize() {
	console.log("initialize")
	$("#label4").hide()
	$("#fft").hide()
	sineWave.init()
  ffto.init()
}