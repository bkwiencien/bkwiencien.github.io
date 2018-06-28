var wins
var loses
var door1 = {
	name: "door1",
	chosen: false,
	contents: "goat",
	choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
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
	contents: "goat",
    choseMe:  function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
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
	contents: "goat",
    choseMe: function() {
		this.chosen = true
	},
	reset: function() {
		this.chosen = false
		this.contents = "goat"
	},
	setPrize: function() {
		this.contents="PRIZE"
	},
	getContents: function(){
		return(this.contents)
	}
}
var doors = [door1,door2,door3]
function btnPress() {
	//alert('pressed the button')
	$('#dialog').text("hello")
}
function setThePrize() {
	var n = parseInt((Math.random()*100)%3)
	var w = doors[n]
	w.setPrize()
}
function initialize() {
	wins = 0
	loses = 0
	for (j=0;j<3;j++){
		doors[j].reset()
	}
	setThePrize()
}
