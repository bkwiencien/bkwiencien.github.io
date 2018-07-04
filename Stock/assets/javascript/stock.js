function grapho() {
	console.log("grapho entered")
}
function initialize() {
	console.log("initialize")
}
$(".grid-item").on("click",function(){
	console.log($(this).attr("id"))
})