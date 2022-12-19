let textScreen = [];
var textDisplay = textScreen.join("");
var showResult = false;

$(".num").on("click", function(){
    console.log(this.id);
    $(this).addClass("pressed");
    setTimeout(() => {
        $(this).removeClass("pressed")
    }, 100)
    
    if (this.id === "1" || this.id === "2" || this.id ==="3" || this.id === "4" || this.id === "5" || this.id ==="6" || this.id === "7" || this.id === "8" || this.id ==="9" || this.id =="0"){
        textScreen.push(this.id);
        var textDisplay = textScreen.join("");
        $(".screen").text(textDisplay);
    

    } else if (this.id === "d"){
        if (showResult === false){
            textScreen.pop();
        } else {
    
            textScreen = [];
            showResult = false;
        }
        console.log(showResult);
        var textDisplay = textScreen.join("");
        $(".screen").text(textDisplay);
        if (textScreen.length === 0){
            $(".screen").text("Enter a number");
            $("body").css("background-color", "#22A39F");
        }
    } else if (this.id === "+" || this.id === "-" || this.id ==="/" || this.id ==="*"){
        if (textScreen.length === 0){
            $(".screen").text("Enter a number");

        } else {
            textScreen.push(this.id);
            var textDisplay = textScreen.join("");
            $(".screen").text(textDisplay);
            }
            
        }
        
     else if (this.id === "equals"){
        if (textScreen.length > 0){
            var textDisplay = textScreen.join("")
            solve(textDisplay);
            textScreen = [];
        }
    }
    else if (this.id === "c"){
        textScreen = [];
        showResult = false;
        var textDisplay = textScreen.join("");
        $(".screen").text("Enter a number");
        $("body").css("background-color", "#22A39F"); 
        clear();
    }   
    else if(this.id ==="p"){
        
        textScreen.push(".");
        var textDisplay = textScreen.join("");
        $(".screen").text(textDisplay); 
    }
});



function solve(operation){
    if (textScreen.length > 0) {
    $("body").css("background-color", "#3dafab");
    }
    try {
        var result = eval(operation).toFixed(2);
        $(".screen").text(result);
        showResult = true;
        equals();
            
    } catch {
        $(".screen").text("Error");
        textScreen = [];
        showResult = true;
        error();
    }
    

}


function error(){
    audio = new Audio("sounds/wrong.mp3");
    audio.play();
}
function equals(){
    audio = new Audio("sounds/green.mp3");
    audio.play();
}
function clear(){
    audio = new Audio("sounds/yellow.mp3");
    audio.play(); 
}
