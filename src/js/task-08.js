const form = document.querySelector('.login-form')
const handlerSubmitForm = e=>{
    e.preventDefault()
   if( (!form.elements.email.value)||(!form.elements.password.value)){
    return alert('Заповніть усі елементи форми')
   }
    console.log({[form.elements.email.name]:form.elements.email.value,
        [form.elements.password.name]:form.elements.password.value})    
    form.reset()};
 
form.addEventListener('submit', handlerSubmitForm)