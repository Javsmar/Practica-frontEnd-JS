import { anunciosController } from "./anuncios-list/anunciosListController.js";
import { notificationsController } from "./notificationsAnuncios/notificationsController.js";

const notifications = document.querySelector('#notifications')

const showNotifications = notificationsController(notifications);


document.addEventListener('DOMContentLoaded', () => {
    const anuncioList = document.getElementById('anuncios');
    anunciosController(anuncioList);

    anuncioList.addEventListener('anunciosLoaded', (event) => {
        showNotifications(event.detail.message, event.detail.type);
    });
})

window.addEventListener('offline', () => {
    showNotifications('Se ha perdido la conexión', 'error');
})

