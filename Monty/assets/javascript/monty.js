var wins
var loses
var door1 = {
	name: "door1",
	chosen: false,
	available: true,
	contents: "goat",
	choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true
	},
	setPrize: function(){
		this.contents="PRIZE"
	},
	getContents: function(){
		return(this.contents)
	}
}
var door2 = {
	name: "door2",
	chosen: false,
	available: true,
	contents: "goat",
    choseMe:  function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true
	},
	setPrize: function() {
		this.contents="PRIZE"
	},
	getContents: function(){
		return(this.contents)
	}
}
var door3 = {
	name: "door3",
	chosen: false,
	available: true,
	contents: "goat",
    choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true
	},
	setPrize: function() {
		this.contents="PRIZE"
	},
	getContents: function(){
		return(this.contents)
	}
}
var doors = [door1,door2,door3]
var availableToShow = []
var doorWithPrize = -1
var doorPicked = -1
function btnPress() {
	var vall=null
	var ind = -1
	var radioValue = $("input[name='checko']:checked").val();
	ind = parseInt(radioValue)
	ind--;
	if (isNaN(ind)){
		$("#dialog").text("You must chose a door")
    } else {		
	   var w = doors[ind]
	   console.log("ind = " + ind)
	   w.choseMe()
	   $("#dialog").text("Door " + (ind+1) + " is picked" )
	   doorPicked = ind+1
	   findAChoice()
	}   
}
function findAChoice() {
	for (j=0;j<3;j++) {
		w=doors[j]
		if ((w.contents=='goat') && (w.chosen==false)) {
			availableToShow.push(w)
			console.log("available is " + w.name)

	}
	

}
}
function setThePrize() {
	var n = parseInt((Math.random()*100)%3)
	var w = doors[n]
	w.setPrize()
	console.log("doorWithPrize is " + w.name)
	doorWithPrize = n+1
}
function initialize() {
	wins = 0
	loses = 0
	for (j=0;j<3;j++){
		doors[j].reset()
	}
	setThePrize()
	$('#makechoice').hide()
	doorWithPrize = -1
	doorPicked = -1
}
