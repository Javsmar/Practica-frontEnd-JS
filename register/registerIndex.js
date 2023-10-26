import { notificationsController } from "../notificationsAnuncios/notificationsController.js";
import { registerController } from "./registerController.js";
import { loaderController } from "../loader/loaderController.js";

const registerForm = document.querySelector('#register');
const notificationsSection = document.querySelector('#notifications');

const loader = document.getElementById('loader');
const {show, hide} = loaderController(loader);

registerForm.addEventListener('startRegisterUser', () => {
    show();
});
registerForm.addEventListener('finishRegisterUserr', () => {
    hide();
})

const showNotification = notificationsController(notificationsSection);

registerController(registerForm);

registerForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type)
});


