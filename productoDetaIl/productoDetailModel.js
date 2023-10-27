const parseProducto = (anuncio) => {
    return {
        id: anuncio.id,
        photo: anuncio.photo,
        name: anuncio.name.toUpperCase(),
        date: anuncio.date, 
        description: anuncio.description,
        price: anuncio.price,
        isForSale: anuncio.isForSale
    }
}


export const getProducto = async (anuncioId) => {
    const url = `http://localhost:8000/api/anuncios/${anuncioId}`;
    let producto;
    try {
        const response = await fetch(url);
        if(response.ok){
            producto = await response.json();
        }else{
            throw new Error('El producto no existe');
        }
    } catch (error) {
        throw error.message;
    }

    return parseProducto(producto)
}