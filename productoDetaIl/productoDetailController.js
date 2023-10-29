import { deleteProducto, getProducto } from "./productoDetailModel.js"
import { buildAnuncio } from "./productoDetailView.js"
import { dispatchEvent } from "../utils/dispatchEvents.js"
import { decodeToken } from "../utils/decodeToken.js"

export const productoDetailcontroller = async (productoDetail, anuncioId) => {
    try {
        const producto = await getProducto(anuncioId)
        productoDetail.innerHTML = buildAnuncio(producto);
        handleDeleteProducto(producto, productoDetail);
    } catch (error) {

        dispatchEvent('productoLouderError', {type: "error", message: "producto no existe"}, productoDetail)
        setTimeout(() => {
            window.location = './index.html';
        }, 3000)
    }
}

const handleDeleteProducto = (producto,productoDetail) => {
    const token = localStorage.getItem('token');
    if(token){
        const {userId} = decodeToken(token);
        if(userId === producto.userId){
            addDeleteProductoButton(producto, productoDetail);
        }
    };
};

const addDeleteProductoButton = (producto, productoDetail) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar Producto';
    
    deleteButton.addEventListener('click', async () => {
        if(confirm('¿Seguro quieres borrar el anuncio?')){
            await deleteProducto(producto.id);
            window.location = 'index.html';
        };
    });

    productoDetail.appendChild(deleteButton);
}
