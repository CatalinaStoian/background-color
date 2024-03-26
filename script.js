let colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];

let clickMeButton = document.querySelector(".click-me-button");
let container = document.querySelector(".container");
let containerTitleColor = document.querySelector(".container-title-color");
let i = 0;

let changeColor = () => {
    i++
    if(i === 5){
        i = 0;
    }
    container.style.backgroundColor = colors[i];
    containerTitleColor.innerText = colors[i];
};

clickMeButton.addEventListener("click", changeColor);