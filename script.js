const box = document.querySelectorAll(".box");


let currentPlayer = "X"
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(){
        console.log("box clicked");
    });
}