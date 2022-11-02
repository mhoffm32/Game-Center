//red for x and black for o
//add turns so x and then o goes or only one square can be pressed at a time
let squares = document.getElementsByClassName("square");
//change

function timeFunction(z) {
            setTimeout(function(){ alert( z + " is the winner!"); }, 600);
}

function setAnswer(){
    for(button of squares){
        if(button.innerText != ""){
            button.removeEventListener("click", display);
        }
    }
}

function submit(){
    setAnswer();

    if(c1.innerText != ""){
        if(c1.innerText == c2.innerText){
            if(c2.innerText == c3.innerText){
                timeFunction(c1.innerText)
            }
        }
    } 
    if(c4.innerText != ""){
        if(c4.innerText == c5.innerText){
            if(c5.innerText == c6.innerText){
                timeFunction(c4.innerText)
            }
        } 
    }
     if(c7.innerText != ""){
        if(c7.innerText == c8.innerText){
            if(c8.innerText == c9.innerText){
                timeFunction(c8.innerText)
            }
        } 
    }
    if(c1.innerText != ""){
        if(c1.innerText == c4.innerText){
            if(c4.innerText == c7.innerText){
                timeFunction(c7.innerText)
            }
        } 
    }
    if(c2.innerText != ""){
        if(c2.innerText == c5.innerText){
            if(c5.innerText == c8.innerText){
                timeFunction(c8.innerText)
            }
        } 
    }
    if(c3.innerText != ""){
        if(c3.innerText == c6.innerText){
            if(c6.innerText == c9.innerText){
                timeFunction(c3.innerText)
            }
        } 
    }
    if(c1.innerText != ""){
        if(c1.innerText == c5.innerText){
            if(c5.innerText == c9.innerText){
                timeFunction(c1.innerText)
            }
        } 
    }
    if(c3.innerText != ""){
        if(c3.innerText == c5.innerText){
            if(c5.innerText == c7.innerText){
                timeFunction(c5.innerText)
            }
        } 
    }
}


function clear(){
    for(button of squares){
    button.innerText = "";
    }
    for(button of squares){
    button.addEventListener("click",display);
    }
}

function display(){

     if (this.innerText === "") {
        this.innerText = "X";
        this.style.color = "red";
     }
    else if (this.innerText === "X") {
        this.innerText = "O";
        this.style.color = "black";
        }
    else if (this.innerText === "O") {
        this.innerText = "";
        }
}


for(button of squares){
    button.addEventListener("click",display);
}
clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click",clear);

submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",submit)


/*


//c1,c2,c3
//c4,c5,c6
//c7,c8,c9
//c1,c4,c7
//c2,c5,c8
//c3,c6,c9
//c1,c5,c9
//c3,c5,c7
*/
