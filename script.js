var d =  document.getElementById("bubbles");
var e = document.getElementById("expandBubble");

d.addEventListener("click", function(){
    e.classList.toggle("bubbleOn");
    e.classList.toggle("bubbleOff");
});

e.addEventListener("click", function(){
    e.classList.toggle("bubbleOff");
    e.classList.toggle("bubbleOn");
});

