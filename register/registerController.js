export const registerController = (registerForm) => {
    registerForm.addEventListener("submit",(event) =>  {validateForm(event, registerForm)});
}

const validateForm = (event, registerForm) => {
    event.preventDefault();

    const email = registerForm.querySelector('#email');
    const password = registerForm.querySelector('#password');
    const passwordConfirm = registerForm.querySelector('#password-confirm');

    if(isFormValid(email, password, passwordConfirm)){
        createUser(email, password)
    };
};

const isFormValid = (email, password, passwordConfirm) => {
    const emailValidation = isEmailValid(email);
    const passwordValidation =  isPasswordValid(password, passwordConfirm);
    return emailValidation && passwordValidation;
};

const isEmailValid = (email) => {
    // Utiliza una expresión regular para verificar el formato del correo electrónico
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let result = true
    if(!emailRegExp.test(email.value)){
        alert('El email no es correcto')
        result = false;
    };
    return result
};

const isPasswordValid = (password, passwordConfirm) => {
    let result = true;
    if(password.value !== passwordConfirm.value){
        alert('Las contraseñas no son iguales')
        result = false
    };
    return result;
};