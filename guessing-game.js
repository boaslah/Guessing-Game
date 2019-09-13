// Declearation of variables

var randomNumber = getRandomNumber(); 
var numGuess = document.getElementById("userInput");
var container =  document.getElementById("container");
var container2 =  document.getElementById("container2");
var container3 =  document.getElementById("container3");
var result = document.getElementById("result");
var numOfChances = document.getElementById("numOfChances");
var faild = document.getElementById("faild");
numOfChances.value = 10;

function getRandomNumber () {
    return Math.floor(Math.random() * 100); 
}

// Play now function 
function playNow(){

    container2.style.display  = "none";
    container.style.display = "block";
}

// Resart function
function restart(){

    randomNumber = getRandomNumber(); 
    numOfChances.value = 10;
    result.innerHTML = " ";
   
}

// Play again function
function playAgain(){

    randomNumber = getRandomNumber();
    result.innerHTML = " ";
    numOfChances.value = 10;
    container.style.display  = "block";
    container3.style.display = "none";
}

// Function to clare the show result element
function clare() {
    result.innerHTML = "";
}

// Enter key function
function enterKey(){

    if(event.keyCode == 13)
    {
        guess();
    }
}

// function that handles the 
function guess(){
    if(numGuess.value == 0){
        alert("Please enter a valid number")
    } else if (numGuess.value != 0){

        if (numGuess.value > randomNumber){
            result.innerHTML = "Too high";
            numOfChances.value -= 1;

        } else if(numGuess.value < randomNumber){

            result.innerHTML = "Too low";
            numOfChances.value -= 1;

        } else {
            container3.style.display = "block"
            container.style.display = "none"
            faild.innerHTML = " You got the random number " + randomNumber + " " + "correct";
        }

        if(numOfChances.value  == 0){
            container3.style.display = "block"
            container.syle.display = "none"
            faild.innerHTML = " You faild, the random number is" +  " " + randomNumber;  
        }
    }
        
    numGuess.value = " ";
}
