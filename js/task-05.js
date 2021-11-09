const inputField = document.querySelector(`#name-input`);
const nameElem = document.querySelector(`#name-output`);


inputField.addEventListener(`input`, () =>{ 
if (inputField.value.trim() === ''){
    nameElem.textContent = `Anonymous`;
   } else {
    nameElem.textContent = inputField.value
   }
   })
