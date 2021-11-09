const formField = document.querySelector(`.login-form`);
const emailField = formField.querySelector(`[type="email"]`);
const passwordField = formField.querySelector(`[type="password"]`);

formField.addEventListener(`submit`, submitForm)

const formData = {};

    function submitForm(event) {
        event.preventDefault();
        
    const element =event.currentTarget.elements;
            
        if( emailField.value === "" || passwordField.value === "" ){
        return alert(`Вы заполнили не все поля`);
        } else {
       formData[`${emailField.name}`] = `${element.email.value}`;
              
       formData[`${passwordField.name}`] = `${element.password.value}`;
          
           event.currentTarget.reset() 
           console.log(formData);
        };
    }
   