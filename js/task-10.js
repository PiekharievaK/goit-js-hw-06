function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesControls = document.querySelector(`#controls`);
const boxesCreate = boxesControls.querySelector(`input`)
const addBtn =  boxesControls.querySelector(`[data-create]`);
const resetBtn = boxesControls.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector(`#boxes`);

boxesDiv.classList.add(`boxes-div`)

resetBtn.addEventListener(`click`, () => { boxesDiv.innerHTML = ""; boxesCollection.length = 0;} )
addBtn.addEventListener(`click`, createBoxes)

const boxesCollection = []

function createBoxes() {
 let pixels = 30;
  for (let i = 0; i < boxesCreate.value; i += 1) {
    const box = document.createElement(`div`);
    pixels += 10;

    box.style.width = `${pixels}px`;
    box.style.height = `${pixels}px`
     box.style.margin =`10px`
     box.style.border = `1px solid black`
    box.style.backgroundColor = getRandomHexColor();
  
   
   
    boxesCollection.push(box)
    boxesDiv.append(...boxesCollection)
  }
}


