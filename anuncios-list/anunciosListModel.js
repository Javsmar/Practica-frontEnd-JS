const transformAnuncios = (anuncios) => {
    return anuncios.map(anuncio => ({
        handler: anuncio.user.username,
        photo: anuncio.photo,
        date: new Date().toISOString(),
        name: anuncio.name,
        description: anuncio.description,
        price: anuncio.price,
        isForSale: anuncio.isForSale,
        id: anuncio.id 
    }))
};

export const getAnuncios = async () => {
    const url = "http://localhost:8000/api/anuncios?_expand=user";
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

