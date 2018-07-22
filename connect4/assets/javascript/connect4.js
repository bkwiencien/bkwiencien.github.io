
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
   	    let resulto = ""
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
		resulto = this.aWinner()
		if (resulto != "none") {
			$("#status").html("<strong>" + resulto+ " wins game over</strong>")
			setTimeout((function() {  
              return board.gameOver(resulto);
              }), 1000);
		}
	},
   gameOver: function(w) {
   	 $("#status").html("<h2><strong>" + w + " wins game over</strong><h2>");
   	 $("#startbtn").attr("disabled","disabled")
   	 $("#startbtn").hide();
   	 if (w == 'red'){
   	 	$("#greencircle").hide();
   	 	$("#status").css('color','red');
   	 } else {
   	 	$("#redcircle").hide();
   	 	$("#status").css('color','green');
   	 }
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
      let k = 0;
      let winner = "none";
      let rinarow = 0;
      let ginarow = 0;
      let rincolumn = 0;
      let gincolumn = 0;
      let rlongest = 0;
      let glongest = 0;
      let current = "";
      let prev    = "";
      let firsttime = true;
      let teststr = "";
      let dd = new Date();
      // check by row
      for (let j=0;j<6;j++) {
      	rlongest = 0;
      	glongest = 0;
      	firsttime = true
      	for (let k=0;k<7;k++) {
      		let t = this.boardarray[j][k]
      		teststr = t.color
      		teststr = teststr.trim();
      		if (firsttime) {
      			prev = teststr;
      			current = teststr;
      			firsttime = false;
      			rinarow = 0
      			ginarow = 0
      		} else {
      			prev = current
      			current = teststr
      		}
      	    if (current=="red") {
      		  	 if (prev == "red") {
      		       rinarow++
      		     } else {
      		     	rinarow = 1;
      		     }  
      		  }
      		  if (rinarow > rlongest) {
      		  	rlongest = rinarow;
      		  }
      		  if ((current != 'red') & (prev =='red')) {
      		  	if (rinarow > rlongest) { 
      		  	  rlongest = rinarow;
      		  	}  
      		  	rinarow  = 0;
      		  }
      		  if (current=="green") {
      		  	 if (prev == "green") {
      		       ginarow++
      		     } else {
      		     	ginarow = 1;
      		     }  
      		  }
      		  if ((current != 'green') & (prev =='green')) {
      		  	if (ginarow > glongest){
      		  	  glongest = ginarow;
      		  	}  
      		  	ginarow  = 0;
      		  }
      		  if (rlongest >= 4) {
      		  	$("#status").text("game over red wins");
      		  	return('red');
      		  }	
              if (glongest == 4) {	
                return('green');
              }  
     }
        // console.log('for row ' + j + " rlongest " +rlongest+' glongest '+glongest);
      }
      // now check by column
      for (let j=0;j<7;j++) {
      	rlongest = 0;
      	glongest = 0;
      	firsttime = true
      	for (let k=0;k<6;k++) {
      		let t = this.boardarray[k][j]
      		teststr = t.color
      		if ((k == 0) & (teststr == 'red') & (j==5)) {
      			console.log('column 0 color is ' + teststr)
      		}
      		teststr = teststr.trim();
      		if (firsttime) {
      			prev = teststr;
      			current = teststr;
      			firsttime = false;
      			rincolumn = 0
      			gincolumn = 0
      		} else {
      			prev = current
      			current = teststr
      		}
            if (current=="red") {
      		  	 if (prev == "red") {
      		       rincolumn++
      		     } else {
      		     	rincolumn = 1;
      		     }  
      		  }
      		  if (rincolumn > rlongest) {
      		  	rlongest = rincolumn;
      		  }
      		  if ((current != 'red') & (prev =='red')) {
      		  	if (rincolumn > rlongest) { 
      		  	  rlongest = rincolumn;
      		  	}  
      		  	rincolumn  = 0;
      		  }
      		  if (current=="green") {
      		  	 if (prev == "green") {
      		       gincolumn++
      		     } else {
      		     	gincolumn= 1;
      		     }  
      		  }
      		  if ((current != 'green') & (prev =='green')) {
      		  	if (gincolumn > glongest){
      		  	  glongest = gincolumn;
      		  	}  
      		  	gincolumn  = 0;
      		  }
      		  if (rlongest >= 4) {
      		  	$("#status").text("game over red wins");
      		  	return('red');
      		  }	
              if (glongest >= 4) {	
                return('green');
              }  
     }
        if (j == 0) {
         console.log('for column ' + j + " rlongest " +rlongest+' glongest '+glongest);
        }
      }
      return(winner)
      // now check diagonals!!!
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
