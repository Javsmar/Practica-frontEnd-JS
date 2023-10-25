import { notificationsController } from "../notificationsAnuncios/notificationsController.js";
import { registerController } from "./registerController.js";

const registerForm = document.querySelector('#register');
const notificationsSection = document.querySelector('#notifications');

const showNotification = notificationsController(notificationsSection);
registerController(registerForm);

registerForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type)
});


