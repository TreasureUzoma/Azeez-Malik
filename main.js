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
var words = [
  'Hi I\'m a UI/UX designer. ',
  'I design apps and websites.',
  'I create professional eye catchy designs.',
  'I take brands to the next level.'
];
var part;
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 15;
var speed = 70;

var wordflick = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector('.word').textContent = part;
  }, speed);
};

window.addEventListener('DOMContentLoaded', function() {
  wordflick();
});


 // Function to scroll the marquee

    function copyToClipboard() {
      // Create a text area element and set its value to the text you want to copy
      var textToCopy = "lightmalik36@gmail.com";
      var textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Append the text area to the document
      document.body.appendChild(textArea);

      // Select the text in the text area
      textArea.select();

      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Remove the text area from the document (optional)
      document.body.removeChild(textArea);

      // Provide feedback to the user (optional)
      alert("Email address copied to clipboard: " + textToCopy);
    }
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