let colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];

let clickMeButton = document.querySelector(".click-me-button");
let container = document.querySelector(".container");
let containerTitleColor = document.querySelector(".container-title-color");
let numberOfClicks = document.querySelector('.numeber-of-clicks');
let resetButton = document.querySelector('.reset-button');


let i = 0;

let changeColor = () => {
    i++
    if(i === 5){
        i = 0;
    }
    container.style.backgroundColor = colors[i];
    containerTitleColor.innerText = colors[i];
};

let clickCount = 0;
let updateCounter = () => {
    numberOfClicks.textContent = clickCount;
};
clickMeButton.addEventListener('click', function(){
    clickCount++;
    updateCounter();
} );

resetButton.addEventListener('click', function(){

    location.reload();
});

clickMeButton.addEventListener("click", changeColor);