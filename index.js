import { anunciosController } from "./anuncios-list/anunciosListController.js";

const loadAnuncioButton = document.querySelector('#loadAnuncios');
const hideAnuncioButton = document.querySelector('#hideAnuncios');
const anuncioList = document.getElementById('anuncios');

loadAnuncioButton.addEventListener('click', () => {
    anunciosController(anuncioList);
});

hideAnuncioButton.addEventListener('click', () => {
    anuncioList.classList.toggle('hidden');
})
