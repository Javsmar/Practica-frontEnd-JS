import { anunciosController } from "./anuncios-list/anunciosListController.js";
import { notificationsController } from "./notificationsAnuncios/notificationsController.js";

const loadAnuncioButton = document.querySelector('#loadAnuncios');
const hideAnuncioButton = document.querySelector('#hideAnuncios');
const anuncioList = document.getElementById('anuncios');
const notifications = document.querySelector('#notifications')

const showNotifications = notificationsController(notifications);

loadAnuncioButton.addEventListener('click', () => {
    anunciosController(anuncioList);
});

anuncioList.addEventListener('anunciosLoaded', (event) => {
    showNotifications(event.detail.message);
});