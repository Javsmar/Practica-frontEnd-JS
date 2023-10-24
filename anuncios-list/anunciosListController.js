import { getAnuncios } from "./anunciosListModel.js";
import { buildAnuncio, emptyAnuncios } from "./anunciosListView.js";

export const anunciosController = async (anuncioList) => {
    anuncioList.innerHTML = '';
    const anuncios = await getAnuncios();
    const countAnunciosElement = document.getElementById('countAnuncios');

    if(anuncios.length === 0){

        anuncioList.innerHTML = emptyAnuncios(); 

    }else{
        countAnunciosElement.textContent = `Cantidad de anuncios: ${anuncios.length}`;

        anuncios.forEach(anuncio => {
            const anuncioContainer = document.createElement('div');
            anuncioContainer.classList.add('anuncio-item');
    
            anuncioContainer.innerHTML = buildAnuncio(anuncio);
    
            anuncioList.appendChild(anuncioContainer);
        
        });
    }


}
