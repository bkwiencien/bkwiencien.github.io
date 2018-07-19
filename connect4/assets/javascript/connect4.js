
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
		this.name = "coll-"+ir+"-"+ic
	},
    ROWS:  6,
	COLS:  7,
	rarray:  [],
	carray:  [],
	boardarray: [],
	$row:      "",
	gamePlayed: false,
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
	},
}
var players = {
	currentPlayer: "",
	init: function() {
		this.player1.positions = [];
		this.player2.positions = [];
	},
	setCurrentPlayer: function(pcode){
		if ((pcode != 'green')& (pcode != 'red')) {
			alert('invalid player')
			return;
		}
		this.currentPlayer=pcode;
		if (this.currentPlayer == 'red') {
			$("#redcircle").show();
			$('#greencircle').hide();
		} else {
			$("#greencircle").show();
			$("#redcircle").hide();
		}
	},
	starto: function() {
		console.log('in starto');
		if (players.gamePlayed) {
	      board.init()
	    }  
       players.init()
	   $("body").css("cursor", "progress");
	   $("#status").text("red's move")
	    players.setCurrentPlayer('red');
	},
	setListeners: function() {
       let g = 0;
       console.log('in setListeners')
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
function initialize() {
	console.log("initialize")
	board.init()
	//$("#startbtn").on("click",players.starto());
}
