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
		this.rarray = [];
		this.carray = [];
		for (let j=0;j<this.ROWS;j++) {
			for (let k=0;k<this.COLS;k++) {
			  var cello = new this.Cell(j,k);
		      this.boardarray.push(cello);
		   }
		}
		this.createDisplay();
		console.log('leaving init')
	},
}
var players = {
	init: function() {
		this.player1.positions = [];
		this.player2.positions = [];
	},
	player1:  {
		color: 'red',
		positions: [],
	},
	player2:  {
		color: 'green',
		positions: [],
	},
};
function starto() {
	console.log('in starto');
	board.init()
	players.init()
	console.log('in starto after initzzzzzzzzzzzzzz')
}
function initialize() {
	console.log("initialize")
	board.init()
}