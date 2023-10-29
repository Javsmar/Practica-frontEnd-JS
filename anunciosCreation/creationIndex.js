import { anuncioCreationController } from "./anuncioCreationController.js";
import {notificationsController} from "../notificationsAnuncios/notificationsController.js"
import { loaderController } from "../loader/loaderController.js";

const token = localStorage.getItem('token');
if(!token){
    window.location = './index.html';
}


document.addEventListener('DOMContentLoaded', () => {
    const anuncioCreation = document.querySelector('#anuncioCreation');

    const loader = document.getElementById('loader');
    
    const {show, hide} = loaderController(loader);

    const notifications = document.querySelector('#notification');
    const showNotification =  notificationsController(notifications);

    anuncioCreation.addEventListener('startAnuncioCreation', () => {
        show();
    });

    anuncioCreation.addEventListener('finishAnuncioCreation', () => {
        hide();
    })

    anuncioCreation.addEventListener('anuncioCreated', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });

    anuncioCreationController(anuncioCreation);
});


