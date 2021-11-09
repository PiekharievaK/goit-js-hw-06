function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 

const colorBtn = document.querySelector(`button.change-color`);
const colorOutput = document.querySelector(`.color`);


colorBtn.addEventListener(`click`, ()=>{
  const pickColor = getRandomHexColor();
  
  document.body.style.backgroundColor = pickColor;
  colorOutput.textContent = pickColor;
})