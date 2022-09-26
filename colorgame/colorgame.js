var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode")

for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numSquares ) //generate all new colors
    pickedColor = pickColor();  // pick a new random color from array
    colorDisplay.textContent = pickedColor; // change colorDisplay to match picked color
    messageDisplay.textContent = ""
    this.textContent = "New Colors"
     //change colors of squares
    for (var i = 0; i < squares.length; i++){

        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }

        else{
        squares[i].style.display= "none";

        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function(){
    reset();
} )

colorDisplay.textContent = pickedColor;

 
for (var i = 0; i < squares.length; i++){
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){

        var clicked = this.style.backgroundColor;

        if(clicked === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clicked);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?"
        } 
        else{
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again!"
        }
    })
} 

function changeColors(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
      var arr = []
      for (var i = 0; i < num; i++){ 
        arr.push( randomColor())
      }
      return arr;
}

function randomColor(){
  var r =  Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b =  Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}



