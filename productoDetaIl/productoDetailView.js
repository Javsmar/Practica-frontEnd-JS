export const buildAnuncio = (anuncio) => {
    return `
    <img src="${anuncio.photo}" alt="Imagen del producto"><br><br>
    <span>nombre: ${anuncio.name}</span><br><br>
    <span>fecha: ${anuncio.date}</span>
    <p>Descripción: ${anuncio.description}</p>
    <p>Precio: $${anuncio.price}</p>
    <p>${anuncio.isForSale ? "En Venta" : "En Compra"}</p>
    `
}