// Create a new list item when clicking on the "Add" button
function addMessage() {
  var list = document.createElement("li");
  var inputMessage = document.getElementById("input").value;
  var textNode = document.createTextNode(inputMessage);
  list.appendChild(textNode);
  if (inputMessage === "") {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(list);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  list.appendChild(span);

  for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var list = document.getElementsByTagName("li");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeButton = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function hideAll() {
  //var listNodes = document.getElementsByTagName("ul");
  var listNodes = document.getElementsByClassName("list");
  var i;
  for (i = 0; i < listNodes.length; i++) {
    listNodes[i].style.visibility = "hidden";
  }
}

function showAll(){
  var listNodes = document.getElementsByClassName("list");
  var i;
  for (i = 0; i < listNodes.length; i++) {
    listNodes[i].style.visibility = "visible";
  }
}

function removeAll(){
  var bool = confirm("Are you sure you want to remove all messages?");
  if(bool){
    var listNodes = document.getElementById("ul");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
  }
}
