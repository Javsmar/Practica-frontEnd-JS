import { getAnuncios } from "./anunciosListModel.js";
import { buildAnuncio, emptyAnuncios } from "./anunciosListView.js";

export const anunciosController = async (anuncioList) => {
    anuncioList.innerHTML = '';
    let anuncios = [];
    try {
        anuncios = await getAnuncios();
    } catch (error) {
        const event = createCustomEvent('error', 'Error al cargar anuncios')
        anuncioList.dispatchEvent(event);
    }

    const countAnunciosElement = document.getElementById('countAnuncios');

    if(anuncios.length === 0){

        anuncioList.innerHTML = emptyAnuncios(); 

    }else{
        countAnunciosElement.textContent = `Cantidad de anuncios cargados: ${anuncios.length}`;

        renderAnuncios(anuncios, anuncioList)
        
        const event = createCustomEvent('success', 'Anuncios cargados exitosamente')
        anuncioList.dispatchEvent(event);
    }

}

const renderAnuncios = (anuncios, anuncioList) => {
    anuncios.forEach(anuncio => {
        const anuncioContainer = document.createElement('div');
        anuncioContainer.classList.add('anuncio-item');

        anuncioContainer.innerHTML = buildAnuncio(anuncio);

        anuncioList.appendChild(anuncioContainer);
    
    });
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent("anunciosLoaded", {
        detail:{
            type: type,
            message: message
        }
    });
    return event;
}
