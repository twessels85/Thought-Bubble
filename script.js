var d =  document.getElementById("bubbles");
var e = document.getElementById("expandBubble");
var quote = document.getElementById("quote");
var count = 0; 

d.addEventListener("click", function(clicked){
    curr = clicked.target;
    if(curr !== d){
        e.classList.toggle("bubbleOn");
        e.classList.toggle("bubbleOff");
        curr.classList.toggle("bubbleOff");
    }
    
});

e.addEventListener("click", function(){
    e.classList.toggle("bubbleOff");
    e.classList.toggle("bubbleOn");
});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("newThought");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
