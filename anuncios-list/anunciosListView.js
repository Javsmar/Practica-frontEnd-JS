

export const buildAnuncio = (anuncio) => {
    return `
    <a href="../anunciosDetails.html?id=${anuncio.id}">
    <span>Autor: ${anuncio.handler}</span><br><br>
    <img src="${anuncio.photo}" alt="Imagen del producto"><br><br>
    <span>nombre: ${anuncio.name}</span><br><br>
    <span>fecha: ${anuncio.date}</span>
    <p>Descripción: ${anuncio.description}</p>
    <p>Precio: $${anuncio.price}</p>
    <p>${anuncio.isForSale ? "En Venta" : "En Compra"}</p>
    </a>
`;
}

export const emptyAnuncios = () => {
    return `
        <h3>No hay anuncios disponibles en este momento intentalo mas tarde</3>
    `
}