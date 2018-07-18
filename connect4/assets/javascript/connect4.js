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
	$row:      "",
	createDisplay: function () {
		const $board = $("#board-display")
		for (let i=0;i<this.ROWS;i++){
			this.$row = $("<div>")
			.addClass("row")
			.attr('id','row'+i);
			console.log("add a row i = " +i)
	      for (let j=0;j<this.COLS;j++) {
	       const $col = $("<div>")
	       .addClass("col")
	       .attr('id','col'+i+j);
	       this.$row.append($col);
	      }
	      $board.append(this.$row);
       }
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