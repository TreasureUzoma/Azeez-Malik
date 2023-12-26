function menu(){
var x = document.getElementById("mi")
x.style.display = "block"
var y = document.getElementById("scrollButton")
y.style.display ="none"
var z = document.getElementById("mc")
z.style.display ="block"
}
function menuc() {

var x = document.getElementById("mi")
x.style.display = "none"
var y = document.getElementById("scrollButton")
y.style.display ="block"
var z = document.getElementById("mc")
z.style.display ="none"
}

 // Function to scroll the marquee


  function scrollBtn(){
   var targetDiv = document.getElementById("project");
  // Scroll to the targetDiv's top position
  window.scrollTo({
    top: targetDiv.offsetTop,
    behavior: "smooth" // Smooth scrolling
  });
  var x = document.getElementById("mi")
x.style.display = "none"
var y = document.getElementById("scrollButton")
y.style.display ="block"
var z = document.getElementById("mc")
z.style.display ="none"
}
function scrollBtn2(){
   var targetDiv = document.getElementById("case");
  // Scroll to the targetDiv's top position
  window.scrollTo({
    top: targetDiv.offsetTop,
    behavior: "smooth" // Smooth scrolling
  });
  var x = document.getElementById("mi")
x.style.display = "none"
var y = document.getElementById("scrollButton")
y.style.display ="block"
var z = document.getElementById("mc")
z.style.display ="none"
}