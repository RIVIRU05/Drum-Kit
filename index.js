//checks for keyboard input

document.addEventListener("keydown",function(event){;
     makesound(event.key);

})


//checks for mouse input
var numofbut = document.querySelectorAll(".drum").length;
for (var i = 0; i<numofbut ; i++){

    document.getElementsByClassName("drum")[i].addEventListener("click", getClicked)
    function getClicked(){
        this.style.color = ("white")
        var clickedButton = this.innerHTML
        makesound(clickedButton)
        
                
        }
}
//make sound
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio ("tom-1.mp3");
            tom1.play()
        break;
        case "a":
            var tom2 = new Audio  ("tom-2.mp3");
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio  ("tom-3.mp3");
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio  ("tom-4.mp3");
            tom4.play()
            break;
        case "j":
            var kick = new Audio  ("kick-bass.mp3");
            kick.play()
            break;                
        case "k":
            var crash = new Audio ("crash.mp3");
            crash.play()
            break; 
        case "l":
            var snare = new Audio ("snare.mp3");
            snare.play()
            break; 
        default:
            console.log(this.innerHTML)}}