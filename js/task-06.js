const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, ()=>{

    if (inputEl.value.length >= inputEl.dataset.length){
        inputEl.className =`valid`
        console.log ( inputEl)
    }else if (inputEl.value.length < inputEl.dataset.length & inputEl.value.trim() !== ""){
    inputEl.className =`invalid`
    console.log ( inputEl)}
});

