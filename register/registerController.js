import { createUser } from "./registerModel.js";
import {dispatchEvent} from "../utils/dispatchEvents.js"

export const registerController = (registerForm) => {
    registerForm.addEventListener("submit", (event) =>  {validateForm(event, registerForm)});
}

const validateForm = async (event, registerForm) => {
    event.preventDefault();

    const email = registerForm.querySelector('#email');
    const password = registerForm.querySelector('#password');
    const passwordConfirm = registerForm.querySelector('#password-confirm');

    try {

        dispatchEvent('startRegisterUser', null, registerForm)

        if (isFormValid(email, password, passwordConfirm)) {
            await createUser(email.value, password.value);
            dispatchEvent('userCreated', {
                type: "success",
                message: 'Usuario creado correctamente',
            }, registerForm);
            window.location = './login.html';
        }
    } catch (error) {
        dispatchEvent('userCreated', {
            type: "error",
            message: error,
        }, registerForm);
        setTimeout(()=>{
            window.location = './index.html';
        }, 3000)
    }finally{
        dispatchEvent('finishRegisterUser', null, registerForm);
    }
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
        throw 'El email no es correcto';
    }
    return result
};

const isPasswordValid = (password, passwordConfirm) => {
    let result = true;
    if(password.value !== passwordConfirm.value){
        throw 'Las contraseñas no son iguales'
    };
    return result;
};



