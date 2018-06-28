var wins
var loses
var door1 = {
	name: "door1",
	chosen: false,
	contents: "goat",
	choseMe: function() {
		self.chosen = true
	},
	reset: function() {
		self.chosen = false
		self.contents = "goat"
	}
}
var door2 = {
	name: "door2",
	chosen: false,
	contents: "goat",
    choseMe:  function() {
		self.chosen = true
	},
	reset: function() {
		self.chosen = false
		self.contents = "goat"
	}
}
var door3 = {
	name: "door3",
	chosen: false,
	contents: "goat",
    choseMe: function() {
		self.chosen = true
	},
	reset: function() {
		self.chosen = false
		self.contents = "goat"
	}
}
var doors = [door1,door2,door3]
function initialize() {
	wins = 0
	loses = 0
	for (j=0;j<3;j++){
		doors[j].reset()
	}
}
