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
		$('#image1').attr('src','assets/images/door1.jpg')
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
		$('#image2').attr('src','assets/images/door2.jpg')
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
		$('#image3').attr('src','assets/images/door3.jpg')
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
var doorPicked = null
function yesNo() {
	var aa = 1
	var newPick = null
	var aa = $("input[name='yesno']:checked").val();
	console.log("answer is " + aa)
	$("#button2").prop('disabled',true)
	if (aa == "N") {
        if (doorPicked.contents=="goat") {
        	loses++;
        	$('#'+doorPicked.imageid).attr('src','assets/images/goat.jpg')
        	$("#ploses").text("loses " + loses)

        } else {
        	if (doorPicked.contents=="PRIZE") {
        		wins++
        		$('#'+doorPicked.imageid).attr('src','assets/images/car.jpg')
        		$("#pwins").text("wins " + wins)

        	}
        }
	}
	if (aa == "Y") {
		console.log("need switch logic")
		for (i=0;i<3;i++) {
			if ((doors[i].chosen != true) && (doors[i].opened!=true)) {
				newPick=doors[i]
				if (newPick.contents=="PRIZE"){
					wins++
					$("#pwins").text("wins " + wins)
                    $('#'+newPick.imageid).attr('src','assets/images/car.jpg')
				} else {
					loses++;
					$("#ploses").text("loses " + loses)
					$('#'+newPick.imageid).attr('src','assets/images/goat.jpg')

				}
			}
		}

	}
	setTimeout(function(){
    reset();
     }, 5000);
	 

}
function sleepo(sec) {
	setTimeout(function(){

}, 1000*sec);
return }
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
	   $("#dialog").text("You picked " + w.name)
	   doorPicked = w
	   findAChoice()
	   console.log('do the show')
	   $("#question").text(availableToShow[0].name + " has a goat do you want to switch?")
	   changeToGoatImage(availableToShow[0])
	   $("#button1").prop('disabled',true)
	   $('#makechoice').show()
	}   
}
function changeToGoatImage(w) {
	console.log("in changeToGoatImage " + w.imageid)
	w.opened = true
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
	console.log("in reset")
	for (j=0;j<3;j++){
		doors[j].reset()
	}
	setThePrize()
	$("#button2").prop('disabled',false)
	$("#button1").prop('disabled',false)
	$("#dialog").text("")
	$('#makechoice').hide()
}
