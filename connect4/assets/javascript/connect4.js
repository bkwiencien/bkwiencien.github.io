var board = {
	cell: {
		row:   -1,
		col:   -1,
        color: 'white',
        name:  "",
        open:   true,
	},
	Cell: function(ir,ic) {
		this.row = ir;
		this.col = ic;
		this.name = "cell-"+ir+"-"+ic
	},
    ROWS:  6,
	COLS:  7,
	rarray:  [],
	carray:  [],
	boardarray: [],
	createDisplay: function () {

	},
	init: function() {
		console.log('in board init');
		this.rarray = [];
		this.carray = [];
		for (let j=0;j<this.ROWS;j++) {
			for (let k=0;k<this.COLS;k++) {
			  var cello = new this.Cell(j,k);
		      this.boardarray.push(cello);
		   }
		}
		console.log(this.boardarray)
		this.createDisplay();
	},
}
function initialize() {
	console.log("initialize")
	board.init()
}