import { anunciosController } from "./anuncios-list/anunciosListController.js";
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notificationsAnuncios/notificationsController.js";
import { sessionController } from "./session/sessionController.js";

const notifications = document.querySelector('#notifications')


const showNotifications = notificationsController(notifications);

const loader = document.getElementById('loader');
const {show, hide} = loaderController(loader)

document.addEventListener('DOMContentLoaded', () => {
    const anuncioList = document.getElementById('anuncios');
    
    anuncioList.addEventListener('anunciosLoaded', (event) => {
        showNotifications(event.detail.message, event.detail.type);
    })
    
    anuncioList.addEventListener('startLoadingAnuncios', () => {
        show();
    });
    
    anuncioList.addEventListener('finishLoadingAnuncios', () => {
        hide();
    });
    
    
    anuncioList.addEventListener('startRegisterUser', () => {
        show();
    });
    
    anuncioList.addEventListener('finishRegisterUser', () => {
        hide();
    });

    anunciosController(anuncioList);
    
    const session = document.getElementById('session');
    sessionController(session)
})

window.addEventListener('offline', () => {
    showNotifications('Se ha perdido la conexión', 'error');
})

