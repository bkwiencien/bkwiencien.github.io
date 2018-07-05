function grapho() {
	console.log("grapho entered")
}
function initialize() {
	console.log("initialize")
	localStorage.removeItem("Name")
	localStorage.removeItem("symbol")
}
$(".grid-item").on("click",function(){
	var param=$(this).attr("id")
	console.log(param)
	var name = param.split(":")[0]
	var symbol = param.split(":")[1]
	localStorage.setItem("symbol",symbol)
	localStorage.setItem("Name",name)
	console.log("name = " + name + " symbol = " + symbol)
	window.open("plot.html")
})