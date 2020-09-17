// mouse Press

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  // document.querySelectorAll(".drum")[i].addEventListener("click", function(){ alert("Yeah i've done it")});
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //change the color of the innerHTML
    // this.style.color = "blue";

    var buttonInnerHtml = this.innerHTML;
    buttonKey(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

  });
}

// Keybord Press

document.addEventListener("keydown", function(event) {
  //console.log(event.key);
  buttonKey(event.key);
  buttonAnimation(event.key);
})

// Creating Sounds

function buttonKey(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "W":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "A":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "S":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "D":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "J":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "K":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "L":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("Press Wrong key");
  }
}


// Button Animaion

function buttonAnimation(pressedKey) {

  var activeButton = document.querySelector("." + pressedKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
