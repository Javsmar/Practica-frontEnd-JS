import { createAnuncio } from "./anuncioCreationModel.js";
import {dispatchEvent} from "../utils/dispatchEvents.js"

export const anuncioCreationController = async (anuncioCreation) => {

    anuncioCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(anuncioCreation);
        const photo = formData.get('photo');
        const name = formData.get('name');
        const date = formData.get('date');
        const description = formData.get('description');
        const price = formData.get('price');

        const isFor = formData.get('isFor'); 

        try {
            dispatchEvent('startAnuncioCreation', null, anuncioCreation);
            if (isFor === 'sale') {
                await createAnuncio(photo, name, date, description, price, true, false);
            } else if (isFor === 'purchase') {
                await createAnuncio(photo, name, date, description, price, false, true);
            } else {
                alert('ninguna opción está seleccionada')
            }
            dispatchEvent('anuncioCreated', {type: "success", message: "anuncio creado correctamente"}, anuncioCreation)
            alert('anuncio ok')
            setTimeout(() => {
                window.location = "index.html"
            }, 2000)
        } catch (error) {
            dispatchEvent('anuncioCreated', {type: "error", message: "Error creando anuncio"}, anuncioCreation);
        }finally{
            dispatchEvent('finishAnuncioCreation', null, anuncioCreation);
        }
    })
}






