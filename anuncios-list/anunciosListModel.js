const transformAnuncios = (anuncios) => {
    return anuncios.map(anuncio => ({
        photo: anuncio.photo,
        date: new Date().toISOString(),
        name: anuncio.title,
        description: anuncio.description,
        price: anuncio.price,
        isForSale: anuncio.isForSale
    }))
};

export const getAnuncios = async () => {
    const url = "http://localhost:8000/api/anuncios";
    let parsedAnuncios = [];
    try {

        const response = await fetch(url);
        const anuncios = await response.json();
        parsedAnuncios = transformAnuncios(anuncios)
        
    } catch (error) {
        throw error;
    }
    return parsedAnuncios
}

