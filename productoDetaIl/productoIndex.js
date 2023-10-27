
import {notificationsController} from "../notificationsAnuncios/notificationsController.js"
import { productoDetailcontroller } from "./productoDetailController.js";

document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const anuncioId = params.get("id");

    const notification = document.querySelector('#notification');
    const showNotification = notificationsController(notification);

    const productoDetail = document.querySelector('#productoDetail');

    productoDetail.addEventListener('productoLouderError', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });
    productoDetailcontroller(productoDetail, anuncioId); 
});
