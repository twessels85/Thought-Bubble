var d =  document.getElementById("bubbles");
var e = document.getElementById("expandBubble");

d.addEventListener("click", function(){
    console.log("clickSuccess");
    
    e.classList.toggle("bubbleOn");
    e.classList.toggle("bubbleOff");
});