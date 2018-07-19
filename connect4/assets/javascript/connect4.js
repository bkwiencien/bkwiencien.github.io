
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
	addListeners: function() {
      let array =['col00','col01','col02','col03','col04','col05','col06'];
      for (let i=0;i<array.length;i++) {
      	console.log("#"+array[i]);
       // debugger;
        $("#"+array[i]).bind('click',this.processClickOnCell);
      }
	},
	processClickOnCell: function() {
		console.log('in process click on cell ' + this.getAttribute('id'));
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
	switchPlayer: function() {
		if (this.currentPlayer == 'red') {
			this.currentPlayer = 'green';
			$("#greencircle").show();
			$("#redcircle").hide();
			$("#status").text("green's move")
		} else {
			this.currentPlayer = 'red';
			$("#greencircle").hide();
			$("#redcircle").show();
			$("#status").text("red's move")
		}
	},
	starto: function() {
		console.log('in starto');
		if (players.gamePlayed) {
	      board.init()
	    }  
       players.init()
	   $("#status").text("red's move")
	    players.setCurrentPlayer('red');
	    board.addListeners()
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
