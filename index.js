var numberOfDrumButtons=document.querySelectorAll(".drum").length;
//Detecting Mouse clicks
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}; 
 //Detecting Keyboard Presses
 
document.addEventListener("keydown",function(event){

makeSound(event.key);
buttonAnimation(event.key);
        
})
   



function makeSound(key){
    switch(key){
        case "w":
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
            case "a":
                var audio2=new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;
                case "s":
        var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
            
            case "d":
            var audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
            case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
            case "k":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
            case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

            default:
                console.log(buttonInnerHTML);

    }

}

function buttonAnimation(currentkey){

    var activeButton= document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);


}
