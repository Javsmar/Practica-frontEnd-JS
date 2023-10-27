import { getProducto } from "./productoDetailModel.js"
import { buildAnuncio } from "./productoDetailView.js"
import {dispatchEvent} from "../utils/dispatchEvents.js"

export const productoDetailcontroller = async (productoDetail, productoId) => {
    try {
        const producto = await getProducto(productoId)
        productoDetail.innerHTML = buildAnuncio(producto);
    } catch (error) {

        dispatchEvent('productoLouderError', {type: "error", message: "producto no existe"}, productoDetail)
        setTimeout(() => {
            window.location = './index.html';
        }, 2000)
    }
}

