//let circles = document.getElementsByClassName("circles");

//add a submit setting
//and alternate between colours

//make it so that they can only change one at a time 

let column1 = document.getElementsByClassName('circles1');

for(button of column1){
    button.addEventListener('click', chip);
}


function chip(){
    let clicked = true;

    do{

     if(this.nextElementSibling === null){
         if (this.style.backgroundColor === "white"){
            this.style.backgroundColor = "red";
            }
            else if (this.style.backgroundColor === "red"){
                this.style.backgroundColor = "yellow";
            }
            else if (this.style.backgroundColor === "yellow"){
                this.style.backgroundColor = "white"
            }

        }

     if(this.nextElementSibling.style.backgroundColor != 'white'){
            if (this.style.backgroundColor === "white"){
                this.style.backgroundColor = "red";
            }
            else if (this.style.backgroundColor === "red"){
                this.style.backgroundColor = "yellow";
            }
            else if (this.style.backgroundColor === "yellow"){
                this.style.backgroundColor = "white"
            }
        }

     }while(clicked)
}