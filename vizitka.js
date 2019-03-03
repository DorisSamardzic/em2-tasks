document.querySelector("#frontSide").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#backSide").className = "flip flip-frontSide";
    document.querySelector("#frontSide").className = "flip flip-backSide";  
},
false);

document.querySelector("#backSide").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("backSide").className = "flip";
document.getElementById("frontSide").className = "flip";
},
false);

document.querySelector("#facebook").addEventListener("click", function(){
    window.location.href = "https://www.facebook.com/doris.samardzic";
})

document.querySelector("#instagram").addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/doris_samardzic/?hl=hr";
})

document.querySelector("#linkedin").addEventListener("click", function(){
    window.location.href = "https://www.linkedin.com/in/doris-samard%C5%BEi%C4%87-540120181/";
})