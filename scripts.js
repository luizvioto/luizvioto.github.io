const container = document.querySelector("#container");
const view = document.querySelector("#view");
const body = document.querySelector("body");
const canvasSize = document.querySelector("#canvasSize");
const less = document.querySelector("#less");
const more = document.querySelector("#more");
const clear = document.querySelector("#clear");
const colorInput = document.querySelector("#colorInput");
const colorButton = document.querySelector("#colorButton");
const presetsDiv = document.querySelector("#presetsDiv");
let boxes;
let colorUsed = "black";

let size = 16;
canvasSize.textContent = size;
let flag = false;

createCanvasBoxes(size);

view.addEventListener("mousedown", (e) => {
    e.preventDefault();
    flag = true;
});

body.addEventListener("mouseup", () => {
    flag = false;
});

less.addEventListener("click", () => {
    if(size-1 <=0) return;
    size = size - 1;
    removeCanvasBoxes();
    createCanvasBoxes(size);
    canvasSize.textContent = size;
});

more.addEventListener("click", () => {
    if(size+1 >= 100) return;
    size = size + 1;
    removeCanvasBoxes();
    createCanvasBoxes(size);
    canvasSize.textContent = size;
});

clear.addEventListener("click", () => {
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = "white";
    }
});

presetsDiv.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "whiteButton":
            colorUsed = "white";
            break;
        case "blackButton":
            colorUsed = "black";
            break;
        case "redButton":
            colorUsed = "red";
            break;
        case "orangeButton":
            colorUsed = "orange";
            break;
        case "yellowButton":
            colorUsed = "yellow";
            break;
        case "greenButton":
            colorUsed = "green";
            break;
        case "blueButton":
            colorUsed = "blue";
            break;
    }
});

colorButton.addEventListener("click", () => {
    colorUsed = colorInput.value;
    colorInput.value = "";
});

function removeCanvasBoxes(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function createCanvasBoxes(size){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "box");
            newDiv.setAttribute("draggable", false);

            newDiv.style.width = (550/size) + "px";
            newDiv.style.height = (550/size) + "px";

            newDiv.addEventListener("mousedown", (e) => {
                e.preventDefault();
                flag = true;
                newDiv.style.backgroundColor = colorUsed;
            });

            newDiv.addEventListener("mousemove", () => {
                if(flag){
                    newDiv.style.backgroundColor = colorUsed;
                }
            });

            newDiv.addEventListener("mouseup", () => {
                flag = false;
            });

            container.appendChild(newDiv);        
        }
    }
    boxes = document.querySelectorAll(".box");
}

