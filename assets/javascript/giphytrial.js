
var thingToLookFor = "";
var response;
var topics = ["homer","batman","simpsons","super man","futurama"];
var nonMovingImages = [];
var movingImages = [];
var gif0 = {
     id:  "gif0",
     state:  "s",
     rating:  "",
     staticGif:  "",
     activeGif:  ""
};
var gif1 = {
     id:  "gif1",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif2 = {
     id:  "gif2",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif3 = {
     id:  "gif3",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif4 = {
     id:  "gif4",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif5 = {
     id:  "gif5",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif6 = {
     id:  "gif6",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif7 = {
     id:  "gif7",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif8 = {
     id:  "gif8",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var gif9 = {
     id:  "gif9",
     state:  "s",
     rating: "",
     staticGif:  "",
     activeGif:  ""
};
var arrayOfGifs = [gif0,gif1,gif2,gif3,gif4,gif5,gif6,gif7,gif8,gif9];
function searchFor() {
  thingToLookFor = $("#forma").val();
  var buttonContainer = document.getElementById("buttonsection");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.value = thingToLookFor;
  newButton.setAttribute("class","button");
  newButton.setAttribute("onclick","clickHandler("+ "'" + thingToLookFor + "')");
  buttonContainer.append(" ");
  topics.push(thingToLookFor);
  if (thingToLookFor.length > 0) {
     buttonContainer.appendChild(newButton);
  }   
}
function clickHandler(param) {
  var headOfUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var tailOfUrl = "&api_key=dc6zaTOxFJmzC&limit=10";
  var stringToUse = removeSpaces(param);
  var queryURL = headOfUrl + stringToUse + tailOfUrl;
  $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
       removeImages();
      for (i=0;i<response.data.length;i++) {
        var w = arrayOfGifs[i];
        var pic = document.createElement("img");
        pic.setAttribute("id","gif"+i);
        var picUrl = response.data[i].images.original_still.url;  
        w.staticGif = response.data[i].images.original_still.url;
        w.activeGif = response.data[i].images.downsized.url;
        pic.src=picUrl;
        pic.setAttribute("value","i");
        pic.setAttribute("onclick","changeImage(" + "'" + w.id + "')");
        $("#displaysection").append(pic);       
      }
    });
}
function initialize() {
  for (j=0;j<topics.length;j++) {
     var buttonContainer = document.getElementById("buttonsection");
     var newButton = document.createElement("input");
     newButton.type = "button";
     newButton.value = topics[j];
     newButton.setAttribute("class","button");
     newButton.setAttribute("onclick","clickHandler("+ "'" + topics[j] + "')");
     buttonContainer.append(" ");  
     buttonContainer.appendChild(newButton);
  }
}
function removeSpaces(stringin){
  var stringToReturn =  stringin.trim();
  stringToReturn = stringToReturn.replace(/\s/g, '+');
  return(stringToReturn);
}
function removeImages() {
  $("#displaysection").empty();
}
function changeImage(calledBy) {
  var index = 0;
  var idstring = "#"+calledBy;
  if (calledBy == "gif0") index = 0;
  if (calledBy == "gif1") index = 1;
  if (calledBy == "gif2") index = 2;
  if (calledBy == "gif3") index = 3;
  if (calledBy == "gif4") index = 4;
  if (calledBy == "gif5") index = 5;
  if (calledBy == "gif6") index = 6;
  if (calledBy == "gif7") index = 7;
  if (calledBy == "gif8") index = 8;
  if (calledBy == "gif9") index = 9;
  var w = arrayOfGifs[index];
  if (w.state == "s") {
    w.state = "a";
    $("#"+calledBy).attr("src",w.activeGif);
  } else   {
  if (w.state == "a") 
     w.state = "s";
    $("#"+calledBy).attr("src",w.staticGif);

  }
}