
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
		this.color="white"
		this.open=true
		this.name = "col"+ir+ic
	},
    ROWS:  6,
	COLS:  7,
	boardarray: null,
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
   dropToken: function(col) {
   	    let row = 5
   	    let ccol = 0
   	    let t = null;
   	    let done = false
   	    let name = ""
		let player = players.currentPlayer;
		let temp = col.slice(4)
		ccol = parseInt(temp);
		for (let j=6;j>-1;j--){
			if (row > -1){
			   t = this.boardarray[row][ccol]
			   if ((t.color == 'white') & (done == false)){
			   	done = true;
			   	this.boardarray[row][ccol].color=player
			   	this.boardarray[row][ccol].open=false
			   	$("#"+t.name).css('background-color',player)
			   }	
		    }
			row = row -1
		}
		this.aWinner()
	},
   init: function() {
	    this.boardarray  = new Array(6);
	    for (var i=0;i<6;i++) {
	    	this.boardarray[i] = new Array(7);
	    }
	    for (var ii=0;ii<6;ii++) {
	    	for (var jj=0;jj<7;jj++) {
	    		var temp = new board.Cell(ii,jj);
	    		this.boardarray[ii][jj] = temp
	    	}
	    }
		this.createDisplay();
	},
	addListeners: function() {
      let array =['col00','col01','col02','col03','col04','col05','col06'];
      for (let i=0;i<array.length;i++) {
        $("#"+array[i]).bind('click',this.processClickOnCell);
      }
	},
	processClickOnCell: function() {
		let valid = true;
		let col = this.getAttribute('id');
		let ccol = this.getAttribute('style')
		if (ccol == null) {
		  board.dropToken(col);
		  players.switchPlayer()
	    } else {
	      $("#status").text("that column is full choose another")
	    }
  },		
  aWinner: function() {
      let j = 0;
      console.log('in aWinner')
	},
};
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
	getCurrentPlayer() {
		return(this.currentPlayer);
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
	console.log("initialize");
	board.init();
}
