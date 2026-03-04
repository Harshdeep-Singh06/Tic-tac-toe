const box = document.querySelectorAll(".box");


let currentPlayer = "X"
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        if(this.innerText === ""){
          this.innerText = currentPlayer
          if(currentPlayer === "X"){
            currentPlayer = "O"
          }else{
            currentPlayer = "X"
          }
        }
    });
}