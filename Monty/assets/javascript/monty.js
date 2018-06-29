var wins
var loses
var door1 = {
	name: "door1",
	chosen: false,
	available: true,
	contents: "goat",
	imageid:  "image1",
	opened:   false,
	choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true,
		this.opened = false,
		$('#door1').attr('src','assets/images/door1.jpg')
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
	imageid:  "image2",
	opened:   false,
    choseMe:  function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true
		this.opened = false
		$('#door2').attr('src','assets/images/door2.jpg')
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
	imageid: "image3",
	opened:  false,
    choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
		this.available = true
		this.opened = false
		$('#door3').attr('src','assets/images/door3.jpg')
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
function yesNo() {
	var a =1

}
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
	   w.opened = true
	   $("#dialog").text("Door " + (ind+1) + " is picked" )
	   doorPicked = ind+1
	   findAChoice()
	   console.log('do the show')
	   $("#question").text(availableToShow[0].name + " has a goat do you want to switch")
	   changeToGoatImage(availableToShow[0])
	   $("#button1").prop('disabled',true)
	   $('#makechoice').show()
	}   
}
function changeToGoatImage(w) {
	console.log("in changeToGoatImage " + w.imageid)
	$('#'+w.imageid).attr('src','assets/images/goat.jpg')
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
	reset()
}
function reset() {
	for (j=0;j<3;j++){
		doors[j].reset()
	}
	setThePrize()
	$('#makechoice').hide()
	doorPicked = -1
}
