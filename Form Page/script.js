const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e) =>  {
    e.preventDefault();

    validateInputs();
})

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const CpassowrdValue = cPassword.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is Required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is Required');
    }else if (!isValidEmail(emailValue)){
        setError(email,'Provide Valid Email Address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Password is Required');
    }else if(passwordValue.length < 8) {
        setError(password,'Password should be atleast 8 Characters');
    }else{
        setSuccess(password);
    }

    if(CpassowrdValue === ''){
        setError(cPassword,'Password is Required');
    }else if(CpassowrdValue !== passwordValue){
        setError(cPassword,'Password is not Matching');
    }else{
        setSuccess(cPassword);    
    }
}

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

function isValidEmail(e){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e)
}


